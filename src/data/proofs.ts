export const meta = {
  name: "Joshua Oludimu",
  tagline: "I build AI that doesn't hallucinate (most of the time)",
  bio: "AI/ML Engineer and Backend Developer with 4 years of development experience. Currently co-founding KARMA Groups and building UniNav while studying Statistics at the University of Ibadan. I specialize in LLM evaluation, agent architectures, and whatever it takes to win a hackathon.",
  location: "Nigeria",
  email: "joshuaoludimutric007@gmail.com",
  available: true,
};

export const socials = [
  {
    platform: "GitHub",
    handle: "Joshua07q",
    url: "https://github.com/Joshua07q",
    icon: "github",
  },
  {
    platform: "Hugging Face",
    handle: "shiroi07",
    url: "https://huggingface.co/shiroi07",
    icon: "huggingface",
  },
  {
    platform: "X",
    handle: "@Quanck_27",
    url: "https://x.com/Quanck_27",
    icon: "x",
  },
  {
    platform: "Snapchat",
    handle: "quanck-7",
    url: "https://snapchat.com/add/quanck-7",
    icon: "snapchat",
  },
];

export const roles = [
  "AI/ML Engineer",
  "Backend Architect",
  "Project Lead",
  "Co-Founder",
  "Hackathon Menace",
  "Open-Source Contributor",
  "LLM Whisperer",
  "Rust Enthusiast",
  "Full-Stack When Needed",
  "Freelance Overthinker",
];

export const companies = [
  { name: "KARMA Groups", role: "Co-Founder & AI Engineer", current: true },
  { name: "UniNav", role: "Engineer", current: true },
  { name: "DeepFunding AI", role: "AI Systems Developer" },
  { name: "Parse Wave", role: "Engineer" },
];

export const hackathons = [
  { name: "AI for Peace Hackathon", year: "2024", placement: "Winner", icon: "trophy" },
  { name: "Bolt.new Hackathon", year: "2025", placement: "Finalist", icon: "medal" },
];

export const highlights = [
  "4 years of development across Python, TypeScript, Rust, and more",
  "Won the AI for Peace Hackathon — built THERA, an emotional AI companion",
  "Building uninav.live — a campus navigation platform in active use",
  "Co-founded KARMA Groups, building AI evaluation infrastructure",
];

export const stack = {
  languages: [
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "Rust", level: 45 },
    { name: "Solidity", level: 35 },
    { name: "Dart", level: 35 },
    { name: "C# / .NET", level: 30 },
  ],
  ai: [
    { name: "PyTorch", level: 70 },
    { name: "TensorFlow", level: 65 },
    { name: "Hugging Face", level: 75 },
    { name: "ONNX Runtime", level: 50 },
    { name: "Groq LPU", level: 55 },
    { name: "LangChain", level: 60 },
  ],
  backend: [
    { name: "FastAPI", level: 80 },
    { name: "Node.js", level: 80 },
    { name: "NestJS", level: 55 },
    { name: "Express", level: 75 },
    { name: ".NET", level: 30 },
    { name: "Docker", level: 65 },
    { name: "Docker Compose", level: 55 },
  ],
  databases: [
    { name: "PostgreSQL", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 60 },
    { name: "Pinecone", level: 50 },
    { name: "ChromaDB", level: 50 },
  ],
  networking: [
    { name: "Wireshark", level: 45 },
    { name: "Charles Proxy", level: 45 },
    { name: "Python Networking", level: 60 },
    { name: "Scripting", level: 70 },
    { name: "TCP/IP & DNS", level: 50 },
  ],
  blockchain: [
    { name: "Smart Contracts", level: 40 },
    { name: "Solidity", level: 40 },
    { name: "Rust (Solana)", level: 35 },
    { name: "Base L2", level: 35 },
  ],
};

