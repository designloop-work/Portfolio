import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection based on scrolling
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
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
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-105">
            <img 
              src={logoImg} 
              alt="DesignLoop Logo" 
              className="absolute h-[200%] w-[200%] max-w-none object-cover object-[center_25%]"
            />
          </div>
          <span className="font-heading text-xl font-extrabold tracking-tight text-white transition-colors group-hover:text-white">
            Design<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]">Loop</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 bg-neutral-950/40 rounded-full px-6 py-2 border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-all relative ${
                activeSection === link.href.substring(1) ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group transition-all"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] opacity-90 transition-all duration-300 group-hover:opacity-100"></span>
            <span className="absolute -inset-px rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] opacity-0 group-hover:opacity-50 blur-md transition-all duration-300"></span>
            <span className="relative flex items-center gap-1.5">
              Book a Call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B0B0B]/95 border-b border-white/5 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    activeSection === link.href.substring(1) ? 'text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/5" />
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-center text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#06B6D4]"
              >
                Book a Call
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
