import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  
  const loadingTexts = [
    "Initializing Systems...",
    "Curating Aesthetics...",
    "Structuring Scalable Architecture...",
    "Optimizing Performance...",
    "Ready for Impact."
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onComplete, 500); // Delay for transition smoothness
          return 100;
        }
        // Increment progress incrementally
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0B]"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
    >
      <div className="w-full max-w-md px-6 text-center">
        {/* Glowing Logo Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#0B0B0B]">
              <span className="font-heading text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">DL</span>
            </div>
            {/* Soft Ambient Glow */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] opacity-40 blur-xl"></div>
          </div>
        </motion.div>

        {/* Agency Logo Text */}
        <motion.h1
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.05em", opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-4xl font-extrabold tracking-wider text-white"
        >
          DESIGN<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">LOOP</span>
        </motion.h1>

        {/* Custom Progress Bar */}
        <div className="mt-8 h-[2px] w-full rounded-full bg-neutral-900 overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Step updates */}
        <div className="mt-4 h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm font-medium text-neutral-400"
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Number Percent */}
        <span className="mt-2 block font-mono text-xs tracking-widest text-neutral-600">
          {Math.min(Math.round(progress), 100)}%
        </span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
