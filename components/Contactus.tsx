import { motion } from "framer-motion";


export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 blur-3xl"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-900 bg-opacity-80 p-10 rounded-xl shadow-2xl backdrop-blur-lg text-center max-w-2xl"
      >
      <h1 className="text-6xl font-bold mb-4">{"Let's Connect!"}</h1>
<p className="text-lg text-gray-300 mb-6">
  {"Have a project in mind? We’d love to hear from you. Get in touch with us now!"}
</p>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          
        </motion.div>
      </motion.div>
    </div>
  );
}
