"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Clock,
  Code,
  ExternalLink,
  GitBranch,
  Github,
  Globe,
  Layers,
  LayoutGrid,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Package,
  QrCode,
  Smartphone,
  Sparkles,
  Users,
  Wifi,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

type StatusState = {
  submitting: boolean;
  submitted: boolean;
  error: string | null;
};

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Tech Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

const projects = [
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
    title: "InSync",
    description: "A real-time collaborative presentation timing tool that uses WebSocket technology to synchronize and manage presentations with precision.",
    tags: ["Next.js", "Tailwind CSS", "WebSocket", "Real-time", "Socket.io"],
    url: "https://insync-colab.vercel.app",
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
    url: "https://skillexchange.vercel.app",
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
];

const techStack = [
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
    color: "#F7DF1E",
    proficiency: 95,
    description: "Core language for web development",
  },
  {
    name: "React",
    icon: <ReactIcon />,
    color: "#61DAFB",
    proficiency: 90,
    description: "Library for building user interfaces",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    color: "#3178C6",
    proficiency: 85,
    description: "Typed superset of JavaScript",
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    color: "#339933",
    proficiency: 80,
    description: "JavaScript runtime for server-side code",
  },
  {
    name: "Next.js",
    icon: <NextJsIcon />,
    color: "#000000",
    proficiency: 85,
    description: "React framework for production",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />,
    color: "#06B6D4",
    proficiency: 90,
    description: "Utility-first CSS framework",
  },
  {
    name: "GraphQL",
    icon: <GraphQLIcon />,
    color: "#E10098",
    proficiency: 75,
    description: "API query language",
  },
  {
    name: "MongoDB",
    icon: <MongoDBIcon />,
    color: "#47A248",
    proficiency: 80,
    description: "NoSQL database",
  },
];

