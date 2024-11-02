import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 animate-gradient-x overflow-hidden relative">
      
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-40"
      />
      
      {/* Center Loading Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          animate={{
            y: ["0%", "-20%", "0%"], // bounce up and down
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket className="w-20 h-20 text-cyan-200 drop-shadow-lg" />
        </motion.div>

        {/* Rotating Dashed Border */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full border-4 border-dashed border-cyan-400/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}
