import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      <Sidebar />
      <div className="flex-grow bg-white/70 backdrop-blur-lg">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default AuthLayout;
