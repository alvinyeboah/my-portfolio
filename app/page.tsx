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
import { projects } from "@/lib/data/projects";
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "tailwindcss",
  "graphql",
  "mongodb",
];

function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

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
  { name: "Get Started", href: "/website-requirements" },
  { name: "Tech Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
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
                  Creative Engineer
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
                        I&#39;m a passionate full-stack engineer with over 5
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

              <IconCloudDemo />
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
                href="/"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/logo-dark.png"
                  alt="Portfolio Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
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
              className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : ""
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
              className={`ml-1 h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : ""
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
        className={`w-full h-full ${mockup.type === "browser"
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
                  className={`w-[${element.ratio * 100
                    }%] h-full bg-white dark:bg-neutral-800 p-4`}
                >
                  <div className="w-full h-full flex flex-col space-y-3">
                    <div className="w-3/4 h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                    <div className="w-full h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                    <div className="w-5/6 h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
                  </div>
                </div>
                <div
                  className={`w-[${(1 - element.ratio) * 100
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
