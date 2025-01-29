import React from 'react';
import { motion } from 'framer-motion';

function Card({ service }) {
  return (
    <motion.div
      key={service.id}
      className="bg-accent p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-xl md:max-w-md flex flex-col justify-between space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ x: 2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon Section */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <img src={service.icon} alt="" className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary p-2 shadow-sm" />
      </div>

      {/* Title Section */}
      <div className="flex items-center justify-center text-primary gap-4 mb-4">
        <h4 className="text-2xl lg:text-3xl font-bold">{service.label}</h4>
      </div>

      {/* Description */}
      <p className="text-md lg:text-lg text-secondary leading-relaxed text-center">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="mt-4 space-y-2 text-secondary text-sm lg:text-base">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src="/icons/oui.png" className="w-5 h-5" alt="" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price Section */}
      <p className="mt-8 text-4xl lg:text-5xl font-extrabold text-primary text-center">
        {service.price}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col lg:flex-row gap-4">
        {service.freeDemo && (
          <motion.button
            transition={{ duration: 0.2 }}
            className="bg-primary px-6 py-3 hover:underline rounded-full text-white font-semibold hover:bg-opacity-80 transition"
          >
            Free Demo
          </motion.button>
        )}
        <motion.button
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
          className="bg-success px-6 py-3 rounded-full text-dark font-semibold hover:bg-opacity-80 transition"
        >
          Buy Now!
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Card;
