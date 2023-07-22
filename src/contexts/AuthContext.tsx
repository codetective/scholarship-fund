import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState('loading');
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setAuthState('authenticated');
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please try again.');
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/logout');
      localStorage.removeItem('token');
      setAuthState('unauthenticated');
    } catch (error) {
      console.error('Logout failed', error);
      setError('Logout failed. Please try again.');
    }
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await axios.post('/api/checkAuth', { token });
        setAuthState('authenticated');
      } else {
        setAuthState('unauthenticated');
      }
    } catch (error) {
      console.error('Authentication check failed', error);
      setAuthState('unauthenticated');
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