const experiences = [
  {
    period: "May 2025 - Present",
    title: "UX/UI Designer & Frontend Developer",
    company: "Mesika Limited",
    description:
      "Designed and implemented user interfaces for web and mobile applications using React.js and Node.js, ensuring intuitive and accessible experiences. Conducted user research, usability testing, and gathered feedback to inform and improve design decisions.",
    highlights: [
      "Created wireframes, interactive prototypes, and user flows",
      "Conducted user research and usability testing",
      "Implemented responsive interfaces with React.js and Node.js",
      "Wrote comprehensive software documentation with visual design illustrations",
    ],
  },
  {
    period: "2023 - Present",
    title: "Front End Developer",
    company: "SAI Technologies",
    description:
      "Developed and maintained dynamic, responsive web applications using Next.js and React.js. Implemented modern styling frameworks like Tailwind CSS to create scalable and reusable design components. Collaborated with back-end developers to integrate APIs and optimize front-end performance.",
    highlights: [
      "Built responsive interfaces with Next.js",
      "Created reusable component systems",
      "Optimized application performance",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    period: "2023 - Present",
    title: "Full Stack Developer",
    company: "THREETWENTYONE",
    description:
      "Worked solo on both front-end and back-end development to deliver high-quality,  web solutions, ensuring seamless user experiences and efficient workflows. Implemented and managed payment integrations, enabling secure and reliable transactions across multiple platforms.",
    highlights: [
      "Developed full-stack web applications",
      "Implemented secure payment systems",
      "Created CMS-driven solutions",
      "Managed entire project lifecycles",
    ],
  },
];

const education = [
  {
    period: "2022 - 2026",
    degree: "BSc Computer Science",
    institution: "Ashesi University",
    description:
      "Focusing on software engineering, algorithms, and data structures",
    courses: [
      "Advanced Algorithms",
      "Software Engineering",
      "Database Systems",
      "Web Development",
    ],
  },
  {
    period: "2018 - 2022",
    degree: "A Level Science, O Level Science",
    institution: "Ghana Christian High School",
    description: "Foundation in mathematics and sciences",
    courses: ["Mathematics", "Physics", "Computer Science", "Chemistry"],
  },
];

const approaches = [
  {
    number: "01",
    title: "Simplicity",
    description: "Focusing on what matters most to users",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 8V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M8 12H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Functionality",
    description: "Building intuitive and accessible interfaces",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Elegance",
    description: "Crafting visually refined experiences",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L16.5 7.5L12 12L7.5 7.5L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12L16.5 16.5L12 21L7.5 16.5L12 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<StatusState>({
    submitting: false,
    submitted: false,
    error: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      // Reset form on success
      setFormData({ name: "", email: "", message: "" });
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setStatus({
        submitting: false,
        submitted: false,
        error: errorMessage,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white font-light antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navigation />

      <main className="pt-16">
        <Section
          id="home"
          className="min-h-[calc(100vh-4rem)] flex items-center"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                className="mb-8 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-24 h-24 mx-auto border border-neutral-200 dark:border-neutral-700 rounded-full flex items-center justify-center relative overflow-hidden group">
                  <span className="text-3xl font-light relative z-10 transition-transform duration-300 group-hover:scale-0">
                    AY
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/0 dark:from-white/10 dark:to-white/0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <Code className="w-8 h-8" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="font-normal">Alvin Yeboah</span>
                <br />
                <span className="relative">
                  Creative Developer
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-black dark:bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              <motion.div
                className="flex flex-col items-center space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-neutral-700 dark:text-neutral-300 md:text-lg max-w-xl mx-auto">
                  Crafting digital experiences with clean code and minimal
                  aesthetics. Based in Accra, working globally.
                </p>

                <div className="flex space-x-4">
                  <Button
                    asChild
                    className="group rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                  >
                    <Link href="#projects">
                      View Projects
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="group rounded-full border-neutral-200 dark:border-neutral-700"
                  >
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    Scroll
                  </span>
                  <div className="w-0.5 h-12 bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden">
                    <motion.div
                      className="w-full h-1/2 bg-black dark:bg-white absolute top-0"
                      animate={{
                        top: ["0%", "100%"],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        <Section
          id="about"
          className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeading>About Me</SectionHeading>

            <div className="grid gap-12 md:grid-cols-12 items-start">
              <div className="md:col-span-7 lg:col-span-8">
                <div className="relative">
                  <motion.div
                    className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-black dark:border-white -mt-4 -ml-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="pl-6 pt-6">
                    <h3 className="text-2xl font-light mb-6">Hello there</h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        I&#39;m a passionate frontend developer with over 5
                        years of experience creating elegant and functional web
                        applications. My approach combines clean code
                        architecture with intuitive user interfaces, resulting
                        in memorable digital experiences.
                      </p>
                      <p>
                        Having worked with startups and established companies
                        alike, I bring a versatile skill set and adaptable
                        mindset to every project. I&#39;m particularly drawn to
                        minimal design that emphasizes content and
                        functionality, believing that simplicity often leads to
                        the most powerful user experiences.
                      </p>
                      <p>
                        When I&#39;m not coding, you&#39;ll find me watching
                        anime or playing video games.
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
                      <h4 className="text-lg font-medium mb-6">My approach</h4>
                      <div className="grid gap-6 sm:grid-cols-3">
                        {approaches.map((approach, index) => (
                          <ApproachCard
                            key={index}
                            approach={approach}
                            index={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-black dark:border-white -mb-4 -mr-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
              </div>

              <div className="md:col-span-5 lg:col-span-4 space-y-8">
                <div>
                  <h3 className="text-xl font-light mb-6 flex items-center">
                    <motion.span
                      className="w-6 h-0.5 bg-black dark:bg-white mr-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: 24 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    />
                    Experience
                  </h3>
                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <ExperienceCard
                        key={index}
                        experience={exp}
                        index={index}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-6 flex items-center">
                    <motion.span
                      className="w-6 h-0.5 bg-black dark:bg-white mr-3"
                      initial={{ width: 0 }}
                      whileInView={{ width: 24 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    />
                    Education
                  </h3>
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <EducationCard
                        key={index}
                        education={edu}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" className="py-20 md:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeading>Selected Projects</SectionHeading>

            <div className="grid gap-24">
              {[0, 1, 3, 4].map((projectIndex, displayIndex) => (
                <ProjectShowcase key={projectIndex} project={projects[projectIndex]} index={displayIndex} />
              ))}
            </div>

            <div className="text-center mt-16">
              <Button
                asChild
                className="group rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                <Link href="/projects">
                  View All Projects
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>

        <Section
          id="stack"
          className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-800"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeading>Tech Stack</SectionHeading>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center mb-12 text-neutral-700 dark:text-neutral-300">
                I work with a variety of modern technologies to build robust and
                performant applications. My core expertise lies in JavaScript
                frameworks with a focus on React and its ecosystem.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {techStack.map((tech, index) => (
                  <TechItem key={index} tech={tech} index={index} />
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact" className="py-20 md:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeading>Get In Touch</SectionHeading>

            <div className="max-w-5xl mx-auto">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-black dark:border-white -mt-2 -ml-2" />
                  <div className="p-6">
                    <h3 className="text-2xl font-light mb-6">
                      Let&#39;s collaborate
                    </h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-8">
                      I&#39;m currently available for freelance work and
                      exciting collaborations. If you have a project that needs
                      creative attention, feel free to reach out.
                    </p>

                    <div className="space-y-6">
                      <motion.a
                        href="mailto:alvinyeboah5@gmail.com"
                        className="flex items-center text-lg hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                          <Mail className="h-5 w-5" />
                        </div>
                        alvinyeboah5@gmail.com
                      </motion.a>

                      <div className="flex space-x-4">
                        <Link href="https://github.com/alvinyeboah">
                          <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-10 h-10 rounded-full border-neutral-200 dark:border-neutral-700 hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                            >
                              <Github className="h-5 w-5" />
                              <span className="sr-only">GitHub</span>
                            </Button>
                          </motion.div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/alvinyeboah/">
                          <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-10 h-10 rounded-full border-neutral-200 dark:border-neutral-700 hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                            >
                              <Linkedin className="h-5 w-5" />
                              <span className="sr-only">LinkedIn</span>
                            </Button>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-black dark:border-white -mb-2 -mr-2" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <h4 className="text-xl font-light mb-6">
                      Send me a message
                    </h4>
                    {status.submitted ? (
                      <div className="text-green-500 py-4">
                        Thank you for your message! I'll get back to you soon.
                      </div>
                    ) : (
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 py-3 rounded-lg transition-all"
                          disabled={status.submitting}
                        >
                          {status.submitting ? "Sending..." : "Send Message"}
                        </button>
                        {status.error && (
                          <div className="text-red-500 text-sm mt-2">
                            {status.error}
                          </div>
                        )}
                      </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-8 bg-neutral-900 dark:bg-black text-neutral-400">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link
                href="#home"
                className="text-xl font-light tracking-tighter text-white mb-4 block"
              >
                PORTFOLIO
              </Link>
              <p className="text-sm">© 2025 AKY. All rights reserved.</p>
            </div>

            <div>
              <p className="text-white text-sm font-medium mb-4">Navigation</p>
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-white text-sm font-medium mb-4">Contact</p>
              <div className="space-y-2">
                <a
                  href="mailto:alvinyeboah5@gmail.com"
                  className="text-sm block transition-colors hover:text-white"
                >
                  alvinyeboah5@gmail.com
                </a>
                <p className="text-sm">Accra, Ghana</p>
                <div className="flex space-x-4 mt-4">
                  <Link href="https://github.com/alvinyeboah">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-neutral-700 hover:border-white"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/alvinyeboah/">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8 rounded-full border-neutral-700 hover:border-white"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-16", className)}>
      {children}
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.h2
      ref={ref}
      className="text-3xl md:text-4xl font-light tracking-tighter mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.h2>
  );
}

function ApproachCard({ approach, index }: { approach: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="p-4 border border-transparent group-hover:border-neutral-200 dark:group-hover:border-neutral-700 rounded-lg transition-all">
        <div className="flex justify-between items-center mb-3">
          <div className="text-3xl font-light text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
            {approach.number}
          </div>
          <motion.div
            className="text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            {approach.icon}
          </motion.div>
        </div>
        <h5 className="font-medium mb-1">{approach.title}</h5>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {approach.description}
        </p>
      </div>
    </motion.div>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative pl-6 pb-6 border-l border-neutral-200 dark:border-neutral-700  last:border-transparent last:pb-0"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <motion.div
        className="absolute top-0 left-[-5px] w-3 h-3  rounded-full bg-black dark:bg-white -translate-x-1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ scale: 1.5 }}
      />
      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
        {experience.period}
      </div>
      <div className="transition-all duration-300">
        <h4 className="font-medium">{experience.title}</h4>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-1">
          {experience.company}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {experience.description}
        </p>

        <div className="mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-medium flex items-center text-black dark:text-white hover:underline"
          >
            {isExpanded ? "Hide details" : "Show details"}
            <ChevronRight
              className={`ml-1 h-3 w-3 transition-transform ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-2 space-y-1 text-sm list-disc list-inside text-neutral-600 dark:text-neutral-400">
                  {experience.highlights.map((highlight: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function EducationCard({
  education,
  index,
}: {
  education: any;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative pl-6 pb-6 border-l border-neutral-200 dark:border-neutral-700 last:border-transparent last:pb-0"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
    >
      <motion.div
        className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-black dark:bg-white -translate-x-1.5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ scale: 1.5 }}
      />
      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
        {education.period}
      </div>
      <div className="transition-all duration-300">
        <h4 className="font-medium">{education.degree}</h4>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-1">
          {education.institution}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {education.description}
        </p>

        <div className="mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-medium flex items-center text-black dark:text-white hover:underline"
          >
            {isExpanded ? "Hide courses" : "Show courses"}
            <ChevronRight
              className={`ml-1 h-3 w-3 transition-transform ${
                isExpanded ? "rotate-90" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {education.courses.map((course: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectShowcase({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 relative">
          <div className="aspect-[16/9] relative overflow-hidden">
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={project.url}>
                {" "}
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-500 ease-out"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="md:col-span-5 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-medium">{project.title}</h3>
            <p className="text-neutral-700 dark:text-neutral-300 mt-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag: string, tagIndex: number) => (
                <span
                  key={tagIndex}
                  className="inline-block px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-sm font-medium">Key Features</h4>
              <div className="space-y-2">
                {project.features.map((feature: any, featureIndex: number) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center text-sm text-neutral-600 dark:text-neutral-400"
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + featureIndex * 0.1,
                    }}
                  >
                    <div className="mr-2 text-black dark:text-white">
                      {feature.icon}
                    </div>
                    {feature.text}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="link"
                  className="group p-0 h-auto font-normal text-black dark:text-white"
                >
                  View Project
                  <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function InteractiveMockup({
  mockup,
  colors,
  isHovered,
  mouseX,
  mouseY,
}: {
  mockup: any;
  colors: string[];
  isHovered: boolean;
  mouseX: any;
  mouseY: any;
}) {
  const rotateX = useTransform(mouseY, [0, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 500], [-5, 5]);

  const springConfig = { damping: 15, stiffness: 150 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  return (
    <motion.div
      className="w-full h-full bg-white dark:bg-neutral-900 relative"
      style={{
        rotateX: isHovered ? rotateXSpring : 0,
        rotateY: isHovered ? rotateYSpring : 0,
        transformStyle: "preserve-3d",
      }}
    >
      {mockup.type === "browser" && (
        <div className="absolute top-0 left-0 right-0 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-t-lg flex items-center px-3 space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-4 h-5 w-full max-w-xs bg-neutral-200 dark:bg-neutral-700 rounded-full" />
        </div>
      )}

      {mockup.type === "mobile" && (
        <div className="absolute top-0 left-0 right-0 h-6 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          <div className="w-20 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
        </div>
      )}

      <div
        className={`w-full h-full ${
          mockup.type === "browser"
            ? "pt-8"
            : mockup.type === "mobile"
            ? "pt-6"
            : ""
        } flex flex-col`}
      >
        {mockup.elements.map((element: any, index: number) => {
          const color = colors[index % colors.length];

          if (element.type === "header") {
            return (
              <motion.div
                key={index}
                className="w-full"
                style={{ height: element.height, backgroundColor: color }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            );
          }

          if (element.type === "hero") {
            return (
              <motion.div
                key={index}
                className="w-full flex items-center justify-center"
                style={{ height: element.height, backgroundColor: color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-1/2 h-1/2 bg-white dark:bg-neutral-800 rounded-lg flex items-center justify-center">
                  <div className="w-3/4 h-1/2 bg-neutral-200 dark:bg-neutral-700 rounded" />
                </div>
              </motion.div>
            );
          }

          if (element.type === "grid") {
            return (
              <motion.div
                key={index}
                className="w-full p-4"
                style={{ height: element.height, backgroundColor: color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-full h-full grid grid-cols-${element.columns} gap-4`}
                >
                  {Array.from({ length: element.columns }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-neutral-800 rounded-lg"
                    />
                  ))}
                </div>
              </motion.div>
            );
          }

          if (element.type === "content") {
            return (
              <motion.div
                key={index}
                className="w-full p-4"
                style={{ height: element.height, backgroundColor: color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-full flex flex-col space-y-2">
                  <div className="w-3/4 h-4 bg-white dark:bg-neutral-800 rounded" />
                  <div className="w-full h-4 bg-white dark:bg-neutral-800 rounded" />
                  <div className="w-5/6 h-4 bg-white dark:bg-neutral-800 rounded" />
                </div>
              </motion.div>
            );
          }

          if (element.type === "chart") {
            return (
              <motion.div
                key={index}
                className="w-full p-4"
                style={{ height: element.height, backgroundColor: color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-full bg-white dark:bg-neutral-800 rounded-lg flex items-end justify-around p-4">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1/12 bg-neutral-300 dark:bg-neutral-600 rounded-t"
                      style={{ height: `${20 + Math.random() * 60}%` }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>
            );
          }

          if (element.type === "list") {
            return (
              <motion.div
                key={index}
                className="w-full p-4"
                style={{ height: element.height, backgroundColor: color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-full flex flex-col space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-full h-10 bg-white dark:bg-neutral-800 rounded-lg flex items-center px-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 mr-3" />
                      <div className="w-3/4 h-3 bg-neutral-300 dark:bg-neutral-600 rounded" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          }

          if (element.type === "split") {
            return (
              <motion.div
                key={index}
                className="w-full flex"
                style={{ height: element.height, backgroundColor: color }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`w-[${
                    element.ratio * 100
                  }%] h-full bg-white dark:bg-neutral-800 p-4`}
                >
                  <div className="w-full h-full flex flex-col space-y-3">
                    <div className="w-3/4 h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                    <div className="w-full h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                    <div className="w-5/6 h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                  </div>
                </div>
                <div
                  className={`w-[${
                    (1 - element.ratio) * 100
                  }%] h-full flex items-center justify-center`}
                >
                  <div className="w-3/4 h-3/4 bg-white dark:bg-neutral-800 rounded-lg" />
                </div>
              </motion.div>
            );
          }

          return null;
        })}
      </div>
    </motion.div>
  );
}

function TechItem({ tech, index }: { tech: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4 group">
        <div className="w-20 h-20 rounded-lg border border-neutral-200 dark:border-neutral-700 flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm group-hover:shadow-md transition-all duration-300">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 flex items-center justify-center transition-all duration-300"
              animate={{
                scale: isHovered ? 1.2 : 1,
                color: isHovered ? tech.color : "currentColor",
              }}
            >
              {tech.icon}
            </motion.div>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center text-xs font-medium">
          {tech.proficiency}
        </div>
      </div>
      <h3 className="font-medium">{tech.name}</h3>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 overflow-hidden"
          >
            {tech.description}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-2 w-16 h-1 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full"
          style={{ backgroundColor: tech.color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${tech.proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}

// Technology Icons
function JavaScriptIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 h-6 fill-current"
    >
      <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-6 h-6 fill-current"
    >
      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.1 40.1 61.3 96.3 79.9 4.5 1.5 9.1 2.9 13.8 4.2-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.6-67.2 10.6-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94.2zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-6 h-6 fill-current"
    >
      <path d="M233.277 128.433v60.376h-75.605v294.727H97.041V188.809H21.435v-60.376h211.842zm67.299 150.016c6.898-12.475 16.331-22.504 28.3-30.087 11.968-7.583 25.557-11.375 40.767-11.375 14.704 0 27.547 3.2 38.527 9.599 10.98 6.399 19.667 15.36 26.06 26.88 6.394 11.52 9.59 24.685 9.59 39.495 0 14.81-3.196 27.975-9.59 39.495-6.393 11.52-15.08 20.48-26.06 26.88-10.98 6.399-23.823 9.599-38.527 9.599-15.21 0-28.799-3.734-40.767-11.202-11.969-7.468-21.402-17.44-28.3-29.914v35.84H240.43V128.433h60.147v150.016zm87.552 59.904c7.385-7.98 11.077-18.005 11.077-30.075 0-12.07-3.692-22.095-11.077-30.075-7.384-7.98-16.725-11.97-28.022-11.97-11.297 0-20.638 3.99-28.022 11.97-7.385 7.98-11.077 18.005-11.077 30.075 0 12.07 3.692 22.095 11.077 30.075 7.384 7.98 16.725 11.97 28.022 11.97 11.297 0 20.638-3.99 28.022-11.97z" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-6 h-6 fill-current"
    >
      <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current"
    >
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current"
    >
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function GraphQLIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current"
    >
      <path d="M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z" />
    </svg>
  );
}

function MongoDBIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-current"
    >
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  );
}