import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-dark/50 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-accent">
          BestGram
        </Link>

        {/* Navigation pour les écrans larges */}
        <nav className="hidden md:flex space-x-6 relative">
          {['Services', 'Pricing', 'Contact'].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative text-light hover:text-accent transition-colors"
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </nav>

        {/* Boutons de connexion et d'inscription */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="flex items-center bg-accent text-dark px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
          >
            <FaSignInAlt className="mr-2" />
            Login
          </Link>
          <Link
            to="/register"
            className="flex items-center bg-primary text-dark px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            <FaUser className="mr-2" />
            Register
          </Link>
        </div>

        {/* Menu Hamburger pour les petits écrans */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-light focus:outline-none">
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-dark/95 backdrop-blur-md p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            {['Services', 'Pricing', 'Contact'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="text-light hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col space-y-2">
              <Link
                to="/login"
                className="flex items-center bg-accent text-dark px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
                onClick={toggleMenu}
              >
                <FaSignInAlt className="mr-2" />
                Login
              </Link>
              <Link
                to="/register"
                className="flex items-center bg-primary text-dark px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                onClick={toggleMenu}
              >
                <FaUser className="mr-2" />
                Register
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;