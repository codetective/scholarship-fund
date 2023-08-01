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
  token: string | null;
  loading: boolean;
  handleUnauthorized: (() => void) | null;
}>({
  authState: Auth.loading,
  login: null,
  logout: null,
  error: null,
  loading: false,
  token: null,
  handleUnauthorized: null,
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState<Auth>(Auth.loading);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axios.post(backendUrl + '/api/login', {
        email,
        password,
      });
      const { token } = response.data;
      setToken(token);
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
      await axios.post(
        backendUrl + '/api/logout',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      );
      localStorage.removeItem(localToken);
      setAuthState(Auth.unauthenticated);
      setToken(null);
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
        await axios.post(
          backendUrl + '/api/checkAuth',
          {},
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        setAuthState(Auth.authenticated);
        setToken(token);
      } else {
        setAuthState(Auth.unauthenticated);
      }
    } catch (error) {
      console.error('Authentication check failed', error);
      setAuthState(Auth.unauthenticated);
    }
  };

  const handleUnauthorized = () => {
    alert('Session expired, please log in again');
    checkAuth();
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        loading,
        logout,
        error,
        token,
        handleUnauthorized,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
