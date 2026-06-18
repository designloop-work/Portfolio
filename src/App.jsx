import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState('restaurant');

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0B0B0B] text-white min-h-screen selection:bg-[#7C3AED]/35 selection:text-white"
        >
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Portfolio onSelectCaseStudy={(id) => setSelectedCaseStudyId(id)} />
          <CaseStudies selectedId={selectedCaseStudyId} setSelectedId={setSelectedCaseStudyId} />
          <Process />
          <WhyUs />
          <Testimonials />
          <TechStack />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
