import restaurantImg from '../assets/restaurant_mockup.png';
import crmImg from '../assets/crm_mockup.png';
import gymImg from '../assets/gym_mockup.png';
import realEstateImg from '../assets/real_estate_mockup.png';
import resumeImg from '../assets/resume_mockup.png';

export const projects = [
  {
    id: "restaurant",
    name: "POS Cafe System",
    description: "A real-time order-tracking, table management, and sales analytics POS system engineered for high-volume cafe and dining locations.",
    image: restaurantImg,
    tags: ["React.js", "Node.js", "PostgreSQL", "Socket.io"],
    demoUrl: "https://pos-cafe-s.netlify.app",
    gitUrl: "https://github.com/designloop-work/Cafe-POS",
    caseStudy: {
      client: "POS Cafe",
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
    name: "SFW The Gym",
    description: "A premium fitness platform featuring an on-demand HD exercise library, trainer booking, multi-branch scheduling, and progress tracking.",
    image: gymImg,
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    demoUrl: "https://zenith-fit-digital.lovable.app",
    gitUrl: "#",
    caseStudy: {
      client: "SFW The Gym",
      duration: "6 Weeks",
      problem: "The gym needed to digitize its offering to compete with online platforms, providing members with a high-quality exercise library, coach directory, and personal progress logs.",
      solution: "We engineered a modern responsive web application with a search-optimized HD video exercise library, interactive trainer schedules, and personalized progress dashboard.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
      metrics: [
        { label: "Active Members", value: "1,400+", desc: "Enrolled athletes" },
        { label: "Video Library", value: "100+", desc: "HD form demonstrations" },
        { label: "Member Retention", value: "+35%", desc: "Via digital tracking tools" }
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
