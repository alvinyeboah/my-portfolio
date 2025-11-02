"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
  children?: NavItem[]
}

const navigationItems: NavItem[] = [
  {
    name: "Home",
    href: "/",
    children: [
      { name: "About", href: "/#about" },
      { name: "Projects", href: "/#projects" },
      { name: "Tech Stack", href: "/#stack" },
      { name: "Contact", href: "/#contact" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Get Started",
    href: "/website-requirements",
  },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="transition-opacity hover:opacity-80"
              onClick={handleLinkClick}
            >
              <Image
                src="/logo.png"
                alt="Portfolio Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative">
                    {item.children ? (
                      <div
                        className="group"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <Link
                            href={item.href}
                            className={cn(
                              "text-sm transition-colors hover:text-neutral-500 dark:hover:text-neutral-300",
                              pathname === item.href || pathname.startsWith(item.href + "/")
                                ? "font-medium"
                                : "font-light",
                            )}
                          >
                            {item.name}
                          </Link>
                          <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </div>

                        {/* Desktop Dropdown */}
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg py-2 min-w-[150px] z-50"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                  onClick={handleLinkClick}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm transition-colors hover:text-neutral-500 dark:hover:text-neutral-300",
                          pathname === item.href || pathname.startsWith(item.href + "/") ? "font-medium" : "font-light",
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-neutral-200 dark:border-neutral-800"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sheet - Moved outside header for proper z-index stacking */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-[101] bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-700 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex h-16 items-center justify-between px-6 border-b border-neutral-200 dark:border-neutral-700">
                  <Link href="/" className="transition-opacity hover:opacity-80" onClick={handleLinkClick}>
                    <Image
                      src="/logo.png"
                      alt="Portfolio Logo"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-6 space-y-1">
                    {navigationItems.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <div>
                            <div
                              className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer transition-colors"
                              onClick={() => toggleDropdown(item.name)}
                            >
                              <Link
                                href={item.href}
                                className={cn(
                                  "text-lg font-light hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",
                                  pathname === item.href || pathname.startsWith(item.href + "/") ? "font-medium" : "",
                                )}
                                onClick={handleLinkClick}
                              >
                                {item.name}
                              </Link>
                              <ChevronDown
                                className={cn(
                                  "w-4 h-4 transition-transform text-neutral-500",
                                  activeDropdown === item.name ? "rotate-180" : "",
                                )}
                              />
                            </div>

                            <AnimatePresence>
                              {activeDropdown === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-6 space-y-1 py-2">
                                    {item.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.href}
                                        className="block py-2 px-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-md transition-colors"
                                        onClick={handleLinkClick}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              "block py-3 px-3 text-lg font-light hover:text-neutral-600 dark:hover:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg transition-colors",
                              pathname === item.href || pathname.startsWith(item.href + "/") ? "font-medium" : "",
                            )}
                            onClick={handleLinkClick}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Footer */}
                  <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 mt-auto">
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 text-center">© 2025 Alvin E=Yeboah</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
