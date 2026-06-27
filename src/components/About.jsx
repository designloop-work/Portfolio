import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Compass, Sparkles } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 1.5, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    const decimals = value.toString().split('.')[1]?.length || 0;
    const totalMs = duration * 1000;
    const frameRate = 30;
    const steps = Math.ceil(totalMs / frameRate);
    const stepIncrement = (end - start) / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        start += stepIncrement;
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const containerRef = useRef(null);

  const stats = [
    { label: "Projects Delivered", value: "120", suffix: "+" },
    { label: "Client Satisfaction", value: "99.4", suffix: "%" },
    { label: "On-Time Deployment", value: "100", suffix: "%" },
    { label: "Average Response Time", value: "4", suffix: "h" },
  ];

  const pillars = [
    {
      icon: <Target className="h-6 w-6 text-[#7C3AED]" />,
      title: "Our Mission",
      description: "To build software that accelerates growth and yields high impact, pairing rigorous engineering principles with world-class user experiences."
    },
    {
      icon: <Eye className="h-6 w-6 text-[#06B6D4]" />,
      title: "Our Vision",
      description: "To be the ultimate product partner for high-ticket startups and enterprises globally, transforming complex concepts into seamless, luxury digital products."
    },
    {
      icon: <Compass className="h-6 w-6 text-[#7C3AED]" />,
      title: "Our Approach",
      description: "Combining user-centric design with modern stack execution, ensuring that every line of code adds compounding commercial value to your enterprise."
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
            We are architects of the digital frontier.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-neutral-400 text-lg leading-relaxed font-light"
          >
            DesignLoop was founded on a simple insight: that premium software shouldn't just run efficiently—it should elevate your brand. We unite custom backend engineering with high-fidelity frontend aesthetics to launch products that impress venture capitalists and customers alike.
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

        {/* Animated Statistics Grid */}
        <div className="glass-accent rounded-3xl p-8 md:p-12 relative overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/5 to-[#06B6D4]/5 opacity-30"></div>
          
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#06B6D4] font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-neutral-500 font-medium">
                  Verified Audit {new Date().getFullYear()}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
