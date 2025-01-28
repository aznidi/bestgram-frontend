import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import { DarkModeProvider } from '../context/DarkModeContext';

const AuthLayout = ({ children }) => {
  return (
    <DarkModeProvider >
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <main className="p-4">{children}</main>
        </div>
      </div>
    </DarkModeProvider>
    
  );
};

export default AuthLayout;