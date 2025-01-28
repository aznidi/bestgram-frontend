import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket, FaHeart } from 'react-icons/fa';
import dashboard from '../../assets/images/dashboard.png';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-8 px-6 lg:px-16">
      
      {/* Text Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left lg:w-1/2 space-y-6"
      >
        <motion.h1
          className="text-4xl lg:text-6xl font-extrabold text-primary tracking-wide leading-tight"
        >
          <FaRocket className="inline-block text-yellow-500 mr-2" />
          Boost Your Social Media Presence
        </motion.h1>
        
        <p className="text-lg lg:text-xl text-secondary leading-relaxed">
          With BestGram, skyrocket your influence with likes, followers, and engagement like never before! 🚀
        </p>

        <motion.button
          whileHover={{ x: 2 }}
          className="bg-primary text-white px-6 py-3 rounded-2xl shadow-custom flex items-center gap-2 hover:bg-accent"
        >
          Explore Now
          <motion.div whileHover={{ x: 2 }}>
            <FaArrowRight size={24} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block lg:w-1/2"
      >
        <img
          src={dashboard}
          alt="Dashboard Example"
          className="w-full max-w-xl lg:max-w-2xl mx-auto rounded-md shadow-custom"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
