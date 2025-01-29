import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { DarkModeProvider } from '../context/DarkModeContext';

const GuestLayout = ({ children }) => {
  return (
    <DarkModeProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-tl from-secondary via-accent to-primary">
        <Header />
        <main className="flex-grow bg-white/80 backdrop-blur-lg p-4 rounded-xl mx-4 my-6 shadow-xl">
          {children}
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default GuestLayout;
