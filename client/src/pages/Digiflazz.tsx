import { motion } from "framer-motion";

const Digiflazz = () => {
  const products = [
    { icon: "fas fa-mobile-alt", name: "Pulsa semua operator" },
    { icon: "fas fa-wifi", name: "Paket data internet" },
    { icon: "fas fa-bolt", name: "Token listrik PLN" },
    { icon: "fas fa-gamepad", name: "Voucher game" },
    { icon: "fas fa-file-invoice", name: "Pembayaran PPOB" },
    { icon: "fas fa-water", name: "Tagihan air, BPJS, dll" }
  ];

  const buyerBenefits = [
    "Mudah mencari supplier",
    "Satu deposit untuk semua",
    "Integrasi mudah"
  ];

  const sellerBenefits = [
    "Jangkauan pasar lebih luas",
    "Manajemen transaksi terpusat",
    "Efisien dan aman"
  ];

  return (
    <section className="py-20 min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Apa Itu <span className="gradient-text">Digiflazz?</span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border border-green-100 dark:border-green-800"
          >
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Bayangkan Digiflazz itu seperti <strong>"pasar besar"</strong> atau <strong>"jembatan penghubung"</strong> untuk produk-produk digital, terutama pulsa dan paket data.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Jadi, Digiflazz adalah sebuah <em>platform</em> atau sistem yang mempertemukan pihak yang ingin <strong>menjual</strong> produk digital (disebut <em>supplier</em> atau <em>seller</em>) dengan pihak yang ingin <strong>membeli</strong> produk digital tersebut (disebut <em>buyer</em> atau pembeli).
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contoh produk digital yang tersedia:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800"
                >
                  <i className={`${product.icon} text-green-600 dark:text-green-400 text-xl mr-3`}></i>
                  <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center italic">
              *Dan ribuan produk digital lainnya tersedia di platform
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-cogs text-green-600 dark:text-green-400 mr-3"></i>
              Bagaimana Cara Kerjanya?
            </h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🏭 Tanpa Digiflazz (Cara Lama):</h4>
                <p className="text-gray-700 dark:text-gray-300">Si "toko" harus menghubungi satu per satu "pabrik" yang berbeda untuk mendapatkan stok pulsa Telkomsel, lalu stok pulsa XL, lalu token listrik, dan seterusnya. Ini sangat merepotkan!</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-800"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">✨ Dengan Digiflazz (Cara Modern):</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-arrow-right text-green-600 dark:text-green-400 mr-3"></i>
                    <span className="text-gray-700 dark:text-gray-300">Para "pabrik" (supplier) cukup menyalurkan produknya ke Digiflazz</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-arrow-right text-green-600 dark:text-green-400 mr-3"></i>
                    <span className="text-gray-700 dark:text-gray-300">Para "toko" (buyer) cukup terhubung ke Digiflazz saja</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-arrow-right text-green-600 dark:text-green-400 mr-3"></i>
                    <span className="text-gray-700 dark:text-gray-300">Semua produk tersedia di satu tempat!</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-r from-green-50 to-white dark:from-green-900/20 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Keuntungan Pakai Digiflazz</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">👥 Untuk Buyer:</h4>
                <ul className="space-y-3">
                  {buyerBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <i className="fas fa-check text-green-600 dark:text-green-400 mt-1 mr-3"></i>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">🏪 Untuk Seller:</h4>
                <ul className="space-y-3">
                  {sellerBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.9 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <i className="fas fa-check text-green-600 dark:text-green-400 mt-1 mr-3"></i>
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="mt-8 text-center"
            >
              <motion.a
                href="https://wa.me/6283861518933"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Pelajari Lebih Lanjut
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Digiflazz;
