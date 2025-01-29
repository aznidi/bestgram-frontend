import React from 'react'
import { motion } from 'framer-motion'
function Card({ service }) {
  return (
    <motion.div
        key={service.id}
        className="bg-muted p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-xl md:max-w-md flex flex-col justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ x: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
    >
        <div className="flex items-center justify-center gap-4 mb-4">
            <img src={service.icon} alt=""  className='w-24 h-24'/>
        </div>
        <div className="flex items-center  justify-center text-primary gap-4 mb-4">
            <h4 className="text-2xl md:text-3xl font-bold">{service.label}</h4>
        </div>
        <p className="text-lg md:text-xl text-secondary">{service.description}</p>
        <ul className="mt-4 space-y-2 text-light text-sm md:text-base">
        {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">✅ {feature}</li>
        ))}
        </ul>
        <p className="mt-4 text-2xl font-semibold">{service.price}</p>
        <div className="mt-6 flex gap-4">
        {service.freeDemo && (
            <motion.button
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            className="bg-success px-6 py-3 rounded-full text-dark font-semibold hover:bg-opacity-80 transition"
            >
            Free Demo
            </motion.button>
        )}
        <motion.button
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            className="bg-primary px-6 py-3 rounded-full text-white font-semibold hover:bg-opacity-80 transition"
        >
            Buy Now
        </motion.button>
        </div>
    </motion.div>
  )
}

export default Card