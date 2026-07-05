import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0B] pt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-[#7C3AED] opacity-[0.08] blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-[25%] right-[10%] w-96 h-96 rounded-full bg-[#06B6D4] opacity-[0.06] blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Mouse Follower Glow (Premium Interactive Lighting) */}
      <motion.div
        className="absolute pointer-events-none rounded-full w-[450px] h-[450px] bg-gradient-to-tr from-[#7C3AED]/12 to-[#06B6D4]/12 blur-[60px]"
        animate={{
          x: mousePosition.x - 225,
          y: mousePosition.y - 225,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 25, mass: 0.5 }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 py-20 flex flex-col items-center text-center z-10">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#06B6D4]"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Web Development Studio
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-tight sm:leading-none"
        >
          Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#a78bfa]">Passion.</span><br />
          Designed with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#67e8f9]">Precision.</span>
        </motion.h1>

        {/* Agency Intro Description */}
        <motion.p
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed"
        >
          We design and build fast, responsive websites that help businesses establish a strong online presence.
        </motion.p>

        {/* Interactive Features Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-y-2 gap-x-6 text-sm text-neutral-400 font-medium"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" /> Clean & Modern UI
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#7C3AED]" /> Mobile Responsive
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#06B6D4]" /> SEO-Friendly Development
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* View Projects */}
          <button
            onClick={() => handleScrollTo('portfolio')}
            className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[1px] font-semibold text-white transition-transform active:scale-95 cursor-pointer"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full"></span>
            <div className="relative px-8 py-4 bg-[#0B0B0B] rounded-full transition-colors group-hover:bg-[#0B0B0B]/85 flex items-center justify-center gap-2">
              View Projects
              <ArrowDown className="h-4 w-4 text-[#06B6D4] transition-transform duration-300 group-hover:translate-y-0.5" />
            </div>
          </button>

          {/* Book a Call */}
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto relative group overflow-hidden rounded-full border border-white/10 px-8 py-4 font-semibold text-neutral-300 bg-white/5 hover:text-white hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            Let's Talk
            <ArrowUpRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => handleScrollTo('about')}
        >
          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-2">Scroll to explore</span>
          <div className="w-[18px] h-7 rounded-full border border-neutral-700 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
