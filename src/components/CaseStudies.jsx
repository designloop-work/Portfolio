import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, TrendingUp, Cpu, Server, Database } from 'lucide-react';
import { caseStudiesData } from '../data/projectsData';

const CaseStudies = ({ selectedId, setSelectedId }) => {
  const tabs = Object.keys(caseStudiesData);

  // If selectedId from parent changes, sync it here
  const activeData = caseStudiesData[selectedId] || caseStudiesData.restaurant;

  return (
    <section id="case-studies" className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#06B6D4] opacity-[0.02] blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#06B6D4] mb-3">
            In-Depth Analysis
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Case Studies
          </h2>
          <p className="mt-4 text-neutral-400 font-light leading-relaxed">
            A deep dive into how we resolve engineering bottlenecks, optimize workflows, and drive compound growth for our client portfolio.
          </p>
        </div>

        {/* Interactive Case Studies Toggles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tabs Selector Column */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedId(tab)}
                className={`text-left px-5 py-4 rounded-xl font-heading text-sm font-semibold transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  selectedId === tab
                    ? 'bg-gradient-to-r from-[#7C3AED]/20 to-[#06B6D4]/10 border-l-4 border-[#7C3AED] text-white'
                    : 'bg-neutral-950/40 border border-white/5 text-neutral-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {caseStudiesData[tab].title}
              </button>
            ))}
          </div>

          {/* Details Content Column */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden"
              >
                {/* Background glowing light */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#7C3AED]/5 to-transparent rounded-bl-full pointer-events-none"></div>

                {/* Case Study Meta info */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/5 text-xs font-semibold text-neutral-400">
                  <div>
                    CLIENT: <span className="text-white font-bold ml-1">{activeData.client}</span>
                  </div>
                  <div>
                    TIMELINE: <span className="text-[#06B6D4] font-bold ml-1">{activeData.duration}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-8 tracking-tight">
                  {activeData.title}
                </h3>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Problem Block */}
                  <div className="p-5 rounded-xl bg-red-950/10 border border-red-500/10">
                    <h4 className="flex items-center gap-2 font-heading text-sm font-bold text-red-400 uppercase tracking-wider mb-3">
                      <AlertTriangle className="h-4 w-4" /> The Challenge
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">
                      {activeData.problem}
                    </p>
                  </div>

                  {/* Solution Block */}
                  <div className="p-5 rounded-xl bg-[#7C3AED]/5 border border-[#7C3AED]/20">
                    <h4 className="flex items-center gap-2 font-heading text-sm font-bold text-[#7C3AED] uppercase tracking-wider mb-3">
                      <CheckCircle className="h-4 w-4 text-[#06B6D4]" /> Our Solution
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed font-light">
                      {activeData.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mb-10">
                  <h4 className="font-heading text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3.5">
                    Stack Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results Metrics */}
                <div>
                  <h4 className="font-heading text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">
                    Quantifiable Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeData.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-4 rounded-xl bg-neutral-950 border border-white/5 text-center group hover:border-[#06B6D4]/30 transition-colors duration-300"
                      >
                        <div className="font-heading text-3xl font-extrabold text-[#06B6D4] mb-1">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold mb-0.5">
                          {metric.label}
                        </div>
                        <div className="text-[10px] text-neutral-500 font-medium">
                          {metric.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
