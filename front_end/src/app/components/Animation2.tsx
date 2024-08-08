// components/AnimatedElement.tsx
"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
}

const Animation2: React.FC<AnimatedElementProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.5, x: 200 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1.2 }}
      className={`${className} hidden md:block`} 
    >
      {children}
    </motion.div>
  );    
};

export default Animation2;
