"use client"
import { useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  ExternalLink,
  ArrowRight,
  Clock,
} from "lucide-react"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { services } from "@/lib/data/services"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white font-light antialiased">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container px-8 md:px-12 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6">
                  <span className="font-normal">Professional</span>
                  <br />
                  <span className="relative">
                    Infrastructure Services
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-black dark:bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    />
                  </span>
                </h1>
                <p className="text-neutral-700 dark:text-neutral-300 md:text-lg max-w-2xl mx-auto">
                  Reliable, scalable infrastructure solutions designed to power your applications with enterprise-grade
                  security and performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  className="group rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                >
                  <Link href="#services">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-neutral-200 dark:border-neutral-700">
                  <Link href="/#contact">Get Custom Quote</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container px-8 md:px-12 mx-auto">
            <div className="space-y-32">
              {services.map((service, index) => (
                <ServiceShowcase key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-neutral-50 dark:bg-neutral-800">
          <div className="container px-8 md:px-12 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-6">Need Something Custom?</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
                I also provide custom development services, API integrations, and consulting for your specific needs.
                Let's discuss how I can help scale your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                >
                  <Link href="/#contact">
                    Get Custom Quote
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-neutral-200 dark:border-neutral-700">
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ServiceShowcase({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  const [isHovered, setIsHovered] = useState(false)

  const isEven = index % 2 === 0

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
      <div className={`grid lg:grid-cols-12 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}>
        {/* Content */}
        <div className={`lg:col-span-7 space-y-8 ${isEven ? "" : "lg:col-start-6"}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-2xl text-white" style={{ backgroundColor: service.color.primary }}>
                  {service.icon}
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Service {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2">{service.title}</h2>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">{service.subtitle}</p>
              </div>

              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">{service.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-6 mb-8">
              <h3 className="text-lg font-medium">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature: any, featureIndex: number) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + featureIndex * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <div className="text-neutral-600 dark:text-neutral-400 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-medium text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-medium">Performance Metrics</h3>
              <div className="grid grid-cols-3 gap-6">
                {service.metrics.map((metric: any, metricIndex: number) => (
                  <motion.div
                    key={metricIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + metricIndex * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-light text-black dark:text-white">{metric.value}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pricing & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
              <div>
                <div className="text-2xl font-light">
                  {service.pricing.starting}
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">/{service.pricing.period}</span>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  {service.pricing.features.slice(0, 2).join(" • ")}
                </div>
              </div>
              <div className="flex space-x-3">
                <Button
                  disabled
                  className="rounded-full bg-neutral-400 dark:bg-neutral-600 text-white cursor-not-allowed"
                >
                  Coming Soon
                  <Clock className="ml-2 h-4 w-4" />
                </Button>
                <Button asChild variant="outline" className="rounded-full border-neutral-200 dark:border-neutral-700">
                  <Link href="/#contact">Contact Sales</Link>
                </Button>
              </div>
              <div className="mt-2 text-center">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  To be released in about 3 weeks
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Card */}
        <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
              {/* Central Service Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-neutral-300 dark:text-neutral-700"
                  animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-32 h-32">{service.icon}</div>
                </motion.div>
              </div>

              {/* Floating Icons */}
              {service.visualElements.map((element: any, elementIndex: number) => (
                <motion.div
                  key={elementIndex}
                  className="absolute text-neutral-400 dark:text-neutral-600"
                  style={element.position}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.8 + elementIndex * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.2, color: service.color.primary }}
                >
                  {element.icon}
                </motion.div>
              ))}

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-lg p-4 border border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">{service.stats.label}</div>
                      <div className="text-xl font-light text-black dark:text-white">{service.stats.value}</div>
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{service.stats.trend}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Price Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-neutral-900 rounded-full p-3 shadow-lg border border-neutral-200 dark:border-neutral-800"
            >
              <div className="text-sm font-medium" style={{ color: service.color.primary }}>
                {service.pricing.starting}/{service.pricing.period}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
 