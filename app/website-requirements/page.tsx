"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Send, FileText, Mail, MessageCircle, Code, Palette, Globe, Zap, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  // Contact Information
  fullName: string;
  email: string;
  whatsapp: string;
  rolePosition: string; // Main point of contact

  // Business Overview
  companyName: string;
  tagline: string;
  businessDescription: string;
  targetAudience: string;
  mainGoals: string;
  currentWebsite: string;
  likesDislikes: string;
  admiredWebsites: string;
  dislikedWebsites: string;
  googleDriveLink: string;
  contentAssets: string[];

  // Branding & Design
  brandColors: string;
  fontPreferences: string;
  lookFeel: string;
  visualAssets: string;
  avoidElements: string;

  // Pages & Content
  pages: string[];
  customPage: string;
  contentProvision: string;
  homepageSections: string;

  // Functional Requirements
  coreFeatures: string[];
  productFiltering: string;
  automatedEmails: string;
  customFunctionality: string;

  // Technical & Hosting
  domainName: string;
  domainRegistrar: string;
  hostingProvider: string;
  analytics: string;
  primaryKeywords: string;
  competitors: string;
  targetRegions: string;
  performanceExpectations: string[];

  // Maintenance & Support
  contentTraining: string;
  ongoingMaintenance: string;
  performanceReviews: string;

  // Timeline
  targetLaunch: string;
  importantDeadlines: string;
  contentAvailability: string;
}

