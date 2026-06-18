import { motion } from 'framer-motion';

const TechStack = () => {
  const techs = [
    {
      name: "React.js",
      category: "Frontend UI",
      desc: "Component-driven rendering, fast virtual DOM, dynamic hook architectures.",
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-8 w-8 text-[#06B6D4] fill-none stroke-current" strokeWidth="1">
          <circle r="2" fill="currentColor"/>
          <g>
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: "Next.js",
      category: "SSR Framework",
      desc: "Server-side rendering, static generation pipelines, edge route handlers.",
      svg: (
        <svg viewBox="0 0 180 180" className="h-8 w-8 text-white fill-current">
          <path d="M90 0C40.29 0 0 40.29 0 90s40.29 90 90 90 90-40.29 90-90S139.71 0 90 0zm0 156.44c-36.66 0-66.44-29.78-66.44-66.44 0-14.73 4.83-28.36 12.98-39.46l59.62 77.29h13.28V72.23H98.66v27.9l-49.8-64.5c11-7.96 24.5-12.7 39.14-12.7 36.66 0 66.44 29.78 66.44 66.44s-29.78 66.44-66.44 66.44z" />
        </svg>
      )
    },
    {
      name: "FastAPI",
      category: "Async Backend",
      desc: "High-performance Python API compiler, asynchronous task runs, Pydantic checks.",
      svg: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#059669] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" className="stroke-none" />
        </svg>
      )
    },
    {
      name: "Node.js",
      category: "API Runtime",
      desc: "Fast V8 engine compilation, event-driven I/O, heavy package modules.",
      svg: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#16a34a] fill-none stroke-current" strokeWidth="1.5">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
          <path d="M12 22V12" />
          <path d="M22 7l-10 5L2 7" />
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      category: "Relational DB",
      desc: "Transactional integrity (ACID), spatial mapping, concurrent indexing queries.",
      svg: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#334155] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      )
    },
    {
      name: "MongoDB",
      category: "Document Store",
      desc: "Flexible JSON schemas, heavy horizontal scalability, aggregated metrics maps.",
      svg: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#15803d] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C12 22 17 17 17 12C17 7 12 2 12 2C12 2 7 7 7 12C7 17 12 22 12 22Z" />
          <path d="M12 2V22" />
        </svg>
      )
    },
    {
      name: "Docker",
      category: "Infrastructure",
      desc: "Component containerization, cloud deployment parity, environment isolation.",
      svg: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#0284c7] fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      name: "GitHub",
      category: "Version Control",
      desc: "Secure version branches, automated actions pipelines, code validation systems.",
      svg: (
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-neutral-300 fill-current">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#06B6D4] opacity-[0.01] blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-3">
            Our Toolbox
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            The High-Performance Stack
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed font-light">
            We use modern, fast, and secure tools to build applications. No legacy tech, no slow plugins—only pure performance.
          </p>
        </div>

        {/* Tech stack grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glow-card glass p-6 rounded-2xl group hover:border-[#7C3AED]/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Backlight on hover */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-br-full pointer-events-none transition-all duration-300 group-hover:from-[#7C3AED]/10"></div>
              
              {/* Logo / Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 group-hover:bg-[#0B0B0B] transition-all duration-300">
                  {tech.svg}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                    {tech.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#06B6D4] font-semibold">
                    {tech.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
