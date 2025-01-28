import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fermer le menu si l'utilisateur clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed w-full bg-transparent backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo animé */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link to="/" className="text-2xl font-bold text-accent">
            BestGram
          </Link>
        </motion.div>

        {/* Navigation pour les écrans larges */}
        <nav className="hidden md:flex space-x-6">
          {['Services', 'Pricing', 'Contact'].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative text-accent hover:text-muted transition-colors"
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Boutons de connexion et d'inscription */}
        <div className="hidden md:flex space-x-4">
          <motion.div whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 200 }}>
            <Link
              to="/login"
              className="flex items-center underline text-dark px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 200 }}>
            <Link
              to="/register"
              className="flex items-center bg-primary text-dark px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Register
            </Link>
          </motion.div>
        </div>

        {/* Menu Hamburger pour les petits écrans */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-accent focus:outline-none">
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden bg-dark/95 backdrop-blur-md p-4 absolute top-full left-0 w-full shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4">
              {['Services', 'Pricing', 'Contact'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-light hover:text-accent transition-colors"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col space-y-2">
                <motion.div whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}>
                  <Link
                    to="/login"
                    className="flex items-center bg-accent text-dark px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 200 }}>
                  <Link
                    to="/register"
                    className="flex items-center bg-primary text-dark px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                    onClick={toggleMenu}
                  >
                    Register
                  </Link>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
