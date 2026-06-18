import { motion } from 'framer-motion';
import { Laptop, Layers, Cpu, Code2, LayoutDashboard, Workflow, Check } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Laptop className="h-6 w-6 text-[#06B6D4]" />,
      title: "Custom Web Apps",
      description: "Tailored web applications engineered from the ground up for responsiveness, high-speed delivery, and complex business logic.",
      features: ["Enterprise Architecture", "SEO & Core Web Vitals Ready", "Offline Capability (PWA)"]
    },
    {
      icon: <Layers className="h-6 w-6 text-[#7C3AED]" />,
      title: "SaaS Product Development",
      description: "Bespoke SaaS architectures featuring secure multi-tenancy, custom subscription flows, and powerful user permission systems.",
      features: ["Stripe Billing Integration", "Multi-Tenant Security", "Tenant Isolation Databases"]
    },
    {
      icon: <Cpu className="h-6 w-6 text-[#06B6D4]" />,
      title: "FastAPI APIs",
      description: "Blazing fast Python backend systems. Asynchronous API development with structured OpenAPI docs, typing, and heavy load testing.",
      features: ["Asynchronous Performance", "Pydantic Validation schemas", "Fully Documented Endpoints"]
    },
    {
      icon: <Code2 className="h-6 w-6 text-[#7C3AED]" />,
      title: "React Frontend",
      description: "Dynamic React interfaces built with modern component structures, optimized rendering hooks, state-of-the-art styling systems.",
      features: ["Framer Motion animations", "Sleek Custom Typography", "Clean state handling"]
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-[#06B6D4]" />,
      title: "Dashboard & Admin Panels",
      description: "Premium reporting systems displaying aggregated data streams, graphs, user audits, and business intelligence panels.",
      features: ["Real-time Data Fetching", "Dynamic Recharts Graphs", "Full CSV/Excel Export Engines"]
    },
    {
      icon: <Workflow className="h-6 w-6 text-[#7C3AED]" />,
      title: "Business Automation",
      description: "Workflow automations that cut overhead costs. Connecting CRMs, mailing servers, and analytics dashboards automatically.",
      features: ["Cron Schedulers", "AI-powered Classification", "Webhooks & Sync pipelines"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#06B6D4] opacity-[0.02] blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#06B6D4]"
          >
            Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineered for scalability. Designed for beauty.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-neutral-400 text-lg leading-relaxed font-light"
          >
            We supply start-ups and enterprise systems with full-spectrum tech services. Every solution is tailor-crafted to maximize conversion and speed.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glow-card glass p-8 rounded-2xl flex flex-col justify-between group hover:translate-y-[-4px] hover:border-white/15 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Floating Neon Background Light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none transition-all duration-300 group-hover:from-[#7C3AED]/10"></div>
                
                {/* Badge Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:bg-gradient-to-tr group-hover:from-[#7C3AED] group-hover:to-[#06B6D4] transition-all duration-300">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>

                {/* Service Info */}
                <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                  {service.description}
                </p>
              </div>

              {/* Sub features checklist */}
              <ul className="space-y-2.5 pt-4 border-t border-white/5">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs font-medium text-neutral-300">
                    <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-neutral-900 text-[#06B6D4]">
                      <Check className="h-3 w-3" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
