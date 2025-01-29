import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket } from 'react-icons/fa';
import dashboard from '../../assets/images/dashboard.png';

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:flex-row lg:justify-between lg:px-16 space-y-8 lg:space-y-0">
      
      {/* Text Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-left lg:w-1/2 space-y-6"
      >
        <motion.h1
          className="text-3xl lg:text-5xl font-bold text-primary tracking-tight leading-snug"
        >
          <FaRocket className="inline-block text-yellow-500 mr-2" />
          Boost Your Social Media Presence
        </motion.h1>
        
        <p className="text-base lg:text-lg text-secondary leading-relaxed">
          With BestGram, skyrocket your influence with likes, followers, and engagement like never before! 🚀
        </p>

        <motion.div className="flex justify-center lg:justify-start">
          <motion.button
            whileHover={{ x: 2 }}
            className="bg-primary text-white px-5 py-3 rounded-2xl shadow-custom flex items-center gap-2 hover:bg-accent"
          >
            Explore Now
            <motion.div whileHover={{ x: 2 }}>
              <FaArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image Section (Hidden on Mobile) */}
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
