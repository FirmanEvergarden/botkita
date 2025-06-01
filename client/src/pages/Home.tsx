import { motion } from "framer-motion";
import { Link } from "wouter";

const Home = () => {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Super Cepat",
      description: "Proses otomatis dalam hitungan detik. Tidak perlu menunggu lama untuk mendapatkan topup Anda."
    },
    {
      icon: "fas fa-shield-alt",
      title: "100% Aman",
      description: "Sistem keamanan berlapis dan terpercaya. Data Anda dijamin aman dengan enkripsi tingkat tinggi."
    },
    {
      icon: "fas fa-clock",
      title: "24/7 Online",
      description: "Bot siap melayani kapan saja, di mana saja. Tidak ada jam offline, selalu tersedia untuk Anda."
    }
  ];

  const socialProof = [
    {
      href: "https://wa.me/6283861518933",
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      subtitle: "+62 838-6151-8933",
      color: "text-green-500"
    },
    {
      href: "https://instagram.com/mannevgr",
      icon: "fab fa-instagram",
      title: "Instagram",
      subtitle: "@mannevgr",
      color: "text-pink-500"
    },
    {
      href: "https://www.youtube.com/@mannevgr",
      icon: "fab fa-youtube",
      title: "YouTube",
      subtitle: "@mannevgr",
      color: "text-red-500"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="gradient-text">BotKita</span> - Bot WhatsApp Topup Premium
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Solusi otomatis terdepan untuk topup pulsa, token listrik, dan voucher game. 
              Layanan 24/7 dengan harga terbaik langsung di WhatsApp Anda.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
                Mulai Sekarang
              </motion.a>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/pricing">
                  <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                    Lihat Harga
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mengapa Pilih <span className="gradient-text">BotKita?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Platform terpercaya dengan teknologi terdepan untuk semua kebutuhan topup digital Anda
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-hover bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-green-600 text-4xl mb-4">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Apa Kata <span className="gradient-text">Pelanggan Kami?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ribuan pelanggan sudah merasakan kemudahan dan kecepatan layanan BotKita
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-green-600 dark:text-green-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Rizky Pratama</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "BotKita sangat membantu bisnis topup saya! Prosesnya cepat banget, dalam hitungan detik langsung masuk. Customer saya jadi lebih puas karena pelayanan 24 jam."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-green-600 dark:text-green-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sari Wulandari</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Sebelumnya saya harus buka banyak aplikasi untuk topup. Sekarang cukup chat di WhatsApp aja, semua kebutuhan digital tersedia. Harganya juga kompetitif!"
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-green-600 dark:text-green-400 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Ahmad Fauzi</h4>
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Bot yang sangat canggih! Sistem pembayaran QRIS-nya unik dan aman. Support dari admin juga responsif banget. Recommended untuk yang mau bisnis topup!"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Ikuti Kami
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {socialProof.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
              >
                <i className={`${social.icon} text-3xl ${social.color} mr-4`}></i>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">{social.title}</p>
                  <p className="text-gray-600 dark:text-gray-300">{social.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
