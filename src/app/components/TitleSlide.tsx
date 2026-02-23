import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';

export function TitleSlide() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex flex-col items-center justify-center text-white p-16 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <Sparkles className="w-12 h-12 text-yellow-400" />
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-5xl mb-6 leading-tight"
        >
          Digital Transformation
        </motion.h1>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl mb-2">
            CSI Thoothukudi Nazareth Diocese
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xl text-blue-100">
            Transitioning 79 years of legacy into a
          </p>
          <p className="text-2xl">
            Future-Ready Digital Ecosystem
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 text-sm text-blue-200"
        >
          Project Proposal | February 2026
        </motion.div>
      </motion.div>
    </div>
  );
}
