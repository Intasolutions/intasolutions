"use client";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import "@/app/globals.css";
import { motion } from "framer-motion";
import Footer from "../about/components/AboutFooter";
import { HeroHighlightDemo } from "@/components/CcontactUs";

import emailjs from "@emailjs/browser"; 

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  
  const infoRef = useRef<HTMLElement | null>(null);
// 📌 At the top of your file

  // Inside ContactPage component...
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!formRef.current) return;
  
    emailjs
      .sendForm(
        "service_nm42vfe",       // Replace this
        "template_0k0ph8u",      // Replace this
        formRef.current,
        "service_nm42vfe"        // Replace this
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          formRef.current?.reset(); // Optional
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("❌ Failed to send message:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };
  

  return (
    <div className="text-white font-sans min-h-screen relative overflow-hidden">
      <Navbar />
      <HeroHighlightDemo />

      <div className="max-w-3xl mx-auto px-6 py-20 space-y-32 relative z-10">
        <section ref={formRef} className="min-h-screen flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-2xl relative"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5 }}
            />
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-5xl text-white text-center mb-12 tracking-wide capitalize relative"
            >
              Send Message
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              ref={formRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-gradient-to-r p-10 rounded-2xl border border-white/20 shadow-xl shadow-gray-800 backdrop-blur-lg"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-lg mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full p-4 bg-gray-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-lg mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    required
                    className="w-full p-4 bg-gray-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white text-lg mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full p-4 bg-gray-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    placeholder="Your Message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold shadow-md"
                >
                  Submit
                </motion.button>
              </div>
            </motion.form>

            <motion.div
              className="absolute rounded-full blur-2xl pointer-events-none"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.8 }}
            />
          </motion.div>
        </section>
      </div>

      <section
        ref={infoRef}
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/contact-bg.jpg')" }}
      >
        <div className="absolute inset-0"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl text-white text-center mb-12 font-bold tracking-wide capitalize"
          >
            Contact Information
            <motion.span
              className="block mx-auto mt-2 h-1 w-24 bg-white rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Email", desc: "intasolutionpvtltd@gmail.com" },
              { title: "Phone", desc: "+91 9447595381" },
              { title: "Address", desc: "Mananthavady, Wayanad " },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 + idx * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-lg text-center transition duration-300 hover:bg-white/20 hover:shadow-2xl"
              >
                <h3 className="text-2xl text-white font-semibold mb-4 relative inline-block">
                  {item.title}
                </h3>
                <p className="text-white text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