export const projects = [
  {
    name: "UniNav",
    description:
      "Campus navigation and student utility platform for seamless university life",
    tech: ["TypeScript", "Next.js", "React"],
    url: "https://uninav.live",
    featured: true,
    category: "platform",
  },
  {
    name: "Pythonic",
    description:
      "Interactive beginner-friendly Python learning platform with live code execution",
    tech: ["TypeScript", "React", "Node.js"],
    url: "https://github.com/Joshua07q/Pythonic",
    featured: true,
    category: "education",
  },
  {
    name: "Photo Vault",
    description:
      "Sleek cross-platform gallery app for local photo management with futuristic UI",
    tech: ["Dart", "Flutter", "Provider"],
    url: "https://github.com/Joshua07q/photo_vault",
    featured: true,
    category: "mobile",
  },
  {
    name: "THERA",
    description:
      "Hackathon-winning emotional AI companion providing empathetic mental health support through conversation",
    tech: ["Python", "AI/ML", "NLP"],
    url: "https://github.com/Joshua07q",
    featured: true,
    category: "ai",
  },
  {
    name: "SkillLink AI",
    description:
      "AI-powered voice and video coaching platform for personalized skill development",
    tech: ["TypeScript", "WebRTC", "AI/ML"],
    url: "https://github.com/Joshua07q/SkillLink-AI",
    featured: true,
    category: "ai",
  },
  {
    name: "SmartChecks",
    description:
      "AI-driven misinformation detection system promoting information integrity and peacebuilding",
    tech: ["Python", "NLP", "Machine Learning"],
    url: "https://github.com/Joshua07q/smartchecks",
    featured: true,
    category: "ai",
  },
  {
    name: "AMM Engine",
    description:
      "High-performance automated market maker engine and liquidity pool analyzer in Rust",
    tech: ["Rust", "DeFi", "Algorithms"],
    url: "https://github.com/Joshua07q/AMM_engine",
    featured: false,
    category: "systems",
  },
  {
    name: "VZTP",
    description:
      "Custom transport protocol implementation exploring low-level networking in Rust",
    tech: ["Rust", "Networking"],
    url: "https://github.com/Joshua07q/VZTP",
    featured: false,
    category: "systems",
  },
  {
    name: "OdLagna",
    description:
      "AI-infused browser extension for persistent memory and workflow management",
    tech: ["JavaScript", "Browser APIs", "AI"],
    url: "https://github.com/Joshua07q/OdLagna",
    featured: false,
    category: "extension",
  },
  {
    name: "Campus Pulse",
    description:
      "Campus community engagement platform with waitlist and early access system",
    tech: ["TypeScript", "Next.js", "React"],
    url: "https://github.com/Joshua07q/Campus-Pulse-waitlist",
    featured: false,
    category: "platform",
  },
  {
    name: "pdf-redactor",
    description: "API service for secure and automated PDF document redaction",
    tech: ["Python", "FastAPI", "PDF Processing"],
    url: "https://github.com/Joshua07q/pdf-redactor",
    featured: false,
    category: "backend",
  },
  {
    name: "House Hunters",
    description:
      "Platform and bot helping students find affordable housing near campus",
    tech: ["JavaScript", "Node.js", "Bot"],
    url: "https://github.com/Joshua07q/house-hunters",
    featured: false,
    category: "platform",
  },
];

export const experience = [
  {
    company: "KARMA Groups",
    role: "Co-Founder & AI Engineer",
    period: "2024 — Present",
    highlights: [
      "Built hallucination & bias detection systems for production LLMs",
      "Designed agent-based AI architectures with structured configs",
      "Integrated high-speed inference (Groq LPU) in production",
      "Containerized AI services with Docker for reliable deployment",
      "Led dev teams, defined milestones, shipped on time",
    ],
  },
  {
    company: "UniNav",
    role: "Engineer",
    period: "2025 — Present",
    highlights: [
      "Building uninav.live — campus navigation and student utility platform",
      "Full-stack development with Next.js and TypeScript",
      "Designing scalable infrastructure for university-wide adoption",
    ],
  },
  {
    company: "DeepFunding AI",
    role: "AI Systems Developer",
    period: "2024 (9 months)",
    highlights: [
      "Built frameworks for evaluating language model outputs",
      "Contributed to decentralized AI tooling and proposals",
      "Tested and validated blockchain-integrated AI systems",
    ],
  },
  {
    company: "Independent",
    role: "AI/ML & Software Engineer",
    period: "2022 — Present",
    highlights: [
      "Architected AI training and evaluation infrastructure",
      "Fine-tuned language models for reliability and accuracy",
      "Collaborated with global teams on open-source initiatives",
    ],
  },
];

export const education = {
  degree: "B.Sc. Statistics",
  school: "University of Ibadan",
  period: "2023 — 2027",
  status: "In Progress",
  coursework: [
    "Probability",
    "Statistical Inference",
    "Data Analysis",
    "ML Fundamentals",
  ],
};
