import { motion } from "framer-motion";

const Pricing = () => {
  const basicFeatures = [
    "Tersedia Layanan Pulsa & Kuota, E Wallet",
    "Cocok untuk yang mau coba-coba",
    "Tidak bisa request Fitur / Tampilan",
    "Server Bot 1 Bulan"
  ];

  const mediumFeatures = [
    "Layanan bot WhatsApp topup otomatis",
    "Server bot 1 bulan",
    "Panduan cara menggunakan bot",
    "Konsultasi permanen",
    "Request merubah tampilan/fitur (7 hari)"
  ];

  const proFeatures = [
    "Semua yang ada di Paket Medium",
    "Layanan suntik sosmed",
    "Server bot 2 bulan",
    "Bebas request merubah fitur tanpa batas",
    "Fitur pembukuan transaksi",
    "Priority support"
  ];

  return (
    <section className="py-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Paket <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket sudah termasuk support dan panduan lengkap.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Paket Basic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 card-hover border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paket Basic</h3>
              <div className="text-5xl font-bold text-green-600 mb-2">Rp 54K</div>
              <p className="text-gray-600 dark:text-gray-300">Untuk yang ingin mencoba</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {basicFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <i className="fas fa-check text-green-600 text-lg mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="https://wa.me/6283861518933?text=Halo, saya ingin membeli Paket Basic (Rp 54.000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Beli Paket Basic
            </motion.a>
          </motion.div>

          {/* Paket Medium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 card-hover border border-gray-100 dark:border-gray-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Paket Medium</h3>
              <div className="text-5xl font-bold text-green-600 mb-2">Rp 114K</div>
              <p className="text-gray-600 dark:text-gray-300">Perfect untuk memulai bisnis topup</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {mediumFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-center"
                >
                  <i className="fas fa-check text-green-600 text-lg mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="https://wa.me/6283861518933?text=Halo, saya ingin membeli Paket Medium (Rp 114.000)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Beli Paket Medium
            </motion.a>
          </motion.div>
          
          {/* Paket Pro Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl shadow-xl p-8 card-hover text-white relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">MOST POPULAR</span>
            </div>
            
            <div className="text-center mb-8 mt-4">
              <h3 className="text-2xl font-bold mb-2">Paket Pro</h3>
              <div className="text-5xl font-bold mb-2">Rp 157K</div>
              <p className="text-green-100">Solusi lengkap untuk bisnis serius</p>
            </div>
            
            <div className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center"
                >
                  <i className={`${index === 5 ? 'fas fa-star text-yellow-300' : 'fas fa-check text-green-100'} text-lg mr-3`}></i>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-3">
              <motion.a
                href="https://wa.me/6283861518933?text=Halo, saya ingin membeli Paket Pro (Rp 157.000)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Beli Paket Pro
              </motion.a>
              <motion.a
                href="https://wa.me/6283861518933?text=apa itu suntik sosmed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-white text-white py-3 px-6 rounded-xl font-medium hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-info-circle mr-2"></i>
                Apa itu Suntik Sosmed?
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Butuh Konsultasi?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tim kami siap membantu Anda memilih paket yang tepat sesuai dengan kebutuhan bisnis Anda.
            </p>
            <motion.a
              href="https://wa.me/6283861518933?text=Halo, saya ingin konsultasi tentang paket yang sesuai untuk bisnis saya"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Konsultasi Gratis
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
