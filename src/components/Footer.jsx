import { MessageSquare, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const Footer = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#06B6D4] opacity-[0.01] blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="flex items-center gap-2 group">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden border border-white/10 group-hover:border-[#7C3AED] transition-colors">
                <img 
                  src={logoImg} 
                  alt="DesignLoop Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-heading text-lg font-extrabold text-white">
                Design<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Loop</span>
              </span>
            </a>
            
            <p className="text-neutral-400 text-sm max-w-sm font-light leading-relaxed">
              Modern Websites Built with Passion and Precision. We design and build fast, responsive websites that help businesses establish a strong online presence.
            </p>

            <div className="mt-4 text-xs font-semibold text-neutral-500">
              EMAIL CHANNEL: <a href="mailto:designloop.work@gmail.com" className="text-white hover:text-[#06B6D4] transition-colors ml-1">designloop.work@gmail.com</a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-400">
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#06B6D4] transition-colors">Full Stack Web Apps</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#06B6D4] transition-colors">Landing Pages & Business Websites</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#06B6D4] transition-colors">FastAPI Backend & APIs</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#06B6D4] transition-colors">React.js Frontend Development</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#06B6D4] transition-colors">Dashboard & Admin Panels</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-[#06B6D4] transition-colors">Website Maintenance & UI Improvements</a></li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Agency
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-400">
              <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')} className="hover:text-[#06B6D4] transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-[#06B6D4] transition-colors">About Us</a></li>
              <li><a href="#portfolio" onClick={(e) => handleScrollTo(e, 'portfolio')} className="hover:text-[#06B6D4] transition-colors">Featured Projects</a></li>
              <li><a href="#process" onClick={(e) => handleScrollTo(e, 'process')} className="hover:text-[#06B6D4] transition-colors">Process Blueprint</a></li>
              <li><a href="#testimonials" onClick={(e) => handleScrollTo(e, 'testimonials')} className="hover:text-[#06B6D4] transition-colors">Why Us</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')} className="hover:text-[#06B6D4] transition-colors">Contact Form</a></li>
            </ul>
          </div>

          {/* Social Connect Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex gap-2">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all" aria-label="GitHub">
                <GithubIcon className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all" aria-label="Twitter">
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all" aria-label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/20 transition-all" aria-label="Discord">
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
            <button
              onClick={handleScrollTop}
              className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#06B6D4] hover:text-white transition-colors cursor-pointer"
            >
              Scroll to top <ArrowUp className="h-3 w-3" />
            </button>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-semibold text-neutral-500">
          <div>
            © {new Date().getFullYear()} DesignLoop Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1.5">
            Designed and developed with passion using modern web technologies.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
