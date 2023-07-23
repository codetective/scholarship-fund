import React from 'react';
import { Auth, useAuth } from '../../../contexts/AuthContext';
import LoginForm from './LoginForm';
import Loader from '../Loader';

function AuthWrapper({ children }) {
  const { authState } = useAuth();

  return authState === Auth.loading ? (
    <Loader />
  ) : authState === Auth.authenticated ? (
    <>{children}</>
  ) : (
    <LoginForm />
  );
}

export default AuthWrapper;
