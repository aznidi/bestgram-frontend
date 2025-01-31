import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, Star } from 'lucide-react';
import { Button } from '@headlessui/react';
function Card({ service }) {
  return (
    <motion.div
      key={service.id}
      className="bg-white p-4 lg:p-8 rounded-xl shadow-2xl w-full max-w-md
       mx-auto flex flex-col justify-between gap-6 transform hover:scale-105
        hover:shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Icon Section */}
      <div className="flex items-center justify-center lg:mb-6 mb-2">
        <img src={service.icon} alt="" className="w-14 h-14 lg:w-24 lg:h-24 rounded-full bg-primary p-4 shadow-md" />
      </div>

      {/* Title Section */}
      <div className="text-center">
        <h4 className="lg:text-3xl text-xl font-semibold text-primary">{service.label}</h4>
      </div>

      {/* Description */}
      <p className="lg:text-lg text-sm text-gray-600 leading-relaxed text-center lg:mb-6 mb-2">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-4 text-gray-500 text-sm">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Star className='text-secondary' />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price Section */}
      <p className="mt-6 text-3xl font-extrabold text-primary text-center">
        {service.price}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col lg:flex-row gap-4 justify-center">
        {service.freeDemo && (
          <Button 
          className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-transparent border border-primary
                    py-1.5 px-3 text-sm/6 font-extralight text-primary shadow-inner shadow-primary/10 focus:outline-none
                    hover:shadow-md hover:scale-104 transition-all duration-300 ease-in-out"
        >
          <span>Free Demo</span>
        </Button>
        
        )}
        <Button className="inline-flex w-full justify-center items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-extralight text-white shadow-inner
         shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 
         data-[focus]:outline-1 data-[focus]:outline-white">
            <ShoppingBasket />
            <span>Buy Now !</span>
          </Button>
      </div>
    </motion.div>
  );
}

export default Card;
