import { motion } from "framer-motion";

const CaraKerja = () => {
  const products = [
    {
      icon: "fas fa-mobile-alt",
      title: "Pulsa & Paket Internet",
      description: "Semua operator tersedia"
    },
    {
      icon: "fas fa-bolt",
      title: "Token Listrik",
      description: "PLN prabayar"
    },
    {
      icon: "fas fa-gamepad",
      title: "Voucher Game",
      description: "ML, FF, PUBG, dll"
    },
    {
      icon: "fas fa-wallet",
      title: "Saldo E-wallet",
      description: "Dana, GoPay, OVO, dll"
    },
    {
      icon: "fas fa-file-invoice",
      title: "Pembayaran Tagihan",
      description: "Listrik, air, BPJS"
    }
  ];

  const steps = [
    {
      title: "Kirim Pesan ke Bot",
      description: "Cukup ketik perintah sederhana di WhatsApp, misalnya \"mau beli pulsa Telkomsel 10 ribu\" atau \"topup diamond ML 50\".",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Bot Memproses Permintaan",
      description: "Si bot akan langsung mengerti apa yang kamu mau. Dia akan mencari produk yang sesuai dan menampilkan harganya.",
      bgColor: "bg-gray-50 dark:bg-gray-700"
    },
    {
      title: "Pilih Cara Bayar",
      description: "Pakai Saldo: Jika saldo di bot sudah cukup, otomatis terpotong. Scan QRIS: Bot buatkan kode QRIS unik untuk pembayaran",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Bot Belikan Produk Otomatis",
      description: "Setelah pembayaran berhasil, bot langsung memproses pembelian ke Digiflazz. Proses sangat cepat dan otomatis.",
      bgColor: "bg-gray-50 dark:bg-gray-700"
    },
    {
      title: "Produk Terkirim",
      description: "Dalam hitungan detik/menit, produk langsung masuk ke nomor/akun tujuan. Bot kirim notifikasi sukses dan struk digital.",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  const benefits = [
    {
      icon: "fas fa-bolt",
      title: "Sangat Cepat dan Praktis",
      description: "Tidak perlu buka banyak aplikasi, cukup di WhatsApp"
    },
    {
      icon: "fas fa-clock",
      title: "Tersedia 24/7",
      description: "Bot tidak pernah tidur, topup kapan saja"
    },
    {
      icon: "fas fa-tag",
      title: "Harga Kompetitif",
      description: "Harga terbaik karena langsung dari supplier"
    },
    {
      icon: "fas fa-search",
      title: "Cek Harga Mudah",
      description: "Tanya harga produk kapan saja tanpa antre"
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cara Kerja <span className="gradient-text">Bot Topup</span>
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl"
          >
            <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Bayangkan kamu punya <strong>asisten pribadi yang sangat canggih</strong> dan bisa dihubungi lewat WhatsApp. Asisten ini khusus bertugas untuk membantumu membeli berbagai produk digital.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-list text-green-600 mr-3"></i>
              Contoh Produk yang Tersedia:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <i className={`${product.icon} text-green-600 text-xl mr-3`}></i>
                  <div>
                    <strong className="text-gray-900 dark:text-white">{product.title}</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center italic">
              *Dan masih banyak produk digital lainnya yang tersedia
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Cara Kerja Step by Step</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                  className={`flex items-start ${step.bgColor} p-6 rounded-xl`}
                >
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-gradient-to-r from-green-50 to-white dark:from-green-900/20 dark:to-gray-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Kenapa Pakai Bot WhatsApp Topup?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <i className={`${benefit.icon} text-green-600 text-2xl mr-4 mt-1`}></i>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
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
                Coba Bot Sekarang
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaraKerja;
