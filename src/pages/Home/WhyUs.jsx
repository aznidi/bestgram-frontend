import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaStar, FaThumbsUp } from 'react-icons/fa';

function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: <FaRocket className="text-5xl text-primary mb-4" />,
      title: 'Boost Your Presence',
      description: 'Skyrocket your influence with top-tier engagement strategies.',
    },
    {
      icon: <FaUsers className="text-5xl text-secondary mb-4" />,
      title: 'Global Community',
      description: 'Join thousands of users who trust us to grow their audience.',
    },
    {
      icon: <FaStar className="text-5xl text-accent mb-4" />,
      title: 'Top-Rated Service',
      description: 'We deliver high-quality results with a satisfaction guarantee.',
    },
    {
      icon: <FaThumbsUp className="text-5xl text-muted mb-4" />,
      title: 'Trusted by Brands',
      description: 'Partner with the most reliable platform for social media growth.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Déclenche l'observation lorsque 10% de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 lg:px-16">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className="text-4xl font-extrabold text-center text-primary mb-12"
      >
        Why Choose BestGram?
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: isVisible ? 'grid' : 'none' }} // Masque le contenu si la section n'est pas visible
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={variants}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-custom hover:shadow-lg"
            whileHover={{ x: 3 }}
          >
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-secondary">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default WhyUs;