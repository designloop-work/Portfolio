import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Alexander Wright",
      role: "Founder & CEO",
      company: "FintechFlow",
      project: "SaaS Dashboard & Subscriptions",
      text: "DesignLoop delivered our core subscription dashboard in record time. Their engineers are not just coders—they understood our transaction mechanics and optimized PostgreSQL queries to save us $4,200/mo in compute costs.",
      rating: 5,
      initials: "AW"
    },
    {
      name: "Marcus Chen",
      role: "CTO",
      company: "HealthGrid Systems",
      project: "FastAPI Backend & Wearables Sync",
      text: "We needed a FastAPI backend capable of processing 15,000 concurrent webhooks from patient monitors. DesignLoop executed it flawlessly. The codebase is strictly typed, fully documented, and robust under load.",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Sophia Loren",
      role: "Head of Product",
      company: "NestEstate Market",
      project: "Next.js Map Platform",
      text: "Their frontend precision is outstanding. The custom Mapbox clusters and transition effects they created for our real estate search increased listing conversion by 40% and immediately impressed our seed investors.",
      rating: 5,
      initials: "SL"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#7C3AED]/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
            Client Success
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Builders & Founders
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed font-light">
            We partner with ambitious startups and fast-moving companies to deploy code that delivers commercial outcomes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col justify-between group hover:border-[#7C3AED]/30 transition-all duration-300 relative"
            >
              <div>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#7C3AED]/10 transition-colors duration-300">
                  <MessageSquareQuote className="h-12 w-12" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-[#06B6D4] text-[#06B6D4]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-300 text-sm leading-relaxed font-light mb-8 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                {/* Avatar Initials Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-neutral-950">
                    <span className="font-heading text-xs font-bold text-white">
                      {review.initials}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="font-heading text-sm font-bold text-white">
                    {review.name}
                  </div>
                  <div className="text-[11px] font-semibold text-neutral-400">
                    {review.role}, <span className="text-[#06B6D4]">{review.company}</span>
                  </div>
                  <div className="text-[10px] text-neutral-500 font-medium mt-0.5">
                    Project: {review.project}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
