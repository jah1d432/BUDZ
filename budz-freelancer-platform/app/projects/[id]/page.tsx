import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, DollarSign, MapPin } from "lucide-react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the project details based on the ID
  // For now, we'll use static data

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
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
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 rounded-full border">
                  <AvatarImage src="/placeholder.svg?height=64&width=64&text=R" alt="Rentkar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold">Graphic Designer</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-medium">Rentkar</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      Design
                    </Badge>
                  </div>
                </div>
              </div>
              <Button className="bg-[#0a0a29] text-white hover:bg-[#1a1a4b]">Apply Now</Button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Design Assignment: Rentkar Brand Campaign</h3>
                    <p>
                      Create a cohesive visual campaign for Rentkar's "Rent Smart, Live Better" initiative that
                      highlights the benefits of renting over buying expensive items. This campaign will be used across
                      social media, the website, and digital advertisements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Requirements</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Design a set of 5 social media graphics (1080x1080px) that communicate the key benefits of
                        renting
                      </li>
                      <li>Create a website banner (1920x600px) that captures the essence of the campaign</li>
                      <li>Design a mobile-friendly email header (600px wide)</li>
                      <li>
                        All designs should follow Rentkar's brand guidelines (colors, typography, and overall aesthetic)
                      </li>
                      <li>Include the tagline "Rent Smart, Live Better" in at least 3 of the designs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Deliverables</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All source files in PSD or AI format</li>
                      <li>Exported JPG and PNG files for each design</li>
                      <li>A brief explanation of your design choices and how they align with the campaign goals</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Evaluation Criteria</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Visual appeal and creativity</li>
                      <li>Alignment with brand guidelines</li>
                      <li>Effectiveness in communicating the benefits of renting</li>
                      <li>Technical execution and attention to detail</li>
                      <li>Versatility across different platforms</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About Rentkar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rentkar is a leading rental platform that allows users to rent high-quality products across
                    categories like electronics, appliances, furniture, and more. Our mission is to make premium
                    products accessible to everyone through affordable rental options, promoting a sustainable and
                    flexible lifestyle.
                  </p>
                  <p className="mt-4">
                    Founded in 2018, we've helped thousands of customers access the products they need without the
                    burden of ownership. Our "Rent Smart, Live Better" campaign aims to educate consumers about the
                    financial and environmental benefits of renting versus buying.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-medium">$300 - $500</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Timeline</p>
                      <p className="font-medium">7 days</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Posted</p>
                      <p className="font-medium">2 days ago</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Remote</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Adobe Photoshop</Badge>
                    <Badge variant="outline">Adobe Illustrator</Badge>
                    <Badge variant="outline">Graphic Design</Badge>
                    <Badge variant="outline">Social Media Design</Badge>
                    <Badge variant="outline">Brand Guidelines</Badge>
                    <Badge variant="outline">Typography</Badge>
                    <Badge variant="outline">Color Theory</Badge>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-[#0a0a29] text-white hover:bg-[#1a1a4b]">Apply Now</Button>

              <Button variant="outline" className="w-full">
                Save Project
              </Button>
            </div>
          </div>
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

