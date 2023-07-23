import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { backendUrl, localToken } from '../../config/constants';

export enum Auth {
  'authenticated',
  'unauthenticated',
  'loading',
}

export const AuthContext = createContext<{
  authState: Auth;
  login: ((a: string, b: string) => Promise<void>) | null;
  logout: (() => Promise<void>) | null;
  error: string | null;
  loading: boolean;
}>({
  authState: Auth.loading,
  login: null,
  logout: null,
  error: null,
  loading: false,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState<Auth>(Auth.loading);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post(backendUrl + '/api/login', {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem(localToken, token);
      setAuthState(Auth.authenticated);
      setLoading(false);
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid credentials, please try again.');
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem(localToken);
      await axios.post(backendUrl + '/api/checkAuth', { token });
      localStorage.removeItem(localToken);
      setAuthState(Auth.unauthenticated);
      setLoading(false);
    } catch (error) {
      console.error('Logout failed', error);
      setError('Logout failed. Please try again.');
      setLoading(false);
    }
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem(localToken);
      if (token) {
        await axios.post(backendUrl + '/api/checkAuth', { token });
        setAuthState(Auth.authenticated);
      } else {
        setAuthState(Auth.unauthenticated);
      }
    } catch (error) {
      console.error('Authentication check failed', error);
      setAuthState(Auth.unauthenticated);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, login, loading, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