export default function WebsiteRequirementsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    // Contact Information
    fullName: "",
    email: "",
    whatsapp: "",
    rolePosition: "",

    // Business Overview
    companyName: "",
    tagline: "",
    businessDescription: "",
    targetAudience: "",
    mainGoals: "",
    currentWebsite: "",
    likesDislikes: "",
    admiredWebsites: "",
    dislikedWebsites: "",
    googleDriveLink: "",
    contentAssets: [],

    // Branding & Design
    brandColors: "",
    fontPreferences: "",
    lookFeel: "",
    visualAssets: "",
    avoidElements: "",

    // Pages & Content
    pages: [],
    customPage: "",
    contentProvision: "",
    homepageSections: "",

    // Functional Requirements
    coreFeatures: [],
    productFiltering: "",
    automatedEmails: "",
    customFunctionality: "",

    // Technical & Hosting
    domainName: "",
    domainRegistrar: "",
    hostingProvider: "",
    analytics: "",
    primaryKeywords: "",
    competitors: "",
    targetRegions: "",
    performanceExpectations: [],

    // Maintenance & Support
    contentTraining: "",
    ongoingMaintenance: "",
    performanceReviews: "",

    // Timeline
    targetLaunch: "",
    importantDeadlines: "",
    contentAvailability: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    submitted: false,
    error: null as string | null,
  });

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checkbox.checked
          ? [...(prev[name as keyof FormData] as string[]), value]
          : (prev[name as keyof FormData] as string[]).filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("/api/requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit requirements");
      }

      setSubmitStatus({ submitting: false, submitted: true, error: null });
    } catch (error) {
      setSubmitStatus({
        submitting: false,
        submitted: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'date';
  required?: boolean;
  placeholder?: string;
  options?: string[];
  condition?: () => boolean;
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  fields: FormField[];
  alwaysOpen?: boolean;
}

const sections: Section[] = [
    {
      id: "contact",
      title: "Contact Information",
      subtitle: "Let's start with how to reach you",
      icon: <Mail className="w-5 h-5" />,
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true, placeholder: "John Doe" },
        { name: "email", label: "Email Address", type: "email", required: true, placeholder: "john@example.com" },
        { name: "whatsapp", label: "WhatsApp Number", type: "tel", required: true, placeholder: "+233 24 123 4567" },
        { name: "rolePosition", label: "Your Role/Position (Optional)", type: "text", required: false, placeholder: "CEO, Marketing Manager, etc." },
      ],
      alwaysOpen: true,
    },
    {
      id: "business",
      title: "Business Overview",
      subtitle: "Tell me about your vision",
      icon: <Code className="w-5 h-5" />,
      fields: [
        { name: "companyName", label: "Company Name", type: "text", required: true, placeholder: "Your company name" },
        { name: "tagline", label: "Tagline or Slogan", type: "text", required: false, placeholder: "Brief catchphrase (optional)" },
        { name: "businessDescription", label: "Business Description", type: "textarea", required: true, placeholder: "What does your business do?" },
        { name: "targetAudience", label: "Target Audience", type: "textarea", required: true, placeholder: "Who are your ideal customers?" },
        { name: "mainGoals", label: "Website Goals", type: "textarea", required: true, placeholder: "What should the website achieve?" },
        { name: "currentWebsite", label: "Current Website", type: "url", required: false, placeholder: "https://example.com (if any)" },
        { name: "googleDriveLink", label: "Google Drive Link", type: "url", required: false, placeholder: "Link to your assets/images/content (optional)" },
        { name: "admiredWebsites", label: "Websites You Admire", type: "textarea", required: false, placeholder: "Share websites you love and why..." },
        { name: "dislikedWebsites", label: "Websites You Dislike", type: "textarea", required: false, placeholder: "What websites do you dislike and why? This helps me avoid those elements..." },
      ],
    },
    {
      id: "branding",
      title: "Branding & Design",
      subtitle: "Let's capture your brand essence",
      icon: <Palette className="w-5 h-5" />,
      fields: [
        { name: "brandColors", label: "Brand Colors", type: "text", required: false, placeholder: "#FF5733, #333333 (hex codes or names)" },
        { name: "fontPreferences", label: "Font Preferences", type: "text", required: false, placeholder: "Helvetica, Arial, etc." },
        { name: "lookFeel", label: "Desired Look & Feel", type: "textarea", required: false, placeholder: "Modern, elegant, playful, minimalist?" },
        { name: "visualAssets", label: "Existing Visual Assets", type: "textarea", required: false, placeholder: "Logo, images, videos you have" },
        {
          name: "contentAssets",
          label: "What Content Assets Do You Have?",
          type: "checkbox",
          options: [
            "Company Logo (SVG/PNG)",
            "Product Images",
            "Team Photos",
            "Brand Guidelines",
            "Written Content/Copy",
            "Videos",
            "Customer Testimonials",
            "Case Studies",
            "None yet - need help creating",
          ],
        },
        { name: "avoidElements", label: "Elements to Avoid", type: "textarea", required: false, placeholder: "Colors, styles, or features you don't want" },
      ],
    },
    {
      id: "pages",
      title: "Pages & Content",
      subtitle: "Structuring your website",
      icon: <Globe className="w-5 h-5" />,
      fields: [
        {
          name: "pages",
          label: "Required Pages",
          type: "checkbox",
          required: false,
          options: [
            "Home",
            "About",
            "Services / Products",
            "Portfolio / Gallery",
            "Blog / News",
            "Contact",
            "Testimonials / Reviews",
            "FAQ",
            "Other (specify below)",
          ],
        },
        {
          name: "contentProvision",
          label: "Content Provision",
          type: "select",
          required: false,
          options: [
            "I'll provide all content",
            "Need help with copywriting",
            "Mix of both",
          ],
        },
        { name: "homepageSections", label: "Homepage Must-Haves", type: "textarea", required: false, placeholder: "Hero banner, features, testimonials..." },
        {
          name: "customPage",
          label: "Custom Page(s)",
          type: "textarea",
          required: false,
          placeholder: "If you selected 'Other', please specify the custom page names here...",
          condition: () => formData.pages.includes("Other (specify below)")
        },
      ],
    },
    {
      id: "functional",
      title: "Features & Functionality",
      subtitle: "Making your website work for you",
      icon: <Zap className="w-5 h-5" />,
      fields: [
        {
          name: "coreFeatures",
          label: "Core Features",
          type: "checkbox",
          required: false,
          options: [
            "E-commerce with checkout",
            "Booking system",
            "Payment integration",
            "Contact forms",
            "Newsletter signup",
            "Live chat support",
            "Multi-language",
            "User accounts",
          ],
        },
        { name: "customFunctionality", label: "Custom Features", type: "textarea", required: false, placeholder: "Describe any unique requirements" },
        { name: "productFiltering", label: "Product filtering/search?", type: "select", required: false },
        { name: "automatedEmails", label: "Automated emails needed?", type: "select", required: false },
      ],
    },
    {
      id: "technical",
      title: "Technical Details",
      subtitle: "The backbone of your website",
      icon: <Code className="w-5 h-5" />,
      fields: [
        { name: "domainName", label: "Domain Name", type: "text", required: false, placeholder: "yourwebsite.com" },
        { name: "domainRegistrar", label: "Domain Registrar", type: "text", required: false, placeholder: "GoDaddy, Namecheap, etc." },
        { name: "hostingProvider", label: "Hosting Provider", type: "text", required: false, placeholder: "If already set up" },
        {
          name: "analytics",
          label: "Analytics Preference",
          type: "select",
          required: false,
          options: ["Google Analytics", "Plausible", "None", "Other"],
        },
        { name: "primaryKeywords", label: "SEO Keywords", type: "textarea", required: false, placeholder: "Keywords for search optimization" },
      ],
    },
    {
      id: "timeline",
      title: "Timeline & Support",
      subtitle: "When do we begin?",
      icon: <Send className="w-5 h-5" />,
      fields: [
        { name: "targetLaunch", label: "Target Launch Date", type: "date", required: false },
        { name: "importantDeadlines", label: "Important Deadlines", type: "textarea", required: false, placeholder: "Any specific dates to work around?" },
        { name: "contentAvailability", label: "Content Ready By", type: "textarea", required: false, placeholder: "When can you provide all materials?" },
        {
          name: "ongoingMaintenance",
          label: "Post-Launch Support",
          type: "select",
          required: false,
          options: ["Yes, I need ongoing support", "Just training please", "Not needed right now"],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-black dark:text-white font-light antialiased">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container px-4 md:px-6 mx-auto max-w-5xl mb-16"
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-black dark:border-white -mt-4 -ml-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-6">
                <Code className="w-8 h-8 text-black dark:text-white" />
                <span className="text-sm font-medium tracking-wide uppercase">Let's Create Magic</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6">
                Your Dream Website
                <span className="block font-normal mt-2">Starts Here</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-3xl">
                Every great website begins with a vision. I'm here to transform your ideas into a stunning digital reality.
                Fill out this comprehensive form, and I'll craft a website that not only looks beautiful but delivers results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Custom Design</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Tailored to your brand</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Performance First</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Blazing fast & SEO ready</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Ongoing Support</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">I'm here when you need me</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-8"
              >
                <h3 className="text-lg font-medium mb-4">Quick Questions? Direct Message</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                  Not sure about something? Have specific requirements? You can use our comprehensive form or reach out directly:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm font-medium mb-3">📋 Fill Out Full Requirements</p>
                    <Button
                      asChild
                      className="w-full group rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                    >
                      <Link href="/website-requirements">
                        Get Started Form
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </Button>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                      Comprehensive form for detailed project requirements
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-medium">💬 Or Reach Out Directly:</p>
                    <div className="space-y-2">
                      <a
                        href="mailto:alvinyeboah5@gmail.com"
                        className="flex items-center space-x-2 text-sm hover:text-black dark:hover:text-white transition-colors group"
                      >
                        <Mail className="w-4 h-4" />
                        <span>alvinyeboah5@gmail.com</span>
                      </a>
                      <a
                        href="https://wa.me/233502444199"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm hover:text-black dark:hover:text-white transition-colors group"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp Chat</span>
                      </a>
                      <a
                        href="https://drive.google.com/drive/folders/new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm hover:text-black dark:hover:text-white transition-colors group"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Share Files via Drive</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4">
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    <strong>Pro Tip:</strong> Use the Get Started form for the best results - include your budget range, timeline, and specific features you need!
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-black dark:border-white -mb-4 -mr-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {submitStatus.submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container px-4 md:px-6 mx-auto max-w-3xl"
          >
            <div className="relative bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-12 text-center">
              <motion.div
                className="w-24 h-24 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
              >
                <Check className="w-12 h-12 text-white dark:text-black" />
              </motion.div>

              <h2 className="text-3xl font-light mb-4">Thank You!</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                Your requirements have been received. I'll carefully review your vision and get back to you within 24-48 hours with a personalized proposal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="group rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
                >
                  <Link href="/">
                    Return to Portfolio
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="group rounded-full border-neutral-200 dark:border-neutral-700"
                >
                  <a href="mailto:alvinyeboah5@gmail.com">
                    Send Additional Info
                    <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="container px-4 md:px-6 mx-auto max-w-5xl space-y-8">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className={cn(
                  "relative overflow-hidden rounded-2xl border",
                  expandedSection === section.id || section.alwaysOpen
                    ? "border-black dark:border-white bg-white dark:bg-neutral-900"
                    : "border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600"
                )}
              >
                {!section.alwaysOpen && (
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-8 py-6 bg-gradient-to-r from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-900 hover:from-neutral-100 hover:to-white dark:hover:from-neutral-700 dark:hover:to-neutral-800 transition-all duration-300 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300",
                        expandedSection === section.id
                          ? "bg-black dark:bg-white text-white dark:text-black"
                          : "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black"
                      )}>
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-light">{section.title}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">{section.subtitle}</p>
                      </div>
                    </div>
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      expandedSection === section.id
                        ? "bg-black dark:bg-white text-white dark:text-black rotate-180"
                        : "bg-neutral-100 dark:bg-neutral-800 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black"
                    )}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                )}

                <AnimatePresence>
                  {(expandedSection === section.id || section.alwaysOpen) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={section.alwaysOpen ? "" : "border-t border-neutral-200 dark:border-neutral-700"}
                    >
                      <div className="p-8 space-y-6">
                        {section.fields.map((field) => {
                          // Skip fields that have conditions not met
                          if ('condition' in field && field.condition && !field.condition()) {
                            return null;
                          }

                          return (
                          <div key={field.name} className="space-y-2">
                            <label htmlFor={field.name} className="block text-sm font-medium">
                              {field.label}
                              {field.required && <span className="text-red-500 ml-1">*</span>}
                            </label>

                            {field.type === "textarea" ? (
                              <textarea
                                id={field.name}
                                name={field.name}
                                rows={field.name === "businessDescription" || field.name === "targetAudience" ? 5 : 4}
                                placeholder={field.placeholder}
                                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300 resize-none"
                                onChange={handleInputChange}
                                value={formData[field.name as keyof FormData] as string}
                                required={field.required}
                              />
                            ) : field.type === "select" ? (
                              <Select
                                onValueChange={(value) => setFormData(prev => ({ ...prev, [field.name]: value }))}
                                value={formData[field.name as keyof FormData] as string || ""}
                                required={field.required}
                              >
                                <SelectTrigger className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                  {field.options?.map((option) => (
                                    <SelectItem key={option} value={option}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            ) : field.type === "checkbox" ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {field.options?.map((option) => (
                                  <label key={option} className="flex items-center space-x-3 cursor-pointer group p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-black dark:hover:border-white transition-colors">
                                    <input
                                      type="checkbox"
                                      name={field.name}
                                      value={option}
                                      checked={(formData[field.name as keyof FormData] as string[]).includes(option)}
                                      onChange={handleInputChange}
                                      className="w-5 h-5 text-black dark:text-white border-neutral-300 dark:border-neutral-600 rounded focus:ring-black dark:focus:ring-white"
                                    />
                                    <span className="text-sm">{option}</span>
                                  </label>
                                ))}
                              </div>
                            ) : (
                              <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                placeholder={field.placeholder}
                                className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-all duration-300"
                                onChange={handleInputChange}
                                value={formData[field.name as keyof FormData] as string}
                                required={field.required}
                              />
                            )}
                          </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sections.length * 0.1 }}
              className="pt-8"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-neutral-800 dark:from-white dark:to-neutral-200 p-1">
                <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-light mb-2">Ready to begin?</h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Submit your requirements and let's create something amazing together
                      </p>
                    </div>
                    <Button
                      type="submit"
                      disabled={submitStatus.submitting}
                      className="group rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8 py-4 text-lg transition-all duration-300"
                    >
                      {submitStatus.submitting ? (
                        <>Processing...</>
                      ) : (
                        <>
                          Submit Requirements
                          <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {submitStatus.error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
                >
                  {submitStatus.error}
                </motion.p>
              )}
            </motion.div>
          </form>
        )}
      </main>
    </div>
  );
}