// components/AnimatedElement.tsx
"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );    
};

export default AnimatedElement;
