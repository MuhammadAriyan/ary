'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ConnectPage() {
  return (
    <motion.div
    id="connect"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-950 text-gray-100 px-6 py-24 flex flex-col items-center justify-center font-sans" // Changed background and text color, added font-sans
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-white" // Made heading bold and pure white
      >
        Let&apos;   s Build Something Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg md:text-xl text-gray-400 max-w-xl text-center mb-12 leading-relaxed" // Adjusted mb and line height
      >
        Whether it&apos;s a collaboration, opportunity, or simply a connection—your message is always welcome. I respond fast, with intention and purpose.
      </motion.p>

      <div className="flex flex-col gap-5 w-full max-w-md"> {/* Adjusted gap */}
        {/* Email */}
        <motion.a
          href="mailto:aryan4march@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }} // Slightly less scale, different hover bg
          className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300 ease-in-out shadow-lg" // More padding, rounded, shadow
        >
          <Mail className="text-pink-400 w-7 h-7" /> {/* Changed color and size */}
          <span className="text-white text-lg font-medium">aryan4march@gmail.com</span> {/* Larger, medium font */}
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/muhammadariyan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300 ease-in-out shadow-lg"
        >
          <Github className="text-purple-400 w-7 h-7" /> {/* Changed color and size */}
          <span className="text-white text-lg font-medium">@muhammadariyan</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a           
          href="https://linkedin.com/in/muhammad-aryan"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
          className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300 ease-in-out shadow-lg"
        >
          <Linkedin className="text-cyan-400 w-7 h-7" /> {/* Changed color and size */}
          <span className="text-white text-lg font-medium">@muhammad-aryan</span>
        </motion.a>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center text-gray-500 text-base" // Adjusted mt and font size
      >
        I usually respond within 12–24 hours. Let’s make your idea real.
      </motion.p>
    </motion.div>
  );
}