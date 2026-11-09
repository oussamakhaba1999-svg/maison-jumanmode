import { motion } from 'framer-motion';

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
      transition={{ 
        duration: 0.65, 
        ease: 'easeInOut',
        // Slight artificial delay to make the loading feel intentional and premium
        delay: 0.15 
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
