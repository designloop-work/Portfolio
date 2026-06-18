import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

// Mockup image imports
import restaurantImg from '../assets/restaurant_mockup.png';
import crmImg from '../assets/crm_mockup.png';
import saasImg from '../assets/saas_mockup.png';
import gymImg from '../assets/gym_mockup.png';
import realEstateImg from '../assets/real_estate_mockup.png';
import resumeImg from '../assets/resume_mockup.png';

const Portfolio = ({ onSelectCaseStudy }) => {
  const projects = [
    {
      id: "restaurant",
      name: "Restaurant Management System",
      description: "A real-time order-tracking, seating management, and analytics dashboard engineered for high-volume dining locations.",
      image: restaurantImg,
      tags: ["React.js", "Node.js", "PostgreSQL", "Socket.io"],
      demoUrl: "#",
      gitUrl: "#"
    },
    {
      id: "crm",
      name: "AI CRM Platform",
      description: "Customer relationship manager featuring automatic lead scoring, email synthesis, and meeting transcript summarization using LLMs.",
      image: crmImg,
      tags: ["Next.js", "FastAPI", "MongoDB", "LlamaIndex"],
      demoUrl: "#",
      gitUrl: "#"
    },
    {
      id: "saas",
      name: "SaaS Subscription Dashboard",
      description: "A subscription engine featuring multi-tenant isolation, automated invoice generation, and deep subscription metrics.",
      image: saasImg,
      tags: ["React.js", "Tailwind CSS", "Stripe API", "Chart.js"],
      demoUrl: "#",
      gitUrl: "#"
    },
    {
      id: "gym",
      name: "Gym Management System",
      description: "A member portal and administrative application supporting automatic keycard check-ins, subscription billing, and training timetables.",
      image: gymImg,
      tags: ["React.js", "Node.js", "MongoDB", "Express"],
      demoUrl: "#",
      gitUrl: "#"
    },
    {
      id: "realestate",
      name: "Real Estate Platform",
      description: "A property marketplace with interactive maps, automated valuation models (AVM), and secure digital transaction escrow trackers.",
      image: realEstateImg,
      tags: ["Next.js", "PostgreSQL", "Docker", "Mapbox SDK"],
      demoUrl: "#",
      gitUrl: "#"
    },
    {
      id: "resume",
      name: "AI Resume Builder",
      description: "Intelligent document compiler that tracks resume strength against specific job descriptions and rewrites bullets with AI guidance.",
      image: resumeImg,
      tags: ["React.js", "FastAPI", "OpenAI API", "Tailwind"],
      demoUrl: "#",
      gitUrl: "#"
    }
  ];

  const handleCaseStudyClick = (id) => {
    if (onSelectCaseStudy) {
      onSelectCaseStudy(id);
    }
    const element = document.getElementById('case-studies');
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
    <section id="portfolio" className="relative py-24 bg-[#0B0B0B] border-t border-white/5">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#7C3AED] opacity-[0.02] blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-3">
              Case Studies & Works
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Selected Showcase
            </h2>
            <p className="mt-4 text-neutral-400 font-light leading-relaxed">
              Explore a curated selection of our high-performing platforms. Each card represents a production-grade application engineered for commercial scale.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="glass rounded-2xl overflow-hidden group hover:border-[#7C3AED]/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-neutral-900 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-300"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-neutral-900 border border-white/5 text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                  <a
                    href={project.demoUrl}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-white/5 hover:bg-gradient-to-r hover:from-[#7C3AED] hover:to-[#06B6D4] transition-all duration-300 border border-white/5"
                  >
                    Demo <ExternalLink className="h-3 w-3" />
                  </a>
                  
                  <a
                    href={project.gitUrl}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-neutral-400 hover:text-white bg-neutral-950 border border-white/5 hover:bg-neutral-900 transition-colors duration-300"
                  >
                    GitHub <GithubIcon className="h-3 w-3" />
                  </a>

                  <button
                    onClick={() => handleCaseStudyClick(project.id)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#06B6D4] hover:text-white bg-neutral-950 border border-[#06B6D4]/30 hover:border-[#06B6D4] hover:bg-[#06B6D4]/10 transition-colors duration-300 cursor-pointer"
                  >
                    Details <BookOpen className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
