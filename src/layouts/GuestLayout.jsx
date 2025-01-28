import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { DarkModeProvider } from '../context/DarkModeContext'; // Import the DarkModeProvider

const GuestLayout = ({ children }) => {
  return (
    <DarkModeProvider> {/* Wrap the component tree with DarkModeProvider */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default GuestLayout;
