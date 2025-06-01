import { motion } from "framer-motion";

const WhatsAppBot = () => {
  const benefits = [
    {
      icon: "fas fa-bolt",
      title: "Membalas pesan dengan cepat",
      description: "Misalnya, kalau ada pertanyaan umum dari pelanggan, bot bisa langsung kasih jawaban tanpa perlu menunggu staf membalas."
    },
    {
      icon: "fas fa-clock",
      title: "Melayani 24 jam non-stop",
      description: "Bot tidak perlu tidur atau istirahat, jadi dia bisa melayani kapan saja."
    },
    {
      icon: "fas fa-save",
      title: "Menghemat waktu dan tenaga",
      description: "Bisnis tidak perlu lagi menyewa banyak orang hanya untuk membalas pesan yang itu-itu saja."
    },
    {
      icon: "fas fa-info-circle",
      title: "Memberikan informasi",
      description: "Kamu bisa tanya harga produk, jam buka toko, atau status pengiriman."
    }
  ];

  const steps = [
    "Kamu kirim pesan \"Halo\" ke nomor restoran.",
    "Bot akan membalas dengan menu pilihan otomatis.",
    "Kamu ketik \"1\" untuk melihat menu.",
    "Bot akan langsung mengirimkan daftar menu makanan."
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
            Apa Itu <span className="gradient-text">Bot WhatsApp?</span>
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
              Bayangkan begini: <strong>Bot WhatsApp itu seperti asisten otomatis yang tinggal di dalam aplikasi WhatsApp kamu.</strong>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Bukan manusia sungguhan yang membalas pesan, tapi sebuah program komputer yang dirancang untuk melakukan tugas-tugas tertentu secara otomatis di WhatsApp. Jadi, ketika kamu kirim pesan ke nomor yang menggunakan bot, bukan orang di balik layar yang mengetik, tapi si bot itu sendiri yang merespons.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-question-circle text-green-600 mr-3"></i>
              Kenapa Ada Bot WhatsApp?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-start"
                >
                  <i className={`${benefit.icon} text-green-600 text-xl mr-3 mt-1`}></i>
                  <div className="text-gray-900 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">{benefit.title}:</strong> {benefit.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gradient-to-r from-green-50 to-white dark:from-green-900/20 dark:to-gray-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-cogs text-green-600 mr-3"></i>
              Contoh Sederhana Cara Kerjanya:
            </h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                >
                  <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </span>
                  <p className="text-gray-900 dark:text-gray-300">{step}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
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

export default WhatsAppBot;
