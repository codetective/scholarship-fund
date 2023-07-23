import React from 'react';
import AdminLayout from '../components/Admin/layout/AdminLayout';
import AuthWrapper from '../components/Admin/Auth/AuthWrapper';
import AuthProvider from '../contexts/AuthContext';

function Admin() {
  return (
    <AuthProvider>
      <AuthWrapper>
        <AdminLayout />
      </AuthWrapper>
    </AuthProvider>
  );
}

export default Admin;
