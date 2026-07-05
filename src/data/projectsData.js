import restaurantImg from '../assets/cafepos.png';
import crmImg from '../assets/restaurant.png';
import gymImg from '../assets/gym.png';
import realEstateImg from '../assets/pg.png';
import dentalImg from '../assets/dental.png';
import resumeImg from '../assets/resume_mockup.png';

export const projects = [
  {
    id: "restaurant",
    name: "Restaurant Management System",
    description: "A real-time order-tracking, seating management, and analytics dashboard designed for busy dining locations.",
    image: restaurantImg,
    tags: ["React.js", "Node.js", "PostgreSQL", "Socket.io"],
    demoUrl: "https://pos-cafe-s.netlify.app",
    gitUrl: "https://github.com/designloop-work/Cafe-POS",
    caseStudy: {
      client: "Local Café POS (Concept Project)",
      duration: "10 Weeks",
      problem: "A busy restaurant franchise faced delays in routing orders to the kitchen, leading to prep lags and billing errors.",
      solution: "We developed a real-time order dispatcher utilizing WebSockets. Waitstaff take orders on tablets, which are instantly pushed to kitchen displays. We backed the app with PostgreSQL transactions to prevent billing errors.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      metrics: [
        { label: "Responsive Design", value: "Tablet & Mobile", desc: "Adaptive layouts" },
        { label: "Real-Time Updates", value: "WebSockets", desc: "Via Socket.io" },
        { label: "Database Safety", value: "PostgreSQL", desc: "ACID transactions" }
      ]
    }
  },
  {
    id: "royal-spice-house",
    name: "Royal Spice House",
    description:
      "A responsive website featuring menu presentations, event highlights, and a clean booking form.",
    image: crmImg,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"],
    demoUrl: "https://preview-restaurantweb.netlify.app",
    gitUrl: "https://github.com/designloop-work/Preview-Restaurant",
    caseStudy: {
      client: "Royal Spice House (Restaurant Website)",
      duration: "3 Weeks",
      problem:
        "The restaurant needed an inviting digital presence with an easy reservation flow to convert visitors into customers.",
      solution:
        "We designed and developed a restaurant website with smooth animations, an interactive menu, and a booking form with frontend validation.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "React Router", "React Hook Form", "Zod"],
      metrics: [
        { label: "Performance", value: "98", desc: "Google Lighthouse Score" },
        { label: "Mobile Responsive", value: "100%", desc: "Optimized for all devices" },
        { label: "Page Speed", value: "<1.5s", desc: "Average page load time" },
        { label: "SEO Score", value: "95+", desc: "Optimized for search engines" }
      ]
    }
  },
  {
    id: "gym",
    name: "Gym Management System",
    description: "A member portal and administrative dashboard supporting automatic check-ins, subscription management, and trainer scheduling.",
    image: gymImg,
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://zenith-fit-digital.lovable.app",
    gitUrl: "#",
    caseStudy: {
      client: "IronPulse Fitness (Concept Project)",
      duration: "6 Weeks",
      problem: "The gym suffered from long check-in queues at peak hours, scheduling conflicts, and manual billing errors.",
      solution: "We built an interactive portal linking simulated NFC keycard actions to an Express server. Added a digital calendar booking system for trainers and automated billing retries using Stripe.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      metrics: [
        { label: "State Management", value: "Redux / Context", desc: "Consistent booking data" },
        { label: "Stripe Integration", value: "Payment Gateways", desc: "Automated billing logic" },
        { label: "Calendar UI", value: "Interactive", desc: "Dynamic schedule filters" }
      ]
    }
  },
  {
    id: "pgfinder",
    name: "PG Finder Ahmedabad",
    description: "A search platform that helps students and working professionals discover PG accommodations with location and budget filters.",
    image: realEstateImg,
    tags: ["React", "FastAPI", "MongoDB", "Tailwind CSS", "REST API"],
    demoUrl: "https://pgfinder-us.netlify.app",
    gitUrl: "https://github.com/designloop-work/PG-Finder",
    caseStudy: {
      client: "PG Finder (Personal Project)",
      duration: "4 Weeks",
      problem: "Finding suitable accommodation was difficult due to scattered listings and lack of localized search options.",
      solution: "We built a PG search platform using React and FastAPI. Users can browse listings, apply gender and budget filters, and connect with property owners.",
      technologies: ["React", "FastAPI", "MongoDB Atlas", "Tailwind CSS", "REST API", "Render"],
      metrics: [
        { label: "FastAPI Backend", value: "Fast API", desc: "Under 200ms response time" },
        { label: "Smart Filtering", value: "Custom Filters", desc: "Budget, location & gender" },
        { label: "MongoDB Atlas", value: "Cloud DB", desc: "Scalable data management" }
      ]
    }
  },
  {
    id: "resume",
    name: "AI Resume Builder",
    description: "A resume editing tool that helps job applicants analyze resume text against job descriptions using OpenAI APIs.",
    image: resumeImg,
    tags: ["React.js", "FastAPI", "OpenAI API", "Tailwind"],
    demoUrl: "#",
    gitUrl: "#",
    caseStudy: {
      client: "CareerJump (Concept Project)",
      duration: "9 Weeks",
      problem: "Job applicants often fail initial screening stages because their resumes are not optimized for specific roles.",
      solution: "We built an interactive resume editor that suggests optimizations based on job description keywords using OpenAI APIs.",
      technologies: ["React.js", "FastAPI", "OpenAI API", "Tailwind CSS", "jsPDF"],
      metrics: [
        { label: "OpenAI Integration", value: "AI Guidance", desc: "Bullet point adjustments" },
        { label: "PDF Export", value: "Client-Side", desc: "Fast PDF generation" },
        { label: "Responsive Editor", value: "Interactive", desc: "Clean side-by-side layout" }
      ]
    }
  },
  {
    id: "dental-clinic",
    name: "NovaDent Dental Clinic",
    description:
      "A dental clinic management portal featuring appointment scheduling, receptionist dashboard, and local patient records.",
    image: dentalImg,
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Hook Form", "LocalStorage"],
    demoUrl: "https://denalclinic-preview.vercel.app",
    gitUrl: "https://github.com/designloop-work/denalclinic-preview",
    caseStudy: {
      client: "NovaDent Dental Care (Concept Project)",
      duration: "8 Weeks",
      problem:
        "The clinic relied on manual scheduling and paper records, causing booking conflicts and billing delays.",
      solution:
        "We built a frontend-only clinic dashboard with appointment management, client billing, and treatment tracking using LocalStorage for data persistence.",
      technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Hook Form", "Recharts", "React Router", "LocalStorage"],
      metrics: [
        { label: "Reception Dashboard", value: "Visual Calendar", desc: "Easy schedule adjustments" },
        { label: "Offline Storage", value: "LocalStorage", desc: "Fast data persistence" },
        { label: "Invoice Generator", value: "Instant PDF", desc: "Client-side invoicing" }
      ]
    }
  }
];

// Dynamically generate the caseStudiesData map for backward compatibility
export const caseStudiesData = projects.reduce((acc, project) => {
  if (project.caseStudy) {
    acc[project.id] = {
      title: project.name,
      client: project.caseStudy.client,
      duration: project.caseStudy.duration,
      problem: project.caseStudy.problem,
      solution: project.caseStudy.solution,
      technologies: project.caseStudy.technologies,
      metrics: project.caseStudy.metrics
    };
  }
  return acc;
}, {});
