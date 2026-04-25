export const siteConfig = {
  name: "Dev Kumar Maan",
  role: "Software Engineer at Pine Labs",
  location: "Delhi NCR, India",
  email: "devkmaan02@gmail.com",
  phone: "+91 99588 86645",
  phoneHref: "tel:+919958886645",
  resumeUrl:
    "https://drive.google.com/file/d/14a7gYKHHGo5i5fm-hZ6WzCMz3fpB0oUn/view",
  githubUrl: "https://github.com/devkmaan",
  linkedinUrl: "https://www.linkedin.com/in/dev-kumar-maan-3a6369180/",
  headline:
    "Backend systems engineer building reliable fintech platforms, telemetry services, and AI/ML products.",
  intro:
    "I work on distributed merchant onboarding and lifecycle systems at Pine Labs, with hands-on experience across Java, Go, Spring Boot, gRPC, event-driven services, observability, and full-stack AI/ML product engineering.",
  globalAvailability:
    "Open to high-impact backend, platform, fintech, and AI product roles across global product companies and startups in the USA, EU, and APAC.",
}

export const impactStats = [
  {
    value: "500K+",
    label: "POS devices served by merchant lifecycle systems",
  },
  {
    value: "90%",
    label: "reduction in onboarding failures through REST-first flows",
  },
  {
    value: "150K+",
    label: "POS devices migrated for high-volume payment processing",
  },
  {
    value: "50%",
    label: "lower SRE ticket volume through production debugging",
  },
]

export const experience = [
  {
    company: "Pine Labs",
    role: "Software Engineer",
    period: "Aug 2025 - Present",
    location: "Noida, India",
    summary:
      "Building internal merchant onboarding, payments, and lifecycle systems for production fintech workflows.",
    bullets: [
      "Built and scaled a distributed merchant onboarding platform (Reactive Spring Boot, microservices) handling 500K+ POS devices, serving as the system of record for merchant lifecycle.",
      "Reduced onboarding failures by 90% by replacing Salesforce event-based flows with idempotent REST-driven,fail-fast architecture, improving reliability at scale.",
      "Migrated legacy UAM from Salesforce into the internal platform, preserving authentication and role-based access control in production.",
      "Led Fiserv → Pine Labs migration, onboarding 150K+ POS devices supporting INR 150 Cr+ daily GTV with almost zero data loss.",
      "Redesigned VAS activation engine, reducing 600+ flows to <50 configurations, eliminating future effort.",
      "Migrated Bulk VAS/TID operations in-house, reducing third-party dependency while ensuring zero downtime.",
      "Integrated BPCL and Petroleum merchant workflows into the new platform, maintaining feature parity while reducing third-party dependency.",
      "Delivered PayByLink flows for online gateway payments when customers do not have physical cards at merchant outlets.",
      "Reduced SRE ticket volume by 50% through proactive debugging, observability and production issue resolution.",
    ],
  },
  {
    company: "Pine Labs",
    role: "Software Engineering Intern",
    period: "Jan 2025 - Aug 2025",
    location: "Noida, India",
    summary:
      "Built secure POS authentication, telemetry, and merchant onboarding services across Go and Spring Boot.",
    bullets: [
      "Engineered a Go-based POS authentication provisioning system using X.509 certificates for secure device identity and encrypted communication.",
      "Developed a Terminal Metrics Collector app with gRPC streaming into OpenTelemetry, Prometheus, and Grafana for real-time observability.",
      "Optimized high-frequency telemetry serialization with Protocol Buffers, reducing gRPC payload size by 20% and improving throughput.",
      "Built and optimized a production-grade telemetry pipeline for 300K+ POS devices, achieving under 2s latency and near-zero data loss for 24/7 monitoring.",
      "Implemented Spring Boot REST APIs for a merchant store terminal system, enabling seamless frontend integration during onboarding.",
      "Collaborated with DevOps, QA, and Product teams on Docker/Kubernetes deployments, regression testing, and reliable production rollouts.",
    ],
  },
]

export const education = {
  school: "National Institute of Technology Delhi",
  degree: "B.Tech in Electronics and Communication Engineering",
  minor: "Minor in Artificial Intelligence and Machine Learning",
  period: "Dec 2021 - May 2025",
  location: "Delhi, India",
  gpa: "7.96 GPA",
  summary:
    "Engineering foundation across electronics, systems thinking, algorithms, and AI/ML, paired with applied software projects, research, and competitive programming.",
  highlights: [
    "NIT Delhi engineering background with production software experience layered on top.",
    "AI/ML minor supporting applied work in NLP, computer vision, retrieval, and fraud safety.",
    "Research publication accepted at IEEE ICCTDC 2025.",
    "Selection into Amazon ML Summer School 2024 and Flipkart Grid semifinalist signal.",
  ],
  focusAreas: [
    "Data Structures",
    "Algorithms",
    "Computer Networks",
    "Operating Systems",
    "Machine Learning",
    "Signal Processing",
    "Backend Systems",
    "Applied AI",
  ],
}

export const skillGroups = [
  {
    title: "Backend and Systems",
    items: [
      "Java",
      "Spring Boot",
      "Spring WebFlux",
      "Golang",
      "gRPC",
      "Microservices",
      "Event-driven architecture",
      "REST APIs",
    ],
  },
  {
    title: "Data and Observability",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQL",
      "NoSQL",
      "Caffeine caching",
      "OpenTelemetry",
      "Grafana",
    ],
  },
  {
    title: "AI and Full-stack",
    items: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "MiniLM",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Engineering Toolkit",
    items: [
      "Git",
      "Maven",
      "Gradle",
      "JMeter",
      "Prisma",
      "Docker basics",
      "System design",
      "DSA",
    ],
  },
]

export const achievements = [
  "Solved 1000+ DSA problems across LeetCode, GeeksforGeeks, CodeChef, and Codeforces.",
  "Semi-finalist in Flipkart Grid 2024, among the top 2% of participants.",
  "Selected for Amazon ML Summer School 2024, top 0.3% in India.",
  "Secured Rank 82 among 1 million candidates in Delhi Best Student Contest.",
  "Recipient of Student of the Year and Most Disciplined Student awards at Aster Public School.",
]

export const publications = [
  {
    title: "Polynomial-Based Disorder Avoidance in Multimode Fiber Propagation",
    venue: "IEEE ICCTDC 2025",
    authors: "Dev Kumar Maan, Ayush Biyani, Rikmantra Basu",
    summary:
      "Designed a hybrid analytical and ML-based signal reconstruction framework combining polynomial basis projection with learned coefficient estimation.",
  },
]
