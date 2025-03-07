"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Home, LogOut, Menu, MessageSquare, Settings, User, X } from "lucide-react"

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">BUDZ</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
              Dashboard
            </Link>
            <Link href="/dashboard/messages" className="text-sm font-medium hover:underline underline-offset-4">
              Messages
            </Link>
            <Link href="/dashboard/profile" className="text-sm font-medium hover:underline underline-offset-4">
              Profile
            </Link>
            <Link href="/dashboard/settings" className="text-sm font-medium hover:underline underline-offset-4">
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
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
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              Messages
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
            <Link
              href="/logout"
              className="flex items-center gap-2 text-lg font-medium text-destructive"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </nav>
        </div>
      )}
      <main className="flex-1 py-6 md:py-10">
        <div className="container">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <p className="text-muted-foreground">Manage your profile, projects, and connections all in one place.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">75%</div>
                  <p className="text-xs text-muted-foreground">Complete your profile to increase visibility</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-3/4 rounded-full bg-primary"></div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Projects</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">Active projects in your portfolio</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-muted-foreground">Views in the last 30 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Unread messages from clients</p>
                </CardContent>
              </Card>
            </div>
            <Tabs defaultValue="projects">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="future">Future Plans</TabsTrigger>
              </TabsList>
              <TabsContent value="projects" className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Your Projects</h2>
                  <Button>Add Project</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5].map((project) => (
                    <Card key={project}>
                      <CardContent className="p-0">
                        <img
                          src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                          alt={`Project ${project}`}
                          className="aspect-video w-full object-cover"
                        />
                      </CardContent>
                      <CardHeader>
                        <CardTitle>Project {project}</CardTitle>
                        <CardDescription>
                          A brief description of your project and the technologies used.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills" className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Your Skills</h2>
                  <Button>Add Skill</Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["JavaScript", "React", "Node.js", "TypeScript", "HTML", "CSS", "Next.js", "Tailwind CSS"].map(
                          (skill) => (
                            <div key={skill} className="rounded-full bg-muted px-3 py-1 text-sm">
                              {skill}
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Communication",
                          "Teamwork",
                          "Problem Solving",
                          "Time Management",
                          "Leadership",
                          "Adaptability",
                        ].map((skill) => (
                          <div key={skill} className="rounded-full bg-muted px-3 py-1 text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="education" className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Your Education</h2>
                  <Button>Add Education</Button>
                </div>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                          <CardDescription>University of Technology</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">2018 - 2022</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Studied computer science with a focus on web development and artificial intelligence. Graduated
                        with honors.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle>Full Stack Web Development</CardTitle>
                          <CardDescription>Tech Bootcamp</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground">2022</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Intensive 12-week bootcamp covering modern web development technologies and practices.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="future" className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Your Future Plans</h2>
                  <Button>Edit Plans</Button>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Career Goals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium">Short-term Goals (1-2 years)</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Expand my portfolio with more complex projects and specialize in React and Next.js development.
                        Obtain advanced certifications in web accessibility and performance optimization.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Mid-term Goals (3-5 years)</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Transition to a senior developer role with leadership responsibilities. Start mentoring junior
                        developers and contributing to open-source projects.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium">Long-term Vision</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Establish my own development agency specializing in creating accessible and high-performance web
                        applications. Speak at industry conferences and publish technical content to share knowledge.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

