"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, LogOut, Menu, MessageSquare, Settings, User, X, Upload } from "lucide-react"

export default function ProfilePage() {
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
              <h1 className="text-3xl font-bold">Edit Your Profile</h1>
              <p className="text-muted-foreground">
                Update your profile information to showcase your skills and experience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[250px_1fr]">
              <div className="flex flex-col gap-6">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Change Photo
                    </Button>
                    <div className="text-center">
                      <h3 className="font-medium">John Doe</h3>
                      <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </CardContent>
                </Card>
                <nav className="grid gap-2">
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/profile"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 bg-muted text-foreground"
                  >
                    <User className="h-5 w-5" />
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/messages"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Messages
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </Link>
                </nav>
              </div>

              <div>
                <Tabs defaultValue="personal">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details and contact information.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" defaultValue="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" defaultValue="Doe" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Professional Title</Label>
                          <Input id="title" defaultValue="Full Stack Developer" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" defaultValue="San Francisco, CA" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            rows={5}
                            defaultValue="Full Stack Developer with 5 years of experience building web applications with React, Node.js, and TypeScript. Passionate about creating accessible and performant user experiences."
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save Changes</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="projects" className="mt-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Projects</CardTitle>
                          <CardDescription>Add and manage your portfolio projects.</CardDescription>
                        </div>
                        <Button>Add Project</Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {[1, 2, 3].map((project) => (
                            <div key={project} className="flex flex-col gap-4 border-b pb-6 last:border-0 md:flex-row">
                              <img
                                src={`/placeholder.svg?height=150&width=250&text=Project+${project}`}
                                alt={`Project ${project}`}
                                className="h-[150px] w-full rounded-lg object-cover md:w-[250px]"
                              />
                              <div className="flex flex-1 flex-col gap-2">
                                <div className="flex items-start justify-between">
                                  <h3 className="font-medium">Project {project}</h3>
                                  <div className="flex gap-2">
                                    <Button variant="ghost" size="sm">
                                      Edit
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-destructive">
                                      Delete
                                    </Button>
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  A brief description of your project and the technologies used. This is where you can
                                  highlight the key features and your role in the project.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs">React</div>
                                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs">TypeScript</div>
                                  <div className="rounded-full bg-muted px-2.5 py-0.5 text-xs">Tailwind CSS</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="skills" className="mt-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Skills</CardTitle>
                          <CardDescription>Add and manage your technical and soft skills.</CardDescription>
                        </div>
                        <Button>Add Skill</Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-medium mb-3">Technical Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "JavaScript",
                                "React",
                                "Node.js",
                                "TypeScript",
                                "HTML",
                                "CSS",
                                "Next.js",
                                "Tailwind CSS",
                              ].map((skill) => (
                                <div
                                  key={skill}
                                  className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm"
                                >
                                  {skill}
                                  <Button variant="ghost" size="icon" className="h-4 w-4 rounded-full">
                                    <X className="h-3 w-3" />
                                    <span className="sr-only">Remove {skill}</span>
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium mb-3">Soft Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {[
                                "Communication",
                                "Teamwork",
                                "Problem Solving",
                                "Time Management",
                                "Leadership",
                                "Adaptability",
                              ].map((skill) => (
                                <div
                                  key={skill}
                                  className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-sm"
                                >
                                  {skill}
                                  <Button variant="ghost" size="icon" className="h-4 w-4 rounded-full">
                                    <X className="h-3 w-3" />
                                    <span className="sr-only">Remove {skill}</span>
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="education" className="mt-6">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Education</CardTitle>
                          <CardDescription>Add and manage your educational background.</CardDescription>
                        </div>
                        <Button>Add Education</Button>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="flex flex-col gap-4 border-b pb-6 last:border-0">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                                <p className="text-sm text-muted-foreground">University of Technology</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm" className="text-destructive">
                                  Delete
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm">2018 - 2022</div>
                              <div className="text-sm text-muted-foreground">•</div>
                              <div className="text-sm">GPA: 3.8/4.0</div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Studied computer science with a focus on web development and artificial intelligence.
                              Graduated with honors.
                            </p>
                          </div>
                          <div className="flex flex-col gap-4 border-b pb-6 last:border-0">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium">Full Stack Web Development</h3>
                                <p className="text-sm text-muted-foreground">Tech Bootcamp</p>
                              </div>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm">
                                  Edit
                                </Button>
                                <Button variant="ghost" size="sm" className="text-destructive">
                                  Delete
                                </Button>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="text-sm">2022</div>
                              <div className="text-sm text-muted-foreground">•</div>
                              <div className="text-sm">12 weeks</div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Intensive 12-week bootcamp covering modern web development technologies and practices.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

