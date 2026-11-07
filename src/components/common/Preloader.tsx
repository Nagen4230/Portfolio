import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 1600; // 1.6s
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out expo
      const currentCount = Math.floor(progress === 1 ? 100 : (1 - Math.pow(2, -10 * progress)) * 100);
      setCount(Math.min(currentCount, 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 600);
        }, 200);
      }
    };

    const anim = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(anim);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -30,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05060A]"
        >
          {/* Ambient neon gradient circles */}
          <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute w-80 h-80 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

          {/* Center Monogram Draw */}
          <div className="relative mb-8">
            <svg width="90" height="90" viewBox="0 0 100 100" fill="none" className="drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <motion.rect
                x="4"
                y="4"
                width="92"
                height="92"
                rx="16"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M28 72V28L52 64V28"
                stroke="#00F0FF"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M56 72V28L72 50L88 28V72"
                stroke="#8B5CF6"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
              />
            </svg>
          </div>

          {/* Digital Counter */}
          <div className="font-mono text-4xl sm:text-5xl font-bold tracking-widest text-slate-100 flex items-center">
            <span className="text-cyan-400">{count < 10 ? `0${count}` : count}</span>
            <span className="text-sm font-normal text-slate-500 ml-2">%</span>
          </div>

          <div className="mt-4 font-mono text-xs tracking-[0.25em] text-slate-400 uppercase">
            Initialising Experience
          </div>

          {/* Bottom Progress Bar */}
          <div className="w-48 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"
              style={{ width: `${count}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
