const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

// Icons without an imgPath show their emoji instead.
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const techStackImgs = [
  { name: "Spring Boot", imgPath: "/images/logos/springboot.png" },
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "MySQL", imgPath: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "Git", imgPath: "/images/logos/git.svg" },
  { name: "Java", imgPath: `${DEVICON}/java/java-original.svg` },
  { name: "JavaScript", imgPath: "/images/logos/js.png" },
  { name: "Spring Security", emoji: "🔐" },
  { name: "Spring AOP", emoji: "🧩" },
  { name: "Redis", imgPath: `${DEVICON}/redis/redis-original.svg` },
  { name: "Apache Kafka", imgPath: `${DEVICON}/apachekafka/apachekafka-original.svg` },
  { name: "Jira", imgPath: `${DEVICON}/jira/jira-original.svg` },
  { name: "Mockito", emoji: "🧪" },
  { name: "OOPs", emoji: "🧱" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    company: "Stackko",
    logoPath: "/images/stackko.png", // add this file to public/images
    logoAlt: "Stackko logo",
    title: "Java Developer — Stackko",
    client: "B2B, Product-Based SaaS Startup",
    date: "April 2026 - Present",
    responsibilities: [
      "Built a core multi-level (up to 4 levels) approval module that lets business clients configure their own approval chains, integrated with 2 external SaaS platforms.",
      "Used Spring AOP to centralise auditing, logging and validation, cutting repeated code by ~20%, with declarative transaction management for safe rollback.",
      "Tuned SQL queries and indexes on key approval APIs, improving response time by ~25%.",
      "Built React.js components for real-time approval tracking, with role-based access control and 2FA for enterprise clients.",
    ],
  },
  {
    company: "TCS",
    logoPath: "/images/logo1.jpg",
    logoAlt: "TCS logo",
    clientLogo: "/images/Amex.png",
    clientLogoAlt: "American Express logo",
    title: "Java Full Stack Developer — TCS",
    client: "Client: American Express — internal authentication and security platform.",
    date: "May 2024 - Nov 2025",
    responsibilities: [
      "Developed and maintained full stack modules using Spring Boot (REST APIs) and React.js for an internal American Express authentication and security platform.",
      "Implemented JWT-based authentication and Spring Security to enforce role-based access control across 4 user roles.",
      "Debugged 20+ critical backend and frontend issues by analyzing logs and tracing API requests, reducing average resolution time by ~20%.",
      "Wrote unit tests with JUnit and Mockito and collaborated with QA and DevOps during CI/CD deployments.",
    ],
  },
  {
    company: "iTuple Technologies",
    logoPath: "/images/logo2.png",
    logoAlt: "iTuple Technologies logo",
    clientLogo: "/images/fnp.png",
    clientLogoAlt: "Ferns N Petals logo",
    title: "Full Stack Developer",
    date: "Feb 2023 - July 2023",
    responsibilities: [
      "Built complete e-learning platform with student and admin portals after identifying need for separate user workflows",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Developed a responsive, location-based e-commerce platform (fnp)for gifting, delivering a customized user experience",
    ],
  },
  {
    company: "MERN TA",
    logoPath: "/images/logo3.png",
    logoAlt: "Company logo",
    title: "MERN TA",
    date: "May 2022 - Aug 2022",
    responsibilities: [
      "Mentored students on JavaScript, React and Node concepts.",
      "Conducted doubt sessions for JavaScript and React fundamentals.",
      "Reviewed code and improved project architecture.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
