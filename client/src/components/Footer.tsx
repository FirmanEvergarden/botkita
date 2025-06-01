import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://wa.me/6283861518933",
      icon: "fab fa-whatsapp",
      color: "hover:text-green-500",
      label: "WhatsApp"
    },
    {
      href: "https://instagram.com/mannevgr",
      icon: "fab fa-instagram",
      color: "hover:text-pink-500",
      label: "Instagram"
    },
    {
      href: "https://www.youtube.com/@mannevgr",
      icon: "fab fa-youtube",
      color: "hover:text-red-500",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <i className="fab fa-whatsapp text-3xl text-green-500 mr-3"></i>
            <span className="text-2xl font-bold gradient-text">BotKita</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Solusi otomatis terdepan untuk topup pulsa, token listrik, dan voucher game. 
            Layanan 24/7 dengan harga terbaik langsung di WhatsApp Anda.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-colors duration-300`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-gray-800 pt-6"
          >
            <p className="text-gray-500">
              © 2024 BotKita. All rights reserved. Made with ❤️ for your business success.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
