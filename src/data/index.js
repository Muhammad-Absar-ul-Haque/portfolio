export const skills = {
  Backend: ["Node.js", "Express.js", "NestJS", "Java", "Spring Boot"],
  Frontend: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap"],
  "Databases & ORM": ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Sequelize"],
  "Caching & Tools": ["Redis", "Git", "GitHub", "Apache Kafka", "WebSockets"],
};

export const experience = [
  {
    role: "Backend Developer",
    company: "Code Avenue",
    location: "Karachi, Pakistan",
    period: "May 2025 – Present",
    points: [
      "Developed and maintained RESTful APIs using Node.js & Express.js for production-level apps",
      "Designed databases in MongoDB, MySQL, and PostgreSQL for efficient data storage",
      "Implemented JWT-based authentication to secure application endpoints",
      "Collaborated with cross-functional teams for seamless backend–frontend integration",
      "Built complete backend systems including admin panels from scratch",
      "Optimized backend performance through query efficiency and scalable API design",
      "Used Git and GitHub with branching, code reviews, and collaboration workflows",
    ],
  },
  {
    role: "Freelance Backend Developer",
    company: "Remote / Pakistan",
    location: "",
    period: "June 2024 – May 2025",
    points: [
      "Developed RESTful APIs using Node.js, Express.js, and NestJS for multiple clients",
      "Designed and optimized MongoDB, MySQL, and PostgreSQL databases",
      "Implemented JWT-based authentication and authorization",
      "Integrated Stripe payment gateway and email services",
      "Improved backend performance through query optimization and Redis caching",
      "Worked directly with clients to gather requirements and deliver production-ready code",
    ],
  },
];

export const projects = [
  {
    title: "Inventory Management System",
    tech: ["Spring Boot 3", "Java 21", "Apache Kafka", "Redis", "PostgreSQL", "WebSockets", "JWT"],
    description:
      "High-concurrency event-driven system using Spring Boot & Kafka to decouple Order and Notification services. Features Optimistic Locking for race condition resolution, WebSocket real-time updates, Redis caching, and fine-grained JWT access control.",
    highlight: "Event-Driven Architecture",
    link: "https://github.com/Muhammad-Absar-ul-Haque/Inventory-Management-Backend-Spring-boot",
  },
  {
    title: "Real-Time Chat Application",
    tech: ["Node.js", "Express", "MongoDB", "Socket.IO", "React", "Tailwind", "Zustand"],
    description:
      "Full-stack real-time chat with Socket.IO, featuring live messaging, user connection tracking, and persistent chat history. Clean React frontend with Zustand state management.",
    highlight: "Real-Time via WebSockets",
    link: "https://github.com/Muhammad-Absar-ul-Haque/fullstack-Chat-App",
  },
  {
    title: "EduConnect API",
    tech: ["Node.js", "Express", "MySQL", "Sequelize", "JWT"],
    description:
      "Production-grade LMS backend with role-based access control, soft deletes, and robust data modeling. Features strict validation, JWT authentication, and automated Swagger documentation.",
    highlight: "Enterprise Architecture",
    link: "https://github.com/Muhammad-Absar-ul-Haque/Demo_Project",
  },
  {
    title: "PrizeBond Backend",
    tech: ["NestJS", "PostgreSQL", "Prisma", "Firebase", "JWT"],
    description:
      "Comprehensive REST API managing P2P bond trading, admin oversight, and automated result parsing from PDFs. Integrates Firebase push notifications and robust role-based access.",
    highlight: "Automated Result Scrutiny",
    link: "https://github.com/Muhammad-Absar-ul-Haque/prize-bond-backend-nodejs",
  },
];

export const certifications = [
  { name: "Programming with JavaScript", issuer: "Coursera" },
  { name: "Introduction to Frontend Development", issuer: "Coursera" },
  { name: "The Ultimate React Course", issuer: "Udemy" },
];

export const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "3",  label: "Certifications" },
];

export const contact = {
  email: "absar.haque2003@gmail.com",
  phone: "+92 318 2667926",
  github: "https://github.com/Muhammad-Absar-ul-Haque",
  location: "Karachi, Pakistan",
};

export const navLinks = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

export const typingRoles = [
  "Backend Developer",
  "API Architect",
  "Node.js Engineer",
  "Spring Boot Expert",
  "Full-Stack Builder",
];
