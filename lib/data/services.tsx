import {
  Database,
  Mail,
  MessageSquare,
  Server,
  Shield,
  Zap,
  Clock,
  Globe,
  CheckCircle,
  Activity,
  Users,
  TrendingUp,
  HardDrive,
  Network,
  Lock,
  BarChart3,
  Smartphone,
  Monitor,
  Cloud,
  Eye,
  LineChart,
  AlertTriangle,
  Target,
  Gauge,
  Timer,
  Palette,
  FileText,
  Settings,
  Headphones,
  Rocket,
  Layers,
  PaintBucket,
} from "lucide-react"
import { FaWordpress } from "react-icons/fa";


export const services = [
  {
    id: 1,
    title: "WordPress Hosting",
    subtitle: "Professional WordPress Solutions",
    description:
      "Fast, secure, and fully managed WordPress hosting with one-click installation, automatic updates, and premium themes. Perfect for blogs, business sites, and e-commerce.",
    longDescription:
      "Our WordPress hosting platform is optimized specifically for WordPress sites with lightning-fast SSD storage, automatic daily backups, and one-click staging environments. Includes free SSL certificates, CDN integration, and 24/7 expert support.",
    url: "https://nexus.alvinyeboah.com",
    icon: <FaWordpress className="w-12 h-12" />,
    features: [
      {
        icon: <Rocket className="w-6 h-6" />,
        title: "Lightning Fast",
        description: "SSD storage, caching, and CDN for optimal performance",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Auto Security Updates",
        description: "Automatic WordPress core and plugin security updates",
      },
      {
        icon: <FileText className="w-6 h-6" />,
        title: "Free SSL & Domain",
        description: "Free SSL certificate and temporary domain included",
      },
      {
        icon: <Headphones className="w-6 h-6" />,
        title: "Expert Support",
        description: "24/7 WordPress specialist support and guidance",
      },
    ],
    metrics: [
      { label: "Load Time", value: "<2s" },
      { label: "Uptime", value: "99.9%" },
      { label: "Storage", value: "1GB+" },
    ],
    pricing: {
      starting: "₵30",
      period: "month",
      features: ["1GB+ Storage", "Free SSL", "Temporary Domain", "Daily Backups"],
      tiers: [
        {
          name: "Basic",
          price: "₵30",
          features: ["1 Website", "1GB Storage", "Free SSL", "Temporary Domain", "Daily Backups", "Basic Support"]
        },
        {
          name: "Pro",
          price: "₵80",
          features: ["3 Websites", "5GB Storage", "Custom Domain", "Elementor Pro", "Premium Themes", "Priority Support"]
        },
        {
          name: "Business",
          price: "₵160",
          features: ["10 Websites", "20GB Storage", "WooCommerce", "Advanced Security", "White-label", "Phone Support"]
        }
      ]
    },
    color: {
      primary: "#21759b",
      secondary: "#e8f4f8",
      gradient: "from-blue-600 to-blue-700",
    },
    visualElements: [
      { icon: <FaWordpress className="w-8 h-8" />, position: { top: "20%", left: "15%" } },
      { icon: <Palette className="w-6 h-6" />, position: { top: "60%", right: "20%" } },
      { icon: <Layers className="w-7 h-7" />, position: { bottom: "30%", left: "25%" } },
      { icon: <Settings className="w-6 h-6" />, position: { top: "40%", right: "15%" } },
    ],
    stats: {
      label: "Sites Hosted",
      value: "850+",
      trend: "+25% this month",
    },
    available: true,
  },
  {
    id: 2,
    title: "Website Monitoring & Analytics",
    subtitle: "Real-time Performance Tracking",
    description:
      "Comprehensive website monitoring and analytics platform that tracks uptime, performance metrics, user behavior, and provides actionable insights to optimize your web presence.",
    longDescription:
      "Advanced monitoring solution that combines uptime tracking, performance monitoring, and detailed analytics. Get real-time alerts for downtime, slow response times, and errors. Track user interactions, conversion funnels, and business metrics with detailed reports and custom dashboards.",
    url: "https://nexus.alvinyeboah.com",
    icon: <Eye className="w-12 h-12" />,
    features: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: "Uptime Monitoring",
        description: "24/7 monitoring with instant alerts for downtime and performance issues",
      },
      {
        icon: <LineChart className="w-6 h-6" />,
        title: "Performance Analytics",
        description: "Detailed insights on page load times, user engagement, and conversion rates",
      },
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Smart Alerts",
        description: "Customizable notifications via SMS, email, and webhooks for critical events",
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Goal Tracking",
        description: "Monitor conversions, form submissions, and custom business objectives",
      },
    ],
    metrics: [
      { label: "Check Frequency", value: "30 seconds" },
      { label: "Data Retention", value: "2 years" },
      { label: "Response Time", value: "<500ms" },
    ],
    pricing: {
      starting: "₵20",
      period: "month",
      features: ["5 Websites", "Real-time Alerts", "Custom Reports", "API Access"],
      tiers: [
        {
          name: "Starter",
          price: "₵20",
          features: ["2 Websites", "Uptime Monitoring", "Email Alerts", "Basic Analytics", "1-minute checks"]
        },
        {
          name: "Pro",
          price: "₵40",
          features: ["10 Websites", "Performance Monitoring", "SMS Alerts", "Advanced Analytics", "30-second checks"]
        },
        {
          name: "Enterprise",
          price: "₵80",
          features: ["Unlimited Sites", "Custom Dashboards", "API Access", "White-label Reports", "15-second checks"]
        }
      ]
    },
    color: {
      primary: "#f59e0b",
      secondary: "#fef3c7",
      gradient: "from-amber-500 to-amber-600",
    },
    visualElements: [
      { icon: <Gauge className="w-8 h-8" />, position: { top: "25%", left: "20%" } },
      { icon: <LineChart className="w-7 h-7" />, position: { top: "50%", right: "25%" } },
      { icon: <Timer className="w-6 h-6" />, position: { bottom: "25%", left: "30%" } },
      { icon: <Target className="w-6 h-6" />, position: { top: "35%", right: "15%" } },
    ],
    stats: {
      label: "Sites Monitored",
      value: "450+",
      trend: "99.96% uptime",
    },
    available: true,
  },
  {
    id: 3,
    title: "PostgreSQL Database",
    subtitle: "Enterprise-Grade Database Hosting",
    description:
      "Reliable, scalable PostgreSQL database hosting with high availability, automated backups, and enterprise-level security for mission-critical applications.",
    longDescription:
      "Our PostgreSQL hosting service provides enterprise-grade database solutions with 99.9% uptime guarantee. Built on high-performance SSD storage with automated daily backups, point-in-time recovery, and advanced monitoring. Perfect for applications requiring robust data integrity and scalability.",
    url: "https://nexus.alvinyeboah.com",
    icon: <Database className="w-12 h-12" />,
    features: [
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise Security",
        description: "End-to-end encryption, SSL/TLS protocols, and advanced access controls",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "High Performance",
        description: "SSD storage, optimized queries, and sub-millisecond response times",
      },
      {
        icon: <Server className="w-6 h-6" />,
        title: "99.9% Uptime SLA",
        description: "Guaranteed availability with automated failover and monitoring",
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Automated Backups",
        description: "Daily backups with point-in-time recovery and instant restoration",
      },
    ],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Response Time", value: "<50ms" },
      { label: "Storage", value: "Up to 1TB" },
    ],
    pricing: {
      starting: "₵100-300",
      period: "month",
      features: ["5GB Storage", "Daily Backups", "SSL Encryption", "24/7 Support"],
    },
    color: {
      primary: "#3b82f6",
      secondary: "#eff6ff",
      gradient: "from-blue-500 to-blue-600",
    },
    visualElements: [
      { icon: <HardDrive className="w-8 h-8" />, position: { top: "20%", left: "15%" } },
      { icon: <Lock className="w-6 h-6" />, position: { top: "60%", right: "20%" } },
      { icon: <Activity className="w-7 h-7" />, position: { bottom: "30%", left: "25%" } },
      { icon: <Network className="w-6 h-6" />, position: { top: "40%", right: "15%" } },
    ],
    stats: {
      label: "Active Databases",
      value: "1,200+",
      trend: "+15% this month",
    },
    available: false,
  },
  {
    id: 4,
    title: "SMS Service",
    subtitle: "Global SMS API Platform",
    description:
      "Powerful SMS API for sending transactional and marketing messages worldwide with industry-leading delivery rates and comprehensive analytics.",
    longDescription:
      "Our SMS service provides global reach with local presence in 200+ countries. Built for developers with RESTful APIs, webhooks, and real-time delivery tracking. Whether you're sending OTP codes, notifications, or marketing campaigns, our platform ensures reliable delivery with detailed analytics.",
    url: "https://nexus.alvinyeboah.com",
    icon: <MessageSquare className="w-12 h-12" />,
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Coverage",
        description: "Send SMS to 200+ countries with local phone number support",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Instant Delivery",
        description: "Real-time message delivery with comprehensive status tracking",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Developer-First API",
        description: "RESTful API with SDKs, webhooks, and detailed documentation",
      },
      {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "99%+ Delivery Rate",
        description: "Industry-leading delivery rates with multiple carrier redundancy",
      },
    ],
    metrics: [
      { label: "Delivery Rate", value: "99.2%" },
      { label: "Countries", value: "200+" },
      { label: "API Uptime", value: "99.9%" },
    ],
    pricing: {
      starting: "₵0.30-0.80",
      period: "message",
      features: ["Global Coverage", "Real-time Tracking", "API Access", "Analytics Dashboard"],
    },
    color: {
      primary: "#10b981",
      secondary: "#ecfdf5",
      gradient: "from-green-500 to-green-600",
    },
    visualElements: [
      { icon: <Smartphone className="w-8 h-8" />, position: { top: "25%", left: "20%" } },
      { icon: <Globe className="w-7 h-7" />, position: { top: "50%", right: "25%" } },
      { icon: <BarChart3 className="w-6 h-6" />, position: { bottom: "25%", left: "30%" } },
      { icon: <TrendingUp className="w-6 h-6" />, position: { top: "35%", right: "15%" } },
    ],
    stats: {
      label: "Messages Sent",
      value: "2.5M+",
      trend: "This month",
    },
    available: false,
  },
  {
    id: 5,
    title: "Email Service",
    subtitle: "Professional Email Solutions",
    description:
      "Professional email hosting and transactional email API for seamless communication, marketing campaigns, and business correspondence.",
    longDescription:
      "Complete email solution combining professional hosting with powerful transactional email APIs. Features advanced spam protection, custom domain support, and detailed analytics. Perfect for businesses needing reliable email infrastructure with developer-friendly APIs for automated communications.",
    url: "https://nexus.alvinyeboah.com",
    icon: <Mail className="w-12 h-12" />,
    features: [
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Advanced Security",
        description: "Anti-spam protection, malware scanning, and encryption",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Fast Delivery",
        description: "Optimized infrastructure for instant email delivery",
      },
      {
        icon: <Server className="w-6 h-6" />,
        title: "Custom Domains",
        description: "Host emails on your domain with full DNS control",
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "24/7 Support",
        description: "Round-the-clock technical support and monitoring",
      },
    ],
    metrics: [
      { label: "Delivery Rate", value: "98.5%" },
      { label: "Spam Score", value: "<0.1%" },
      { label: "Support Response", value: "<2hrs" },
    ],
    pricing: {
      starting: "₵50-150",
      period: "month",
      features: ["Custom Domain", "10GB Storage", "API Access", "Priority Support"],
    },
    color: {
      primary: "#8b5cf6",
      secondary: "#f3f4f6",
      gradient: "from-purple-500 to-purple-600",
    },
    visualElements: [
      { icon: <Mail className="w-8 h-8" />, position: { top: "20%", left: "25%" } },
      { icon: <Monitor className="w-7 h-7" />, position: { top: "55%", right: "20%" } },
      { icon: <Cloud className="w-6 h-6" />, position: { bottom: "30%", left: "20%" } },
      { icon: <Users className="w-6 h-6" />, position: { top: "40%", right: "30%" } },
    ],
    stats: {
      label: "Emails Delivered",
      value: "850K+",
      trend: "99.8% success rate",
    },
    available: false,
  },
]