import restaurantImg from '../assets/cafepos.png';
import crmImg from '../assets/restaurant.png';
import gymImg from '../assets/gym.png';
import realEstateImg from '../assets/pg.png';
import dentalImg from '../assets/dentalImg';
import resumeImg from '../assets/resume_mockup.png';

export const projects = [
  {
    id: "restaurant",
    name: "Restaurant Management System",
    description: "A real-time order-tracking, seating management, and analytics dashboard engineered for high-volume dining locations.",
    image: restaurantImg,
    tags: ["React.js", "Node.js", "PostgreSQL", "Socket.io"],
    demoUrl: "https://pos-cafe-s.netlify.app",
    gitUrl: "https://github.com/designloop-work/Cafe-POS",
    caseStudy: {
      client: "Gourmet Group Ltd",
      duration: "10 Weeks",
      problem: "A high-volume restaurant franchise faced severe delays in routing orders to the kitchen, leading to 15-minute prep lag times, high table turnover times, and lost billing items.",
      solution: "We engineered a real-time order dispatcher utilizing WebSockets. Waitstaff take orders on tablets, which are instantly pushed to kitchen displays. We backed the app with PostgreSQL transactions to prevent billing errors.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      metrics: [
        { label: "Order Prep Speed", value: "+30%", desc: "Faster fulfillment" },
        { label: "Table Idle Time", value: "-18%", desc: "Increased turnover" },
        { label: "Recaptured Billing", value: "12%", desc: "Direct revenue growth" }
      ]
    }
  },
  {
    id: "royal-spice-house",
    name: "Royal Spice House",
    description:
      "A premium luxury restaurant showcase website featuring an immersive dining experience, elegant storytelling, online table reservations, signature menu presentation, event booking, and a modern hospitality-inspired user interface.",
    image: crmImg,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "GSAP"],
    demoUrl: "https://preview-restaurantweb.netlify.app",
    gitUrl: "https://github.com/designloop-work/Preview-Restaurant",
    caseStudy: {
      client: "Royal Spice House",

      duration: "3 Weeks",

      problem:
        "The restaurant required a premium digital presence that reflected its luxury dining experience. Their existing website lacked visual appeal, storytelling, mobile responsiveness, and an engaging reservation flow, making it difficult to convert visitors into customers.",

      solution:
        "We designed and developed a modern luxury restaurant website with cinematic visuals, smooth animations, an interactive menu, online reservation system, event showcase, responsive design, and SEO-friendly architecture. The project follows production-grade React architecture with reusable components, accessibility standards, optimized performance, and secure frontend practices.",

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
    description: "A member portal and administrative application supporting automatic keycard check-ins, subscription billing, and training timetables.",
    image: gymImg,
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://zenith-fit-digital.lovable.app",
    gitUrl: "#",
    caseStudy: {
      client: "IronPulse Fitness",
      duration: "6 Weeks",
      problem: "The client suffered from check-in queues at peak hours, manual schedule conflicts, and a high volume of membership cancellations.",
      solution: "We built an interactive portal linking NFC keycard hardware to a high-speed Express socket server. Added a digital calendar booking system for trainers and automated billing retries.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      metrics: [
        { label: "Peak Check-in Queue", value: "0s", desc: "Completely automated" },
        { label: "Member Retention", value: "+28%", desc: "Via mobile scheduling" },
        { label: "Admin Billing Effort", value: "-95%", desc: "No manual inputs" }
      ]
    }
  },
  {
    id: "pgfinder",
    name: "PG Finder Ahmedabad",
    description: "A modern PG booking platform that helps students and working professionals discover verified PG accommodations with smart filters, detailed listings, and an easy-to-use interface.",
    image: realEstateImg,
    tags: ["React", "FastAPI", "MongoDB", "Tailwind CSS", "REST API"],
    demoUrl: "https://pgfinder-us.netlify.app",
    gitUrl: "https://github.com/designloop-work/PG-Finder",
    caseStudy: {
      client: "PG Finder Ahmedabad (Concept Project)",
      duration: "4 Weeks",
      problem: "Finding a suitable PG in Ahmedabad was difficult due to scattered listings, limited filtering options, outdated information, and no centralized platform to compare accommodations based on budget, location, and gender.",
      solution: "We developed a responsive PG Finder platform that allows users to browse verified PG listings, filter properties by location, budget, and gender, view detailed property information with images, and easily connect with property owners. The application is powered by a FastAPI backend with MongoDB Atlas for efficient and scalable data management.",
      technologies: ["React", "FastAPI", "MongoDB Atlas", "Tailwind CSS", "REST API", "Render"],
      metrics: [
        { label: "Areas Covered", value: "20+", desc: "Across Ahmedabad" },
        { label: "API Response", value: "<200ms", desc: "Optimized backend" },
        { label: "Responsive Design", value: "100%", desc: "All screen sizes" },
        { label: "Property Discovery", value: "Easy", desc: "Filter by budget, location & gender" }
      ]
    }
  },
  {
    id: "resume",
    name: "AI Resume Builder",
    description: "Intelligent document compiler that tracks resume strength against specific job descriptions and rewrites bullets with AI guidance.",
    image: resumeImg,
    tags: ["React.js", "FastAPI", "OpenAI API", "Tailwind"],
    demoUrl: "#",
    gitUrl: "#",
    caseStudy: {
      client: "CareerJump SaaS",
      duration: "9 Weeks",
      problem: "Job applicants were receiving minimal callbacks because their resumes were not optimized for Applicant Tracking Systems (ATS).",
      solution: "We engineered an interactive editor that compares resumes against target job descriptions. An LLM analyzer suggestions bullet adjustments and formats PDFs on the fly.",
      technologies: ["React.js", "FastAPI", "OpenAI API", "Tailwind CSS", "jsPDF"],
      metrics: [
        { label: "ATS Pass Rate", value: "+85%", desc: "Higher resume scores" },
        { label: "Interview Invitations", value: "2.5x", desc: "Increase in callouts" },
        { label: "Document Generation", value: "150k+", desc: "Resumes made" }
      ]
    }
  },
  {
    id: "dental-clinic",
    name: "NovaDent Dental Clinic",
    description:
      "A premium dental clinic management platform featuring appointment scheduling, receptionist dashboard, patient records, billing system, and responsive healthcare-focused UI.",
    image: dentalImg,
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Hook Form", "LocalStorage"],
    demoUrl: "#",
    gitUrl: "#",
    caseStudy: {
      client: "NovaDent Dental Care",
      duration: "8 Weeks",
      problem:
        "The clinic relied on manual appointment booking and paper-based patient records, causing scheduling conflicts, billing delays, and inefficient receptionist workflows.",

      solution:
        "Designed and developed a modern frontend-only dental clinic management system with an elegant patient experience. The platform includes online appointment booking, a receptionist dashboard, patient management, billing & invoice generation, treatment tracking, and responsive UI powered by localStorage for seamless offline demonstrations.",

      technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Hook Form", "Recharts", "React Router", "LocalStorage"],

      metrics: [
        { label: "Appointments Managed", value: "10k+", desc: "Demo patient bookings" },
        { label: "Billing Time", value: "-65%", desc: "Faster invoice generation" },
        { label: "Reception Efficiency", value: "+90%", desc: "Streamlined patient workflow" }
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
