import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Compass, Sparkles } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  const pillars = [
    {
      icon: <Target className="h-6 w-6 text-[#7C3AED]" />,
      title: "Our Mission",
      description: "To design and build clean, fast, and responsive websites that help startups and small businesses establish a solid online presence."
    },
    {
      icon: <Eye className="h-6 w-6 text-[#06B6D4]" />,
      title: "Our Vision",
      description: "To continuously improve our skills and adapt to modern web technologies, providing our clients with reliable and up-to-date solutions."
    },
    {
      icon: <Compass className="h-6 w-6 text-[#7C3AED]" />,
      title: "Our Approach",
      description: "Focusing on clear communication, attention to detail, and clean code, ensuring we build exactly what you need without unnecessary complexity."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0B0B0B]" ref={containerRef}>
      {/* Decorative Blur Ambient Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#7C3AED] opacity-[0.03] blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3"
          >
            <Sparkles className="h-4 w-4" /> Who We Are
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            We build websites with care, precision, and clean code.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-neutral-400 text-lg leading-relaxed font-light"
          >
            DesignLoop is a growing development studio founded by passionate developers who love building websites. We focus on writing clean, maintainable code using modern technologies, and we pay close attention to every detail. Our goal is to solve real problems for our clients and build long-term relationships based on trust, clear communication, and reliable work.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:border-[#7C3AED]/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/2 to-[#06B6D4]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">{pillar.description}</p>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default About;
