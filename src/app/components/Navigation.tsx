import { motion } from 'motion/react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

export function Navigation({ currentSlide, totalSlides, onSlideChange }: NavigationProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`h-2 rounded-full transition-all ${
            index === currentSlide 
              ? 'w-8 bg-blue-600' 
              : 'w-2 bg-slate-300 hover:bg-slate-400'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
      <span className="ml-3 text-sm text-slate-600">
        {currentSlide + 1} / {totalSlides}
      </span>
    </div>
  );
}
