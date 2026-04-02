"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <h1 className="text-5xl font-bold aurora-text tracking-tight">Let&apos;s Connect</h1>
        <p className="mt-4 text-slate-400 text-lg">Have a project in mind? Let&apos;s build something amazing together.</p>
      </motion.div>

      <div className="flex justify-center max-w-4xl mx-auto">
        <motion.form 
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit} 
          className="w-full space-y-6 p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Rahul Ghosh" 
                value={formData.name} 
                onChange={handleChange}
                required 
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="your@email.com" 
                value={formData.email} 
                onChange={handleChange}
                required 
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
            </motion.div>
          </div>

          {/* Subject */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Subject</label>
            <input 
              type="text" 
              name="subject" 
              placeholder="What's this about?" 
              value={formData.subject} 
              onChange={handleChange}
              required 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-slate-300 mb-2 ml-1">Message</label>
            <textarea 
              name="message" 
              rows={5} 
              placeholder="Tell me about your project..." 
              value={formData.message} 
              onChange={handleChange}
              required 
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
