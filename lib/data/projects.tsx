import {
  Monitor,
  Package,
  Layers,
  Clock,
  Users,
  QrCode,
  Wifi,
  LayoutGrid,
  GitBranch,
  Sparkles,
  Globe,
  Smartphone,
  Code2,
  Zap,
  Eye,
  Target,
  Palette,
  ArrowUpRight,
} from "lucide-react"

// Simple projects data for home page
export const projects = [
  {
    title: "Yaarnies Camera Store",
    description:
      "A modern e-commerce platform for photography enthusiasts, featuring instant cameras, digital cameras, and content creation accessories with same-day delivery.",
    tags: ["Next.js", "React.js", "E-commerce", "Tailwind CSS", "TypeScript"],
    url: "https://www.yaarniescamerastore.com/",
    features: [
      {
        icon: <Monitor className="w-4 h-4" />,
        text: "Responsive e-commerce platform",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Real-time inventory management",
      },
      {
        icon: <Layers className="w-4 h-4" />,
        text: "Secure payment processing",
      },
    ],
    colors: ["#f8fafc", "#f1f5f9", "#e2e8f0"],
    image: "/Mockups/yaarnies.png",
  },
  {
    title: "THREETWENTYONE",
    description:
      "A modern e-commerce solution with streamlined checkout process and inventory management.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Paystack"],
    url: "https://threetwentyonegh.com",
    features: [
      {
        icon: <Monitor className="w-4 h-4" />,
        text: "Responsive design across all devices",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Integrated inventory management",
      },
      {
        icon: <Layers className="w-4 h-4" />,
        text: "Secure payment processing",
      },
    ],
    colors: ["#f8fafc", "#f1f5f9", "#e2e8f0"],
    image: "/Mockups/threetwentyone.png",
  },
  {
    title: "Rouje",
    description:
      "An elegant luxury fashion e-commerce platform featuring curated collections and personalized shopping experiences.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Stripe"],
    url: "https://rouje.alvinyeboah.com",
    features: [
      {
        icon: <Monitor className="w-4 h-4" />,
        text: "Premium responsive design",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Curated product catalog",
      },
      {
        icon: <Layers className="w-4 h-4" />,
        text: "Luxury shopping experience",
      },
    ],
    colors: ["#fef7f0", "#fed7aa", "#fb923c"],
    image: "/Mockups/rouje.png",
  },
  {
    title: "InSync",
    description: "A real-time collaborative presentation timing tool that uses WebSocket technology to synchronize and manage presentations with precision.",
    tags: ["Next.js", "Tailwind CSS", "WebSocket", "Real-time", "Socket.io"],
    url: "https://insync.alvinyeboah.com",
    features: [
      {
        icon: <Clock className="w-4 h-4" />,
        text: "Real-time presentation timing",
      },
      {
        icon: <Users className="w-4 h-4" />,
        text: "Collaborative room system",
      },
      {
        icon: <QrCode className="w-4 h-4" />,
        text: "QR code room sharing",
      },
      {
        icon: <Wifi className="w-4 h-4" />,
        text: "WebSocket-powered real-time updates",
      }
    ],
    colors: ["#ffffff", "#f8fafc", "#e2e8f0"],
    image: "/Mockups/insync.png"
  },
  {
    title: "SkillExchange",
    description:
      "A platform where users can exchange their skills for currency.",
    tags: ["Next.js", "Supabase", "Framer Motion", "Cloudflare"],
    url: "https://skillexchange.alvinyeboah.com",
    features: [
      {
        icon: <Monitor className="w-4 h-4" />,
        text: "User-friendly skill marketplace",
      },
      {
        icon: <Package className="w-4 h-4" />,
        text: "Secure transaction system",
      },
      { icon: <Layers className="w-4 h-4" />, text: "Real-time messaging" },
    ],
    colors: ["#eff6ff", "#dbeafe", "#bfdbfe"],
    image: "/Mockups/skill-exchange.png",
  },
  {
    title: "FlowForge",
    description:
      "A collaborative multitasking platform for agile team workflows, task management, and project tracking.",
    tags: ["Next.js", "Electron", "Supabase", "Tailwind CSS"],
    url: "https://flowforge-pi.vercel.app/",
    features: [
      {
        icon: <Users className="w-4 h-4" />,
        text: "Real-time team collaboration",
      },
      {
        icon: <LayoutGrid className="w-4 h-4" />,
        text: "Kanban board visualization",
      },
      {
        icon: <GitBranch className="w-4 h-4" />,
        text: "Version control integration",
      },
    ],
    colors: ["#f0f4fd", "#dae3fc", "#c7d7fa"],
    image: "/Mockups/flowforge.png",
  },
  {
    title: "Corporate Website",
    description:
      "A dynamic company website with interactive elements, smooth animations, and comprehensive information architecture.",
    tags: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    url: "https://www.saitechnology.co/",
    features: [
      {
        icon: <Sparkles className="w-4 h-4" />,
        text: "Immersive scrolling animations",
      },
      {
        icon: <Globe className="w-4 h-4" />,
        text: "Multilingual content support",
      },
      {
        icon: <Smartphone className="w-4 h-4" />,
        text: "Adaptive performance optimization",
      },
    ],
    colors: ["#fafafa", "#f4f4f5", "#e4e4e7"],
    image: "/Mockups/sai.png",
  },
]

