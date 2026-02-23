import { motion } from 'motion/react';
import { Keyboard } from 'lucide-react';

export function KeyboardHint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 text-sm text-slate-600 hidden md:flex"
    >
      <Keyboard className="w-4 h-4" />
      <span>Use arrow keys to navigate</span>
    </motion.div>
  );
}
