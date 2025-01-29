import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHeart, FaComments, FaEye, FaRobot, FaStar } from "react-icons/fa";
import Card from "../../components/ui/Card";

//Importer les icons src/assets/icons


const services = [
  {
    id: 1,
    icon: '/icons/abonnes.png',
    label: "Premium Followers",
    description: "High-quality profiles with gradual delivery.",
    features: ["Targeted demographics", "24/7 support"],
    price: "$3.99/1k",
    freeDemo: true,
  },
  {
    id: 2,
    icon: '/icons/comme.png',
    label: "Smart Likes",
    description: "Natural engagement with real accounts.",
    features: ["Post-specific targeting", "Analytics included"],
    price: "$2.99/1k",
    freeDemo: false,
  },
  {
    id: 3,
    icon:  '/icons/chat.png',
    label: "Engaged Comments",
    description: "Customizable messages and emoji integration.",
    features: ["Spam filtering", "Multiple languages"],
    price: "$4.99/100",
    freeDemo: false,
  },
  {
    id: 4,
    icon:  '/icons/voir.png',
    label: "Story Views",
    description: "Organic-looking views with geotargeting.",
    features: ["Gradual increase", "Detailed analytics"],
    price: "$1.99/1k",
    freeDemo: true,
  },
  {
    id: 5,
    icon:  '/icons/assistant-ia.png',
    label: "AI Content Suite",
    description: "Post generation and hashtag optimization.",
    features: ["Caption writing", "Analytics dashboard"],
    price: "$99/mo",
    freeDemo: true,
  },
  {
    id: 6,
    icon:  '/icons/influencer.png',
    label: "Influencer Package",
    description: "All-in-one growth with VIP support.",
    features: ["Competitor analysis", "Daily reports"],
    price: "$499/mo",
    freeDemo: false,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6">
      <motion.h3
        className="text-center text-primary mt-16 font-extrabold text-4xl lg:text-5xl md:text-6xl mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h3>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Card service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
