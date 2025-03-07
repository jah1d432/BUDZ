"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Briefcase } from "lucide-react"

type ProjectType = "all" | "active" | "opensource"

export default function ProjectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectType, setProjectType] = useState<ProjectType>("all")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">BUDZ</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden">
          <nav className="container grid gap-6 p-6">
            <Link href="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/projects" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/about" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1 py-12 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-2">BUDZ Projects</h1>
            <p className="text-xl text-muted-foreground">Submit assignments and get hired</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={projectType === "all" ? "default" : "outline"}
              className={`px-8 ${projectType === "all" ? "bg-primary text-primary-foreground" : "bg-background"}`}
              onClick={() => setProjectType("all")}
            >
              All
            </Button>
            <Button
              variant={projectType === "active" ? "default" : "outline"}
              className="px-8"
              onClick={() => setProjectType("active")}
            >
              Active Projects
            </Button>
            <Button
              variant={projectType === "opensource" ? "default" : "outline"}
              className="px-8"
              onClick={() => setProjectType("opensource")}
            >
              Open Source Projects
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 */}
            <Card className="overflow-hidden p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 rounded-full border">
                  <AvatarImage src="/placeholder.svg?height=50&width=50&text=R" alt="Rentkar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Rentkar</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Design
                  </Badge>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Graphic Designer</h2>
              <div className="mb-6">
                <p className="font-medium">Design Assignment: Rentkar Brand Campaign Assignment</p>
                <p className="text-muted-foreground mt-2">
                  Create a cohesive visual campaign for Rentkar's "Rent Smart, Live Better" initiative that highlights
                  the benefits of renting over buying...
                </p>
              </div>
              <Button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200">View</Button>
            </Card>

            {/* Project Card 2 */}
            <Card className="overflow-hidden p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 rounded-full border">
                  <AvatarImage src="/placeholder.svg?height=50&width=50&text=R" alt="Rentkar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">Rentkar</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Design
                  </Badge>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">UI/UX Designer</h2>
              <div className="mb-6">
                <p className="font-medium">Design Assignment: Rentkar Dashboard Redesign Assignment</p>
                <p className="text-muted-foreground mt-2">
                  Design a dashboard interface for Rentkar's customer portal that helps users track rentals, manage
                  payments, and discover new products...
                </p>
              </div>
              <Button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200">View</Button>
            </Card>

            {/* Project Card 3 */}
            <Card className="overflow-hidden p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 rounded-full border">
                  <AvatarImage src="/placeholder.svg?height=50&width=50&text=RG" alt="RedGorillas" />
                  <AvatarFallback>RG</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">RedGorillas</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Video Editing
                  </Badge>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">UGC Content Creator (Remote)</h2>
              <div className="mb-6">
                <p className="font-medium">🚀 Join the RedGorillas Squad as a UGC Content Creator</p>
                <p className="text-muted-foreground mt-2">
                  RedGorillas is looking for a dynamic and driven video creator to help us boost our social media
                  presence with engaging content...
                </p>
              </div>
              <Button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200">View</Button>
            </Card>

            {/* Project Card 4 */}
            <Card className="overflow-hidden p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 rounded-full border">
                  <AvatarImage src="/placeholder.svg?height=50&width=50&text=TW" alt="TechWave" />
                  <AvatarFallback>TW</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">TechWave</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Development
                  </Badge>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Frontend Developer</h2>
              <div className="mb-6">
                <p className="font-medium">Development Assignment: E-commerce Product Page</p>
                <p className="text-muted-foreground mt-2">
                  Build a responsive product detail page with image gallery, product variants, and add-to-cart
                  functionality using React and Tailwind CSS...
                </p>
              </div>
              <Button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200">View</Button>
            </Card>

            {/* Project Card 5 */}
            <Card className="overflow-hidden p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 rounded-full border">
                  <AvatarImage src="/placeholder.svg?height=50&width=50&text=GS" alt="GreenSpark" />
                  <AvatarFallback>GS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">GreenSpark</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Content
                  </Badge>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Content Writer</h2>
              <div className="mb-6">
                <p className="font-medium">Writing Assignment: Sustainable Living Blog Series</p>
                <p className="text-muted-foreground mt-2">
                  Create a series of 3 blog posts about sustainable living practices that are practical, engaging, and
                  optimized for SEO...
                </p>
              </div>
              <Button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200">View</Button>
            </Card>

            {/* Project Card 6 */}
            <Card className="overflow-hidden p-6">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 rounded-full border">
                  <AvatarImage src="/placeholder.svg?height=50&width=50&text=FM" alt="FinMaster" />
                  <AvatarFallback>FM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">FinMaster</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    Design
                  </Badge>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Mobile App Designer</h2>
              <div className="mb-6">
                <p className="font-medium">Design Assignment: Financial App Onboarding Flow</p>
                <p className="text-muted-foreground mt-2">
                  Design an intuitive and engaging onboarding flow for a personal finance mobile app that helps users
                  understand key features...
                </p>
              </div>
              <Button className="w-full bg-blue-100 text-blue-700 hover:bg-blue-200">View</Button>
            </Card>
          </div>
        </div>

        {/* Floating "Hire with BUDZ" section */}
        <div
          className={`fixed left-4 bottom-4 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Card className="p-4 shadow-lg bg-[#0a0a29] text-white">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="h-6 w-6" />
              <h3 className="text-lg font-semibold">Hire with BUDZ</h3>
            </div>
            <p className="text-sm mb-4">Find the perfect freelancer for your project</p>
            <Button className="w-full bg-white text-[#0a0a29] hover:bg-gray-100">Post a Project</Button>
          </Card>
        </div>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} BUDZ. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

