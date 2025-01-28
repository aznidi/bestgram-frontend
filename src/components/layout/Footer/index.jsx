import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-10 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">About Us</h3>
            <p className="text-sm text-light">
              BestGram is your go-to platform for boosting your social media presence. We offer likes, followers, and more!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Pricing', 'Contact', 'Login', 'Register'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-6">
              {[
                { href: 'https://facebook.com', icon: <FaFacebook size={24} />, color: "text-accent" },
                { href: 'https://twitter.com', icon: <FaTwitter size={24} />, color: "text-accent" },
                { href: 'https://instagram.com', icon: <FaInstagram size={24} />, color: "text-accent" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} hover:opacity-80 transition-opacity`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-light/20 pt-4">
          <p className="text-sm text-light">
            &copy; {new Date().getFullYear()} BestGram. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
