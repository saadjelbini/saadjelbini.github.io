export const siteConfig = {
  name: "Saad Jelbini",
  title: "AI Engineer · I build AI agents, RAG systems and ERP automations that run in production",
  description:
    "Saad Jelbini, freelance AI engineer: AI agents, MCP servers connected to ERPs, RAG systems and document automation for businesses.",
  accentColor: "#2446D6",
  // Photo placed in public/profile.jpg
  photo: "profile.jpg",
  greeting: "Freelance AI Engineer",
  social: {
    email: "saadjelbini54@gmail.com",
    linkedin: "https://www.linkedin.com/in/saad-jelbini-a005b4218",
    github: "https://github.com/saadjelbini",
  },
  aboutMe:
    "I'm an engineer with a dual degree from École Centrale Casablanca and École Centrale Méditerranée, specialized in data science and NLP. In my full-time role I work as a Forward Deployed AI Engineer: I build AI systems for companies end to end: scoping with business teams, development, deployment and user training. I have shipped RAG assistants for EDF, NLP pipelines for Orange, and AI agents connected to ERPs for SMEs. I work in English and French and ship software that runs in production.",
  skills: [
    "AI Agents",
    "MCP Servers",
    "RAG & LLMs",
    "LangChain / LangGraph",
    "ERPNext / Frappe",
    "Document AI (PDF, OCR)",
    "Python",
    "FastAPI",
    "React",
    "n8n",
    "Docker & CI/CD",
    "GCP / Vertex AI",
    "Azure Databricks",
    "Computer Vision",
    "NLP",
  ],
  projects: [
    {
      tag: "Freelance · ERP + AI",
      name: "MCP server connecting AI assistants to an ERP",
      description:
        "An MCP server that lets Claude and other AI assistants read and act on ERPNext: sales, purchasing, stock, accounting, HR and projects, through natural-language requests. Write actions require explicit user confirmation.",
      video: "",
      link: "",
      skills: ["MCP", "ERPNext", "Python", "LLM Agents"],
    },
    {
      tag: "Freelance · Commercial SaaS",
      name: "Payment-terms compliance platform",
      description:
        "A platform that computes supplier payment delays from invoice data and produces the reports companies need for regulatory compliance. Built end to end and sold to paying customers.",
      video: "",
      link: "",
      skills: ["Python", "FastAPI", "React", "Docker"],
    },
    {
      tag: "Client project · Finance",
      name: "Financial analysis platform for a consulting firm",
      description:
        "Automatic extraction of tax filings from PDF, multi-sheet Excel generation (income statement, balance sheet), custom PowerPoint decks, financial projections from client meetings, and a RAG chat over all documents.",
      video: "",
      link: "",
      skills: ["Python", "FastAPI", "React", "Gemini", "RAG", "GCP"],
    },
    {
      tag: "EDF · Enterprise",
      name: "RAG assistant over 10 GB of technical documentation",
      description:
        "RAG system on Mistral 7B for 500+ engineers: semantic chunking, FAISS search under 200 ms, Streamlit interface with user feedback. 70% accuracy validated by domain experts.",
      video: "",
      link: "",
      skills: ["Mistral 7B", "FAISS", "RAG", "Azure Databricks"],
    },
    {
      tag: "Orange · Enterprise",
      name: "Weak-signal detection in customer conversations",
      description:
        "Analysis of 100k+ customer conversations per month with BERT embeddings and HDBSCAN clustering, industrialized with Docker and CI/CD and monitored in production dashboards.",
      video: "",
      link: "",
      skills: ["BERT", "HDBSCAN", "Vertex AI", "FastAPI"],
    },
    {
      tag: "Volta Medical · Healthcare",
      name: "GDPR-compliant anonymization of surgical videos",
      description:
        "Detection, segmentation and tracking of sensitive elements in operating-room video. Inference optimized with OpenVINO: one hour of video processed in 15 minutes.",
      video: "",
      link: "",
      skills: ["YOLO", "OpenCV", "OCR", "OpenVINO"],
    },
  ],
  experience: [
    {
      company: "Freelance",
      title: "AI Engineer & Consultant",
      dateRange: "Ongoing",
      bullets: [
        "MCP server connecting AI assistants to ERPNext",
        "Payment-terms compliance platform, sold to paying customers",
      ],
    },
    {
      company: "Wineo Intelligence Artificielle",
      title: "Forward Deployed AI Engineer (FDE) · Casablanca",
      dateRange: "Oct 2025 - Present",
      bullets: [
        "Work as a Forward Deployed Engineer: embedded with client teams to turn their real workflows into AI systems running in production",
        "End-to-end client delivery: requirements, specifications, development, deployment and training",
        "Financial analysis platform: tax filings from PDF to Excel, PowerPoint and projections",
        "AI modules for ERPNext: purchase-invoice scanner automating accounting",
      ],
    },
    {
      company: "Orange",
      title: "Data Scientist · Lannion, France",
      dateRange: "Mar 2025 - Oct 2025",
      bullets: [
        "Analysis platform for 100k+ conversations per month to detect weak signals and anomalies",
        "MLOps industrialization (Docker, CI/CD) with automated monitoring",
      ],
    },
    {
      company: "EDF",
      title: "Data Scientist · AI Developer · Tours, France",
      dateRange: "Mar 2024 - Aug 2024",
      bullets: [
        "RAG system over 10 GB of documentation for 500+ users",
        "Vector search under 200 ms, 70% accuracy validated by experts",
      ],
    },
    {
      company: "Airbus Helicopters",
      title: "AI Hackathon · NLP · Nice, France",
      dateRange: "Mar 2024 - Apr 2024",
      bullets: ["Fine-tuned PEGASUS-XSum for contract summarization (ROUGE-L 0.45)"],
    },
    {
      company: "Volta Medical",
      title: "Data Scientist · Computer Vision · Nice, France",
      dateRange: "Jan 2024 - Mar 2024",
      bullets: ["Surgical video anonymization, inference 4x faster with OpenVINO"],
    },
  ],
  education: [
    {
      school: "École Centrale Méditerranée",
      degree: "MSc Data Science",
      dateRange: "2023 - 2024",
      achievements: ["NLP, Deep Learning, LLMs, Big Data (Hadoop, Spark)"],
    },
    {
      school: "École Centrale Casablanca",
      degree: "Engineering degree, Data Science",
      dateRange: "2021 - 2025",
      achievements: ["Machine Learning, Data Science, Econometrics"],
    },
  ],
};
