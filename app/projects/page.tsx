"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Code2,
  ExternalLink,
  Eye,
  GitBranch,
  Github,
  Globe,
  Layers,
  LayoutGrid,
  Monitor,
  Package,
  Palette,
  QrCode,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Wifi,
  Zap,
  ArrowUpRight,
} from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { cn } from "@/lib/utils"
import { detailedProjects as projects } from "@/lib/data/projects"



export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return

      e.preventDefault()
      setIsScrolling(true)

      if (e.deltaY > 0 && currentProject < projects.length - 1) {
        setCurrentProject(currentProject + 1)
      } else if (e.deltaY < 0 && currentProject > 0) {
        setCurrentProject(currentProject - 1)
      }

      setTimeout(() => setIsScrolling(false), 1000)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return

      if (e.key === "ArrowDown" && currentProject < projects.length - 1) {
        setCurrentProject(currentProject + 1)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 1000)
      } else if (e.key === "ArrowUp" && currentProject > 0) {
        setCurrentProject(currentProject - 1)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    // Touch handling for mobile
    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return

      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY

      // Check if horizontal swipe is more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        setIsScrolling(true)
        
        if (deltaX > 0 && currentProject > 0) {
          // Swipe right - go to previous project
          setCurrentProject(currentProject - 1)
        } else if (deltaX < 0 && currentProject < projects.length - 1) {
          // Swipe left - go to next project
          setCurrentProject(currentProject + 1)
        }
        
        setTimeout(() => setIsScrolling(false), 1000)
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchend", handleTouchEnd, { passive: true })
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchend", handleTouchEnd)
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [currentProject, isScrolling])

  const nextProject = () => {
    if (currentProject < projects.length - 1 && !isScrolling) {
      setCurrentProject(currentProject + 1)
      setIsScrolling(true)
      setTimeout(() => setIsScrolling(false), 1000)
    }
  }

  const prevProject = () => {
    if (currentProject > 0 && !isScrolling) {
      setCurrentProject(currentProject - 1)
      setIsScrolling(true)
      setTimeout(() => setIsScrolling(false), 1000)
    }
  }

  return (
    <div ref={containerRef} className="h-screen overflow-hidden bg-white dark:bg-neutral-900">
      <Navigation />

      {/* Project Slides */}
      <div className="pt-16 h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full"
          >
            <ProjectSlide project={projects[currentProject]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Mobile Bottom, Desktop Right */}
      <div className="fixed md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 bottom-4 left-1/2 transform -translate-x-1/2 md:translate-x-0 z-50 flex md:flex-col flex-row space-x-4 md:space-x-0 md:space-y-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevProject}
          disabled={currentProject === 0 || isScrolling}
          className="rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextProject}
          disabled={currentProject === projects.length - 1 || isScrolling}
          className="rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm"
        >
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Progress Indicator - Hidden on mobile, shown on desktop */}
      <div className="hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setCurrentProject(index)
                setIsScrolling(true)
                setTimeout(() => setIsScrolling(false), 1000)
              }
            }}
            className={cn(
              "w-2 h-8 rounded-full transition-all duration-300",
              index === currentProject
                ? "bg-black dark:bg-white"
                : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600",
            )}
          />
        ))}
      </div>

      {/* Mobile Progress Indicator - Top of screen */}
      <div className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setCurrentProject(index)
                setIsScrolling(true)
                setTimeout(() => setIsScrolling(false), 1000)
              }
            }}
            className={cn(
              "w-8 h-2 rounded-full transition-all duration-300",
              index === currentProject
                ? "bg-black dark:bg-white"
                : "bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600",
            )}
          />
        ))}
      </div>

      {/* Scroll Hint - Adjusted for mobile */}
      {currentProject === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-20 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
            <span className="hidden md:inline">Scroll to explore projects</span>
            <span className="md:hidden">Swipe or tap arrows to explore</span>
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="hidden md:flex w-6 h-10 border-2 border-neutral-300 dark:border-neutral-700 rounded-full mx-auto justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="w-1 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

function ProjectSlide({ project }: { project: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div ref={ref} className="h-full lg:flex lg:items-center overflow-y-auto lg:overflow-hidden">
      <div className="container px-4 md:px-8 lg:px-12 mx-auto py-4 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 lg:items-center lg:h-full">
          {/* Visual - Show first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[16/9] relative overflow-hidden">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="contain" className="transition-transform duration-500 ease-out" />
                </Link>
              </motion.div>
            </div>

            {/* Floating Elements - Adjusted for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-white dark:bg-neutral-900 rounded-full p-2 md:p-4 shadow-lg"
            >
              <div className="text-sm md:text-2xl font-light">{project.year}</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 bg-white dark:bg-neutral-900 rounded-lg p-2 md:p-3 shadow-lg"
            >
              <div className="text-xs md:text-sm font-medium">{project.role}</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 md:space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {/* Header */}
            <div className="space-y-2 md:space-y-4">
              <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  {project.year}
                </span>
                <span className="flex items-center">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  {project.timeline}
                </span>
                <span className="flex items-center">
                  <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  {project.team}
                </span>
              </div>

              <div>
                <h1 className="text-xl md:text-4xl lg:text-5xl font-light tracking-tight mb-1 md:mb-2">{project.title}</h1>
                <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-400">{project.subtitle}</p>
              </div>

              <p className="text-sm md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 line-clamp-3 lg:line-clamp-none">{project.description}</p>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-3">
                {project.technologies.map((tech: any, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-2 md:px-3 py-1 text-xs md:text-sm rounded-full border"
                    style={{ borderColor: tech.color, color: tech.color }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Features - Compact on mobile */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Key Features
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
                {project.features.slice(0, 4).map((feature: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/50"
                  >
                    <div className="text-neutral-600 dark:text-neutral-400 mt-0.5 text-sm md:text-base flex-shrink-0">{feature.icon}</div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-xs md:text-sm truncate">{feature.title}</h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2 lg:line-clamp-none">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics - Compact */}
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-xs md:text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Impact
              </h3>
              <div className="grid grid-cols-3 gap-2 md:gap-6">
                {project.metrics.map((metric: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-base md:text-2xl font-light text-black dark:text-white">{metric.value}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Actions - Compact */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 pt-2 md:pt-4">
              <Button
                asChild
                size="sm"
                className="rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs md:text-sm"
              >
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  View Live Site
                  <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Link>
              </Button>
              {project.github && (
                <Button asChild variant="outline" size="sm" className="rounded-full border-neutral-200 dark:border-neutral-700 text-xs md:text-sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group bg-white dark:bg-neutral-900 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/9] relative overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
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

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="inline-block px-3 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2 mb-4">
          {project.features.slice(0, 3).map((feature: any, featureIndex: number) => (
            <div
              key={featureIndex}
              className="flex items-center text-sm text-neutral-600 dark:text-neutral-400"
            >
              <div className="mr-2 text-black dark:text-white">
                {feature.icon}
              </div>
              {feature.text}
            </div>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full border-neutral-200 dark:border-neutral-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          <Link href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}


