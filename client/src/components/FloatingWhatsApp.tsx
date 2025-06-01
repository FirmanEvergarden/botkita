import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a
        href="https://wa.me/6283861518933"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button text-white p-4 rounded-full shadow-lg block"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </motion.a>
    </motion.div>
  );
};

export default FloatingWhatsApp;
