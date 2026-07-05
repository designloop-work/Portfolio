import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const reasons = [
    {
      title: "Clean & Modern UI",
      description: "We design and build interfaces that look professional, clean, and reflect your brand's unique identity."
    },
    {
      title: "Mobile Responsive",
      description: "Your website will look great and function perfectly on any device, from desktop monitors to smartphones."
    },
    {
      title: "SEO-Friendly Development",
      description: "We follow modern SEO practices to ensure your site structure helps search engines discover your business."
    },
    {
      title: "Fast Performance",
      description: "We optimize images, assets, and code so your website loads quickly, keeping visitors engaged."
    },
    {
      title: "Easy Communication",
      description: "No corporate jargon. We speak like real humans, keep you updated, and are always easy to reach."
    },
    {
      title: "Affordable Solutions",
      description: "Fair and transparent pricing tailored for startups and small businesses looking to establish their presence."
    },
    {
      title: "Continuous Learning",
      description: "We stay up to date with the latest web standards and tech, applying best practices to your project."
    },
    {
      title: "Dedicated Support",
      description: "We provide reliable support after launch to help you make updates, fix issues, and keep your website running smoothly."
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#7C3AED]/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
            <Sparkles className="h-4 w-4" /> Why Work With Us
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple, Honest Development Services
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed font-light">
            We make the process of building a website straightforward, transparent, and collaborative. Here is what you can expect from us.
          </p>
        </div>

        {/* Why Work With Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="glass p-8 rounded-2xl flex flex-col justify-between group hover:border-[#7C3AED]/30 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Floating Neon Background Light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none transition-all duration-300 group-hover:from-[#7C3AED]/10"></div>

                {/* Check Icon Badge */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] mb-6 group-hover:scale-105 transition-transform duration-300">
                  <Check className="h-5 w-5" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-3 tracking-tight group-hover:text-[#06B6D4] transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
