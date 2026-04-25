export type CodeStatus = 'available' | 'coming-soon' | 'private'
export type ProjectVisualType =
  | 'risk'
  | 'finance'
  | 'editor'
  | 'rag'
  | 'vision'
  | 'sentiment'

export type ProjectEntry = {
  title: string
  slug: string
  summary: string
  impact: string[]
  tech: string[]
  category: string
  featured: boolean
  githubUrl?: string
  demoUrl?: string
  codeStatus: CodeStatus
  image?: string
  visualType?: ProjectVisualType
}

export const featuredProjects: ProjectEntry[] = [
  {
    title: 'ScamShield',
    slug: 'scamshield',
    summary:
      'WhatsApp-first fraud and scam detection platform for UPI, phishing, KYC, job/task, investment, QR, and fake payment scams.',
    impact: [
      'Designed a hybrid risk engine with deterministic rules, MiniLM embeddings, calibrated classifiers, URL/payee scoring, merchant graph signals, and multilingual GenAI explanations.',
      'Built Python FastAPI ML service with paraphrase-multilingual-MiniLM-L12-v2 embeddings, logistic regression calibration, model metadata, and safe Naive Bayes fallback.',
      'Developed a Go risk orchestrator with privacy-safe UPI hashing, recovery reports, feedback capture, analytics filters, admin drilldowns, and local Ollama GenAI support.'
    ],
    tech: [
      'Go',
      'Python',
      'FastAPI',
      'React',
      'Vite',
      'MiniLM',
      'scikit-learn',
      'Ollama',
      'PostgreSQL-ready',
      'Redis-ready'
    ],
    category: 'Fraud Safety',
    featured: true,
    codeStatus: 'coming-soon',
    visualType: 'risk'
  },
  {
    title: 'Horizon Banking Platform',
    slug: 'horizon-banking',
    summary:
      'Secure full-stack banking platform with real-time transaction analytics, multi-account integration, and user-to-user transfers.',
    impact: [
      'Implemented SSR authentication and validated financial workflows with Appwrite.',
      'Integrated Plaid and Dwolla for account connectivity, transaction data, and transfer flows.',
      'Built modern dashboard analytics with Next.js, TypeScript, Tailwind CSS, and Chart.js.'
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'Appwrite',
      'Plaid',
      'Dwolla',
      'Zod',
      'Tailwind CSS',
      'Chart.js'
    ],
    category: 'Fintech',
    featured: true,
    githubUrl:
      'https://github.com/devkmaan/Banking-App-with-Finance-Management',
    codeStatus: 'available',
    visualType: 'finance'
  },
  {
    title: 'Blog For The Future',
    slug: 'blog-for-the-future',
    summary:
      'AI-powered full-stack blogging platform that generates content with OpenAI APIs and manages posts through a rich editor.',
    impact: [
      'Used Prisma ORM for structured database access and faster iteration.',
      'Integrated OpenAI APIs into a production-style content workflow.',
      'Built editor and content management flows with Next.js, TipTap, and TypeScript.'
    ],
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Prisma', 'TipTap', 'CSS'],
    category: 'AI SaaS',
    featured: true,
    githubUrl: 'https://github.com/devkmaan/Blog-for-the-future',
    codeStatus: 'available',
    visualType: 'editor'
  },
  {
    title: 'Natural Language Query Agent',
    slug: 'natural-language-query-agent',
    summary:
      'LLM and vector-indexed query agent for answering questions across lecture notes and LLM architecture references.',
    impact: [
      'Designed retrieval over lecture notes and structured LLM architecture tables.',
      'Explored follow-up questions, conversational memory, and citation-ready responses.',
      'Focused on concise answer generation from large academic reference sets.'
    ],
    tech: ['Python', 'Jupyter Notebook', 'LLMs', 'Vector indexing', 'RAG'],
    category: 'AI Retrieval',
    featured: true,
    githubUrl: 'https://github.com/devkmaan/Natural-Language-Query-Agent',
    codeStatus: 'available',
    visualType: 'rag'
  },
  {
    title: 'WatchGuard CCTV Anomaly Detection',
    slug: 'watchguard-cctv-anomaly-detection',
    summary:
      'Real-time surveillance anomaly detection using autoencoders and deep learning models over CCTV video frames.',
    impact: [
      'Used spatio-temporal autoencoder methods for abnormal behavior detection.',
      'Prepared video frame pipelines over Avenue abnormal detection data.',
      'Compared Conv3D, Conv2D LSTM, and Conv3D transpose model approaches.'
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Jupyter Notebook'],
    category: 'Computer Vision',
    featured: true,
    githubUrl:
      'https://github.com/devkmaan/WatchGuard-CCTV-Anomaly-Detection-System',
    codeStatus: 'available',
    visualType: 'vision'
  },
  {
    title: 'TweetMoodTracker',
    slug: 'tweet-mood-tracker',
    summary:
      'NLP research project for identifying depressive trends in Twitter text while emphasizing privacy-aware analysis.',
    impact: [
      'Built project flow for social text data collection, dataset creation, and model development.',
      'Explored language signals that may indicate mental health risk trends.',
      'Presented an applied NLP direction for support-oriented social media monitoring.'
    ],
    tech: ['Python', 'NLP', 'Jupyter Notebook', 'Data analysis'],
    category: 'Applied NLP',
    featured: true,
    githubUrl: 'https://github.com/devkmaan/TweetMoodTracker',
    codeStatus: 'available',
    visualType: 'sentiment'
  }
]

export const archiveProjects: ProjectEntry[] = [
  {
    title: 'AI-SaaS',
    slug: 'ai-saas',
    summary: 'Multi-tool AI SaaS with generation flows and authenticated access.',
    impact: ['Built AI product flows for chat, code, image, and music generation.'],
    tech: ['Next.js', 'TypeScript', 'Clerk'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/AI-SaaS',
    codeStatus: 'available',
    image: '/projects/genius.png'
  },
  {
    title: 'UniConnect',
    slug: 'uniconnect',
    summary: 'Student resource portal for notes, papers, books, FAQs, and links.',
    impact: ['Organized academic resources into a searchable student workflow.'],
    tech: ['React', 'JavaScript', 'CSS'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/uniconnect',
    codeStatus: 'available'
  },
  {
    title: 'MERN Blog App',
    slug: 'mern-blog-app',
    summary: 'Blog app with dashboard, JWT auth, and Redux Toolkit state.',
    impact: ['Practiced authenticated dashboard patterns in a MERN stack app.'],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/mern-blog-app',
    codeStatus: 'available'
  },
  {
    title: 'Arklyte Travel Planner',
    slug: 'nextjs-travel-planner',
    summary: 'Next.js travel planner with scraping-oriented trip discovery flows.',
    impact: ['Explored server actions, scraping queues, and itinerary UX.'],
    tech: ['Next.js', 'TypeScript', 'Docker'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/nextjs-travel-planner',
    codeStatus: 'available'
  },
  {
    title: 'GO-CPT',
    slug: 'go-cpt',
    summary: 'Responsive Figma-to-React implementation for a frontend task.',
    impact: ['Converted design handoff into Tailwind and React UI.'],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/GO-CPT',
    codeStatus: 'available'
  },
  {
    title: 'Slidely Task Backend',
    slug: 'slidely-task-backend',
    summary: 'TypeScript backend for submission workflows.',
    impact: ['Implemented API service structure for a forms task.'],
    tech: ['TypeScript', 'Node.js'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/SlidelyTaskBackend',
    codeStatus: 'available'
  },
  {
    title: 'Slidely Forms App VB',
    slug: 'slidely-forms-app-vb',
    summary: 'Visual Basic .NET forms client for the Slidely task flow.',
    impact: ['Paired desktop client work with a TypeScript backend.'],
    tech: ['VB.NET'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/SlidelyFormsApp-VB',
    codeStatus: 'available'
  },
  {
    title: 'BookShelf',
    slug: 'bookshelf',
    summary: 'Book-focused JavaScript application.',
    impact: ['Practiced frontend state and catalog-style UI patterns.'],
    tech: ['JavaScript', 'CSS'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/BookShelf',
    codeStatus: 'available'
  },
  {
    title: 'Book Dashboard',
    slug: 'book-dashboard',
    summary: 'Dashboard-style interface for book data.',
    impact: ['Built compact data presentation patterns.'],
    tech: ['JavaScript', 'CSS'],
    category: 'Full-stack Products',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/book-dashboard',
    codeStatus: 'available'
  },
  {
    title: 'OpenAI ChatBot',
    slug: 'openai-chatbot',
    summary: 'Notebook-based chatbot exploration with OpenAI-style workflows.',
    impact: ['Explored conversational AI prototyping.'],
    tech: ['Python', 'Jupyter Notebook'],
    category: 'AI and ML',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/OpenAi_ChatBot',
    codeStatus: 'available'
  },
  {
    title: 'Paraphrase Detection',
    slug: 'paraphrase-detection',
    summary: 'Paraphrase detection research artifact.',
    impact: ['Explored text similarity and language understanding concepts.'],
    tech: ['NLP'],
    category: 'AI and ML',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/paraphraseDetection',
    codeStatus: 'available'
  },
  {
    title: 'Subtheme Sentiment Analysis',
    slug: 'subtheme-sentiment-analysis',
    summary: 'Notebook project for sentiment analysis across subthemes.',
    impact: ['Practiced text analytics workflows over labeled themes.'],
    tech: ['Python', 'Jupyter Notebook', 'NLP'],
    category: 'AI and ML',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/Subtheme_Sentiment_Analysis',
    codeStatus: 'available'
  },
  {
    title: 'BeastScan',
    slug: 'beastscan',
    summary: 'Image processing app for animal recognition.',
    impact: ['Applied computer vision classification to uploaded images.'],
    tech: ['Python', 'Jupyter Notebook', 'Computer Vision'],
    category: 'AI and ML',
    featured: false,
    githubUrl:
      'https://github.com/devkmaan/BeastScan-Image-Processing-for-Animal-Recognition',
    codeStatus: 'available'
  },
  {
    title: 'GuardianWatch',
    slug: 'guardianwatch',
    summary: 'Real-time weapon detection project for CCTV safety alerts.',
    impact: ['Built a CV pipeline around gun detection datasets and alerts.'],
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    category: 'AI and ML',
    featured: false,
    githubUrl:
      'https://github.com/devkmaan/GuardianWatch-Real-Time-Weapons-Detection',
    codeStatus: 'available'
  },
  {
    title: 'Distracted Driver Detection',
    slug: 'distracted-driver-detection',
    summary: 'Computer vision notebook for driver distraction classification.',
    impact: ['Explored image classification for road safety use cases.'],
    tech: ['Python', 'Jupyter Notebook'],
    category: 'AI and ML',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/Distracted-Driver-Detection',
    codeStatus: 'available'
  },
  {
    title: 'Quote Web App',
    slug: 'quote-web-app',
    summary: 'Notebook-backed quote web app experiment.',
    impact: ['Practiced small app prototyping.'],
    tech: ['Jupyter Notebook'],
    category: 'AI and ML',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/Quote-Web-app',
    codeStatus: 'available'
  },
  {
    title: 'GRAAS',
    slug: 'graas',
    summary: 'Image-based authentication idea using visual strings and encryption.',
    impact: ['Combined visual UX and encryption concepts for login security.'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/imageauth',
    demoUrl: 'https://devkmaan.github.io/imageauth',
    codeStatus: 'available',
    image: '/projects/graas.png'
  },
  {
    title: 'Srijan',
    slug: 'srijan',
    summary: 'Personalized gifting e-commerce website with AR/VR concepting.',
    impact: ['Built a polished storefront prototype for custom gifting.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/E_Commerce_Website',
    demoUrl: 'https://devkmaan.github.io/E_Commerce_Website/',
    codeStatus: 'available',
    image: '/projects/srijan.png'
  },
  {
    title: 'Satkaar',
    slug: 'satkaar',
    summary: 'Indian tourism and homestay discovery website.',
    impact: ['Created travel discovery UI for cultural destinations.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/indiantourism',
    demoUrl: 'https://devkmaan.github.io/indiantourism/',
    codeStatus: 'available',
    image: '/projects/satkaar.png'
  },
  {
    title: 'GustyWeather',
    slug: 'gustyweather',
    summary: 'Weather app using OpenWeather API.',
    impact: ['Displayed real-time weather data in a responsive UI.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/GustyWeather',
    demoUrl: 'https://devkmaan.github.io/GustyWeather/',
    codeStatus: 'available',
    image: '/projects/weather.png'
  },
  {
    title: 'Calculator',
    slug: 'calculator',
    summary: 'Responsive calculator for arithmetic operations.',
    impact: ['Practiced robust UI state and input behavior.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/calculator',
    demoUrl: 'https://devkmaan.github.io/calculator/',
    codeStatus: 'available',
    image: '/projects/erith.png'
  },
  {
    title: 'ColorPicker',
    slug: 'colorpicker',
    summary: 'Chrome extension for selecting and saving colors from web pages.',
    impact: ['Built a utility for design and frontend workflows.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/colorPicker',
    codeStatus: 'available',
    image: '/projects/colorpick.png'
  },
  {
    title: 'Rock Paper Scissors',
    slug: 'rock-paper-scissors',
    summary: 'Browser game with dynamic JavaScript result updates.',
    impact: ['Implemented interactive game logic and UI feedback.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/RockPaperScissors',
    demoUrl: 'https://devkmaan.github.io/RockPaperScissors/',
    codeStatus: 'available',
    image: '/projects/rps.png'
  },
  {
    title: 'ToDoList',
    slug: 'todo-list',
    summary: 'Simple task list application.',
    impact: ['Practiced task CRUD and DOM interaction.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/ToDoList',
    codeStatus: 'available',
    image: '/projects/todo.png'
  },
  {
    title: 'Temp Converter',
    slug: 'temp-converter',
    summary: 'Temperature conversion utility.',
    impact: ['Practiced form inputs and unit conversion logic.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/tempconverter',
    codeStatus: 'available'
  },
  {
    title: 'WeatherApp',
    slug: 'weather-app',
    summary: 'Weather application prototype.',
    impact: ['Practiced external data display and responsive UI.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/WeatherApp',
    codeStatus: 'available'
  },
  {
    title: 'PatternLock',
    slug: 'pattern-lock',
    summary: 'Pattern lock UI experiment.',
    impact: ['Explored custom interaction patterns in JavaScript.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/PatternLock',
    codeStatus: 'available'
  },
  {
    title: 'Password Generation',
    slug: 'passwordgeneration',
    summary: 'Password generator utility.',
    impact: ['Built randomized credential helper behavior.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/passwordgeneration',
    codeStatus: 'available'
  },
  {
    title: 'Cursor',
    slug: 'cursor',
    summary: 'HTML/CSS cursor interaction experiment.',
    impact: ['Practiced visual interaction details.'],
    tech: ['HTML', 'CSS'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/Cursor',
    codeStatus: 'available'
  },
  {
    title: 'CodeTrack',
    slug: 'codetrack',
    summary: 'Frontend practice project.',
    impact: ['Built static UI and styling patterns.'],
    tech: ['CSS', 'HTML'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/codetrack',
    codeStatus: 'available',
    image: '/projects/codetrack.png'
  },
  {
    title: 'COVID Awareness',
    slug: 'covid-awareness',
    summary: 'Informational awareness website.',
    impact: ['Practiced structured content pages and responsive layout.'],
    tech: ['HTML', 'CSS'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/CovidAwareness',
    codeStatus: 'available'
  },
  {
    title: 'Quiz',
    slug: 'quiz',
    summary: 'Browser quiz application.',
    impact: ['Built interactive question and answer flow.'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/Quiz',
    codeStatus: 'available'
  },
  {
    title: 'Trombones',
    slug: 'trombones',
    summary: 'CSS-focused web practice project.',
    impact: ['Explored responsive styling and presentation.'],
    tech: ['CSS', 'HTML'],
    category: 'Web Practice',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/trombones',
    codeStatus: 'available'
  },
  {
    title: 'BlockChain',
    slug: 'blockchain',
    summary: 'Early JavaScript blockchain concept project.',
    impact: ['Explored blockchain fundamentals with JavaScript.'],
    tech: ['JavaScript'],
    category: 'Explorations',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/BlockChain',
    codeStatus: 'available',
    image: '/projects/blockchain.png'
  },
  {
    title: 'Portfolioo',
    slug: 'portfolioo',
    summary: 'Previous generation portfolio website.',
    impact: ['Served as the base for the current full rebuild.'],
    tech: ['Next.js', 'JavaScript', 'Chakra UI'],
    category: 'Explorations',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/portfolioo',
    codeStatus: 'available',
    image: '/projects/portfolio.png'
  },
  {
    title: 'Portfolio',
    slug: 'portfolio',
    summary: 'Older static portfolio iteration.',
    impact: ['Captured early frontend portfolio work.'],
    tech: ['HTML', 'CSS'],
    category: 'Explorations',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/portfolio',
    codeStatus: 'available'
  },
  {
    title: 'Portfolio Old',
    slug: 'portfolio-old',
    summary: 'First portfolio archive.',
    impact: ['Shows the progression from static pages to modern app builds.'],
    tech: ['CSS', 'HTML'],
    category: 'Explorations',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/portfolio_old',
    codeStatus: 'available'
  },
  {
    title: 'devkmaan Profile',
    slug: 'devkmaan-profile',
    summary: 'GitHub profile README and developer profile repository.',
    impact: ['Keeps the GitHub profile aligned with current positioning.'],
    tech: ['Markdown'],
    category: 'Explorations',
    featured: false,
    githubUrl: 'https://github.com/devkmaan/devkmaan',
    codeStatus: 'available'
  }
]
