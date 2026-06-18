import { motion } from 'framer-motion';
import { Search, Compass, PenTool, Code, ShieldCheck, CheckSquare, LifeBuoy } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      num: "01",
      icon: <Search className="h-5 w-5 text-[#7C3AED]" />,
      title: "Discovery & Strategy",
      description: "We dive deep into your commercial goals, user cohorts, and competitive landscape. We map requirements, define tech stacks, and establish clear scopes."
    },
    {
      num: "02",
      icon: <Compass className="h-5 w-5 text-[#06B6D4]" />,
      title: "Product Architecture",
      description: "We outline database models, API contract endpoints, and layout user maps. The goal is to construct a structural blueprint before coding starts."
    },
    {
      num: "03",
      icon: <PenTool className="h-5 w-5 text-[#7C3AED]" />,
      title: "UI/UX Design Loop",
      description: "Our designers craft high-fidelity responsive layouts in Figma. We establish clean styleguides, cohesive colors, and subtle micro-interaction models."
    },
    {
      num: "04",
      icon: <Code className="h-5 w-5 text-[#06B6D4]" />,
      title: "Agile Engineering",
      description: "We build. Developers write clean, modular React frontend interfaces and secure FastAPI backends, integrating database schemas in rapid sprints."
    },
    {
      num: "05",
      icon: <ShieldCheck className="h-5 w-5 text-[#7C3AED]" />,
      title: "Rigorous QA Testing",
      description: "We test code under pressure. We audit security protocols, verify core web vitals speed, run end-to-end user tests, and check API throughput limits."
    },
    {
      num: "06",
      icon: <CheckSquare className="h-5 w-5 text-[#06B6D4]" />,
      title: "Secure CI/CD Deployment",
      description: "We deploy systems to AWS or Google Cloud via automated workflows. We configure database backup schemas, cache policies, and error log monitors."
    },
    {
      num: "07",
      icon: <LifeBuoy className="h-5 w-5 text-[#7C3AED]" />,
      title: "Compound Optimization",
      description: "We stay on guard. Post-launch support includes rapid bug remediation, code optimizations, and continuous feature expansion sprints."
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[#7C3AED] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
            How We Work
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Development Blueprint
          </h2>
          <p className="mt-4 text-neutral-400 text-lg leading-relaxed font-light">
            We employ a disciplined, transparent execution cycle that keeps stakeholders informed and projects strictly on-schedule.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central connector line */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-neutral-900 pointer-events-none"></div>

          {/* Timeline steps */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step bubble */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-[2px] md:-translate-x-1/2 z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-950 border-2 border-neutral-900 group transition-all duration-300">
                    <span className="font-heading text-lg font-bold text-white group-hover:text-[#06B6D4]">
                      {step.num}
                    </span>
                  </div>

                  {/* Left spacer / Content Block */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                    <div className="glass p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-[#7C3AED]/35 transition-all duration-300">
                      {/* Subtitle icon badge */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 mb-4 group-hover:scale-105 transition-transform duration-300">
                        {step.icon}
                      </div>

                      <h3 className="font-heading text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#06B6D4] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right empty spacer for symmetry on large viewports */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
