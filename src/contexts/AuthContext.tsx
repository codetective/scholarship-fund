import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { localToken } from '../../config/constants';

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
}>({
  authState: Auth.loading,
  login: null,
  logout: null,
  error: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState<Auth>(Auth.loading);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      const { token } = response.data;
      localStorage.setItem(localToken, token);
      setAuthState(Auth.authenticated);
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please try again.');
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/logout');
      localStorage.removeItem(localToken);
      setAuthState(Auth.unauthenticated);
    } catch (error) {
      console.error('Logout failed', error);
      setError('Logout failed. Please try again.');
    }
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem(localToken);
      if (token) {
        await axios.post('/api/checkAuth', { token });
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
    <AuthContext.Provider value={{ authState, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
