import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

const WhyUs = () => {
  const comparisonData = [
    {
      metric: "Clean Code",
      us: "We write structured React and FastAPI code, check for errors with linters, and design reusable components.",
      them: "Unorganized template modifications, inline styles, and redundant code that is hard to maintain."
    },
    {
      metric: "Modern Technologies",
      us: "We use modern, fast, and secure frameworks like React.js, Tailwind CSS, and FastAPI.",
      them: "Outdated page builders or heavy plugins that slow down page loading times."
    },
    {
      metric: "Attention to Detail",
      us: "Every element, button, and image is double-checked for pixel-perfect alignment and smooth animations.",
      them: "Misaligned layout grids, non-responsive components, and broken links left unfixed."
    },
    {
      metric: "Clear Communication",
      us: "Direct communication with the actual developers. We provide regular, transparent updates.",
      them: "Getting passed around account managers, slow email response times, or unexpected delays."
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-3">
            Why Us
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Approach Development
          </h2>
          <p className="mt-4 text-neutral-400 font-light leading-relaxed">
            We focus on building reliable, performant websites using clean code and modern technologies. Here is how we work compared to traditional template agencies.
          </p>
        </div>

        {/* Comparison grid / table */}
        <div className="glass rounded-3xl overflow-hidden border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-neutral-950/40 border-b border-white/5 font-heading text-xs uppercase tracking-wider font-bold text-neutral-400 p-6 md:p-8">
            <div>Vetting Parameters</div>
            <div className="text-white mt-4 md:mt-0 flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#06B6D4]" /> DesignLoop Way</div>
            <div className="mt-4 md:mt-0 flex items-center gap-1.5"><ShieldAlert className="h-4 w-4 text-red-400" /> Traditional Agency</div>
          </div>

          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 hover:bg-white/[0.01] transition-colors"
              >
                {/* Parameter name */}
                <div className="font-heading text-lg font-bold text-white mb-2 md:mb-0">
                  {row.metric}
                </div>

                {/* Our standard */}
                <div className="text-neutral-300 text-sm leading-relaxed pr-6 md:border-l md:border-white/5 pl-0 md:pl-6">
                  {row.us}
                </div>

                {/* Their standard */}
                <div className="text-neutral-500 text-sm leading-relaxed pr-6 md:border-l md:border-white/5 pl-0 md:pl-6 mt-4 md:mt-0">
                  {row.them}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
