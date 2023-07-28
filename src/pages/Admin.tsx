import React from 'react';
import AdminLayout from '../components/Admin/layout/AdminLayout';
import AuthWrapper from '../components/Admin/Auth/AuthWrapper';
import AuthProvider from '../contexts/AuthContext';
import AdminDataProvider from '../contexts/AdminDataContext';

function Admin() {
  return (
    <AuthProvider>
      <AuthWrapper>
        <AdminDataProvider>
          <AdminLayout />
        </AdminDataProvider>
      </AuthWrapper>
    </AuthProvider>
  );
}

export default Admin;