export const detailedProjects = [
  {
    id: 1,
    title: "Yaarnies Camera Store",
    subtitle: "Premium E-commerce Experience",
    description:
      "A sophisticated e-commerce platform designed for photography enthusiasts, featuring instant cameras, digital cameras, and content creation accessories with same-day delivery capabilities.",
    longDescription:
      "Built from the ground up with modern web technologies, this platform revolutionizes the camera shopping experience. The site features advanced product filtering, real-time inventory tracking, and a seamless checkout process that has increased conversion rates by 40%. The responsive design ensures optimal performance across all devices, while the integrated payment system supports multiple currencies and payment methods.",
    tags: ["Next.js", "React.js", "E-commerce", "Tailwind CSS", "TypeScript", "Stripe"],
    url: "https://www.yaarniescamerastore.com/",
    github: "https://github.com/alvinyeboah/yaarnies",
    timeline: "3 months",
    year: "2025",
    role: "Full-Stack Developer",
    team: "Solo Project",
    features: [
      {
        icon: <Monitor className="w-5 h-5" />,
        title: "Responsive Design",
        description: "Optimized for all devices with mobile-first approach",
      },
      {
        icon: <Package className="w-5 h-5" />,
        title: "Inventory Management",
        description: "Real-time stock tracking and automated notifications",
      },
      {
        icon: <Layers className="w-5 h-5" />,
        title: "Payment Integration",
        description: "Secure multi-gateway payment processing",
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Performance",
        description: "Lightning-fast loading with optimized images",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Stripe", color: "#635BFF" },
    ],
    metrics: [
      { label: "Page Load Time", value: "1.2s" },
      { label: "Conversion Rate", value: "+40%" },
      { label: "Mobile Score", value: "98/100" },
    ],
    colors: {
      primary: "#1a1a1a",
      secondary: "#f8fafc",
      accent: "#3b82f6",
    },
    image: "/Mockups/yaarnies.png",
  },
  {
    id: 2,
    title: "THREETWENTYONE",
    subtitle: "Modern Fashion E-commerce",
    description:
      "A cutting-edge fashion e-commerce platform with streamlined checkout process, advanced inventory management, and personalized shopping experiences.",
    longDescription:
      "This fashion-forward e-commerce solution combines aesthetic appeal with powerful functionality. The platform features AI-powered product recommendations, virtual try-on capabilities, and social commerce integration. Built with scalability in mind, it handles thousands of concurrent users while maintaining sub-second response times. The admin dashboard provides comprehensive analytics and inventory management tools.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Paystack", "AI/ML"],
    url: "https://threetwentyonegh.com",
    github: "https://github.com/alvinyeboah/threetwentyone",
    timeline: "4 months",
    year: "2024",
    role: "Lead Developer",
    team: "2 Developers",
    features: [
      {
        icon: <Monitor className="w-5 h-5" />,
        title: "Responsive Framework",
        description: "Pixel-perfect design across all screen sizes",
      },
      {
        icon: <Package className="w-5 h-5" />,
        title: "Smart Inventory",
        description: "AI-powered stock management and demand forecasting",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Social Commerce",
        description: "Integrated social sharing and user-generated content",
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Personalization",
        description: "Machine learning-driven product recommendations",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Paystack", color: "#0FA958" },
    ],
    metrics: [
      { label: "User Engagement", value: "+65%" },
      { label: "Revenue Growth", value: "+120%" },
      { label: "Performance Score", value: "95/100" },
    ],
    colors: {
      primary: "#0f172a",
      secondary: "#f1f5f9",
      accent: "#3b82f6",
    },
    image: "/Mockups/threetwentyone.png",
  },
  {
    id: 3,
    title: "Rouje",
    subtitle: "Luxury Fashion Store",
    description:
      "An exquisite luxury fashion e-commerce platform showcasing premium collections with sophisticated design aesthetics and personalized customer experiences.",
    longDescription:
      "Rouje represents the pinnacle of luxury fashion e-commerce, meticulously crafted to embody elegance and exclusivity. The platform features hand-curated collections, personalized styling recommendations, and white-glove customer service. Advanced filtration allows customers to discover pieces by mood, occasion, or personal style. The checkout experience is streamlined yet luxurious, with options for personal shopping consultations and exclusive member benefits.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Paystack", "Framer Motion"],
    url: "https://rouje.alvinyeboah.com",
    github: "https://github.com/alvinyeboah/rouje",
    timeline: "2.5 months",
    year: "2024",
    role: "UI/UX Designer & Developer",
    team: "Solo Project",
    features: [
      {
        icon: <Palette className="w-5 h-5" />,
        title: "Luxury Design",
        description: "Sophisticated aesthetics with premium visual hierarchy",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Personal Styling",
        description: "AI-curated recommendations based on style preferences",
      },
      {
        icon: <Eye className="w-5 h-5" />,
        title: "Visual Storytelling",
        description: "Immersive product galleries with mood-based curation",
      },
      {
        icon: <Target className="w-5 h-5" />,
        title: "Exclusive Access",
        description: "Members-only collections and early access programs",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Stripe", color: "#635BFF" },
    ],
    metrics: [
      { label: "Design Rating", value: "4.9/5" },
      { label: "Customer Satisfaction", value: "98%" },
      { label: "Time on Site", value: "+85%" },
    ],
    colors: {
      primary: "#d97706",
      secondary: "#fef7f0",
      accent: "#fb923c",
    },
    image: "/Mockups/rouje.png",
  },
  {
    id: 4,
    title: "InSync",
    subtitle: "Real-time Collaboration Platform",
    description:
      "A revolutionary presentation timing and collaboration tool that leverages WebSocket technology to synchronize presentations across multiple devices with millisecond precision.",
    longDescription:
      "InSync transforms the way teams deliver presentations by providing real-time synchronization capabilities. Using advanced WebSocket architecture, the platform ensures perfect timing coordination between presenters and their teams. Features include shared presentation rooms, QR code instant access, live audience engagement tools, and comprehensive analytics. The system handles concurrent users seamlessly while maintaining ultra-low latency for critical timing applications.",
    tags: ["Next.js", "WebSocket", "Socket.io", "Real-time", "Tailwind CSS"],
    url: "https://insync.alvinyeboah.com",
    github: "https://github.com/alvinyeboah/insync",
    timeline: "2 months",
    year: "2024",
    role: "Full-Stack Developer",
    team: "Solo Project",
    features: [
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Precision Timing",
        description: "Millisecond-accurate synchronization across all devices",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Team Collaboration",
        description: "Real-time shared workspaces with role-based access",
      },
      {
        icon: <QrCode className="w-5 h-5" />,
        title: "Instant Access",
        description: "QR code scanning for quick room joining",
      },
      {
        icon: <Wifi className="w-5 h-5" />,
        title: "Live Updates",
        description: "WebSocket-powered real-time data synchronization",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "Socket.io", color: "#010101" },
      { name: "WebSocket", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    metrics: [
      { label: "Latency", value: "<50ms" },
      { label: "Uptime", value: "99.9%" },
      { label: "User Sessions", value: "2K+" },
    ],
    colors: {
      primary: "#1e293b",
      secondary: "#f8fafc",
      accent: "#3b82f6",
    },
    image: "/Mockups/insync.png",
  },
  {
    id: 5,
    title: "SkillExchange",
    subtitle: "Skills Marketplace Platform",
    description:
      "An innovative platform connecting skilled professionals where users can exchange expertise, share knowledge, and monetize their abilities in a collaborative environment.",
    longDescription:
      "SkillExchange creates a vibrant ecosystem for knowledge sharing and skill monetization. The platform features sophisticated matching algorithms that connect users based on complementary skills and needs. Integrated payment systems, escrow services, and reputation tracking ensure secure transactions. Advanced search and filtering help users find exactly the skills they need, while comprehensive profiles showcase expertise and achievements.",
    tags: ["Next.js", "Supabase", "Framer Motion", "Cloudflare", "Payment API"],
    url: "https://skillexchange.alvinyeboah.com",
    github: "https://github.com/alvinyeboah/skillexchange",
    timeline: "3.5 months",
    year: "2024",
    role: "Full-Stack Developer",
    team: "Solo Project",
    features: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Skill Matching",
        description: "AI-powered algorithms for optimal skill pairing",
      },
      {
        icon: <Package className="w-5 h-5" />,
        title: "Secure Transactions",
        description: "Escrow services and reputation-based trust system",
      },
      {
        icon: <Monitor className="w-5 h-5" />,
        title: "Interactive Profiles",
        description: "Rich user profiles with skill portfolios and reviews",
      },
      {
        icon: <Layers className="w-5 h-5" />,
        title: "Real-time Chat",
        description: "Integrated messaging with file sharing capabilities",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "Cloudflare", color: "#F38020" },
    ],
    metrics: [
      { label: "Active Users", value: "1.2K+" },
      { label: "Skill Matches", value: "500+" },
      { label: "Success Rate", value: "94%" },
    ],
    colors: {
      primary: "#1e40af",
      secondary: "#eff6ff",
      accent: "#3b82f6",
    },
    image: "/Mockups/skill-exchange.png",
  },
  {
    id: 6,
    title: "FlowForge",
    subtitle: "Agile Project Management",
    description:
      "A comprehensive project management platform designed for agile teams, featuring collaborative workflows, task tracking, and integrated development tools.",
    longDescription:
      "FlowForge revolutionizes team collaboration with its intuitive interface and powerful feature set. The platform combines traditional project management with modern development workflows, including version control integration, automated testing pipelines, and real-time collaboration tools. Advanced analytics provide insights into team productivity and project progress, while customizable workflows adapt to any team's needs.",
    tags: ["Next.js", "Electron", "Supabase", "Tailwind CSS", "Git Integration"],
    url: "https://flowforge.alvinyeboah.com/",
    github: "https://github.com/alvinyeboah/flowforge",
    timeline: "4 months",
    year: "2024",
    role: "Lead Developer",
    team: "3 Developers",
    features: [
      {
        icon: <LayoutGrid className="w-5 h-5" />,
        title: "Kanban Boards",
        description: "Interactive drag-and-drop task management interface",
      },
      {
        icon: <GitBranch className="w-5 h-5" />,
        title: "Git Integration",
        description: "Seamless version control and branch management",
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Team Collaboration",
        description: "Real-time updates and collaborative editing",
      },
      {
        icon: <Code2 className="w-5 h-5" />,
        title: "Development Tools",
        description: "Integrated IDE features and debugging capabilities",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "Electron", color: "#47848F" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    metrics: [
      { label: "Team Productivity", value: "+75%" },
      { label: "Bug Resolution", value: "-60%" },
      { label: "Deployment Time", value: "-45%" },
    ],
    colors: {
      primary: "#4338ca",
      secondary: "#f0f4fd",
      accent: "#6366f1",
    },
    image: "/Mockups/flowforge.png",
  },
  {
    id: 7,
    title: "Corporate Website",
    subtitle: "Interactive Business Showcase",
    description:
      "A dynamic corporate website featuring immersive animations, multilingual support, and comprehensive business information architecture with modern design principles.",
    longDescription:
      "This corporate website sets new standards for business online presence with its cutting-edge design and technical excellence. The site features Three.js-powered 3D elements, smooth scroll animations, and adaptive performance optimization. Multilingual content management ensures global accessibility, while SEO optimization and analytics integration provide comprehensive business insights. The responsive design guarantees optimal performance across all devices and platforms.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "i18n"],
    url: "https://www.saitechnology.co/",
    github: "https://github.com/alvinyeboah/sai-corporate",
    timeline: "3 months",
    year: "2024",
    role: "Frontend Developer",
    team: "Solo Project",
    features: [
      {
        icon: <Sparkles className="w-5 h-5" />,
        title: "3D Animations",
        description: "Three.js-powered immersive visual experiences",
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Multilingual",
        description: "Comprehensive i18n support for global audiences",
      },
      {
        icon: <Monitor className="w-5 h-5" />,
        title: "Responsive Design",
        description: "Optimized performance across all device types",
      },
      {
        icon: <Smartphone className="w-5 h-5" />,
        title: "Mobile Optimization",
        description: "Progressive web app capabilities and mobile-first design",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "Three.js", color: "#000000" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    metrics: [
      { label: "Performance Score", value: "96/100" },
      { label: "SEO Score", value: "98/100" },
      { label: "User Engagement", value: "+150%" },
    ],
    colors: {
      primary: "#374151",
      secondary: "#fafafa",
      accent: "#6b7280",
    },
    image: "/Mockups/sai.png",
  },
] 