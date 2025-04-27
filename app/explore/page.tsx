"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Briefcase, ChevronDown, Clock, DollarSign, Filter, Frame, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExplorePage() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      {/* Header */}
      <header className="flex items-center h-16 px-4 border-b border-gray-800 shrink-0 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
          <Frame className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            WorkPulse
          </span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="/explore" className="font-bold text-white">
            Explore
          </Link>
          <Link href="/how-it-works" className="text-muted-foreground text-gray-400 hover:text-white">
            How It Works
          </Link>
          <Link href="/dashboard" className="text-muted-foreground text-gray-400 hover:text-white">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto mr-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search projects..."
                className="w-full bg-gray-900 border-gray-700 pl-8 text-sm text-gray-400 focus:ring-blue-600"
              />
            </div>
          </form>
          <Button variant="outline" size="icon" className="border-gray-700 text-gray-400">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-gray-700">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
              <AvatarFallback className="bg-blue-600">JD</AvatarFallback>
            </Avatar>
            <span className="sr-only">Toggle User Menu</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Explore Projects</h1>
              <p className="text-gray-400">Find your next opportunity from thousands of projects</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Post a Project</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters */}
            {showFilters && (
              <div className="md:block col-span-1 bg-gray-900 border border-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-white">Filters</h3>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    Reset
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-white mb-3">Category</h4>
                    <div className="space-y-2">
                      {[
                        "Web Development",
                        "Mobile Development",
                        "UI/UX Design",
                        "Graphic Design",
                        "Writing",
                        "Marketing",
                      ].map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={`category-${category}`} />
                          <Label htmlFor={`category-${category}`} className="text-sm text-gray-300">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <h4 className="text-sm font-medium text-white mb-3">Budget Range</h4>
                    <div className="space-y-4">
                      <Slider defaultValue={[500, 5000]} min={0} max={10000} step={100} />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">$500</span>
                        <span className="text-sm text-gray-400">$5,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Duration */}
                  <div>
                    <h4 className="text-sm font-medium text-white mb-3">Project Duration</h4>
                    <div className="space-y-2">
                      {["Less than 1 week", "1-2 weeks", "2-4 weeks", "1-3 months", "3+ months"].map((duration) => (
                        <div key={duration} className="flex items-center space-x-2">
                          <Checkbox id={`duration-${duration}`} />
                          <Label htmlFor={`duration-${duration}`} className="text-sm text-gray-300">
                            {duration}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <h4 className="text-sm font-medium text-white mb-3">Experience Level</h4>
                    <div className="space-y-2">
                      {["Entry", "Intermediate", "Expert"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={`level-${level}`} />
                          <Label htmlFor={`level-${level}`} className="text-sm text-gray-300">
                            {level}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Apply Filters Button */}
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                </div>
              </div>
            )}

            {/* Projects Grid */}
            <div className={`${showFilters ? "md:col-span-3" : "md:col-span-4"} space-y-6`}>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-gray-900 border border-gray-800">
                  <TabsTrigger value="all" className="data-[state=active]:bg-gray-800">
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger value="featured" className="data-[state=active]:bg-gray-800">
                    Featured
                  </TabsTrigger>
                  <TabsTrigger value="recent" className="data-[state=active]:bg-gray-800">
                    Recent
                  </TabsTrigger>
                  <TabsTrigger value="ending" className="data-[state=active]:bg-gray-800">
                    Ending Soon
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "E-commerce Website Redesign",
                        category: "Web Development",
                        budget: "$2,000 - $3,500",
                        duration: "2-4 weeks",
                        description:
                          "Looking for an experienced web developer to redesign our e-commerce platform with modern UI and improved checkout flow.",
                        skills: ["React", "Node.js", "UI/UX", "Shopify"],
                        client: {
                          name: "TechCorp Inc.",
                          rating: 4.9,
                          projects: 15,
                        },
                      },
                      {
                        title: "Mobile App Development for Fitness Tracking",
                        category: "Mobile Development",
                        budget: "$4,000 - $6,000",
                        duration: "1-3 months",
                        description:
                          "Need a cross-platform mobile app for fitness tracking with features like workout plans, progress tracking, and social sharing.",
                        skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
                        client: {
                          name: "FitLife LLC",
                          rating: 4.7,
                          projects: 8,
                        },
                      },
                      {
                        title: "Brand Identity Design",
                        category: "Graphic Design",
                        budget: "$1,500 - $2,500",
                        duration: "2-3 weeks",
                        description:
                          "Seeking a talented graphic designer to create a complete brand identity including logo, color palette, and brand guidelines.",
                        skills: ["Logo Design", "Branding", "Adobe Creative Suite", "Typography"],
                        client: {
                          name: "StartupX",
                          rating: 4.8,
                          projects: 5,
                        },
                      },
                      {
                        title: "Content Marketing Strategy",
                        category: "Marketing",
                        budget: "$3,000 - $5,000",
                        duration: "1-2 months",
                        description:
                          "Looking for a marketing expert to develop a comprehensive content strategy to increase our online presence and lead generation.",
                        skills: ["Content Strategy", "SEO", "Social Media", "Analytics"],
                        client: {
                          name: "GrowthCo",
                          rating: 4.6,
                          projects: 12,
                        },
                      },
                      {
                        title: "Custom CRM Development",
                        category: "Web Development",
                        budget: "$5,000 - $8,000",
                        duration: "2-3 months",
                        description:
                          "Need a developer to build a custom CRM system tailored to our sales process with reporting and analytics features.",
                        skills: ["JavaScript", "Python", "Database Design", "API Development"],
                        client: {
                          name: "SalesPro Inc.",
                          rating: 4.9,
                          projects: 20,
                        },
                      },
                      {
                        title: "Product Explainer Video",
                        category: "Video Production",
                        budget: "$1,000 - $2,000",
                        duration: "1-2 weeks",
                        description:
                          "Seeking a video animator to create a 2-minute explainer video for our new SaaS product launch.",
                        skills: ["Animation", "Storyboarding", "Voice Over", "Video Editing"],
                        client: {
                          name: "CloudSoft",
                          rating: 4.5,
                          projects: 7,
                        },
                      },
                    ].map((project, i) => (
                      <Card key={i} className="bg-gray-900 border-gray-800 overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <Badge className="bg-blue-600 hover:bg-blue-700 mb-2">{project.category}</Badge>
                              <h3 className="font-bold text-white text-lg mb-1">{project.title}</h3>
                              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                <div className="flex items-center">
                                  <DollarSign className="h-4 w-4 mr-1" />
                                  {project.budget}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {project.duration}
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                              <Briefcase className="h-5 w-5" />
                            </Button>
                          </div>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skills.map((skill, j) => (
                              <Badge key={j} variant="outline" className="border-gray-700 text-gray-300">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage
                                  src={`/placeholder.svg?height=32&width=32&text=${project.client.name.charAt(0)}`}
                                />
                                <AvatarFallback className="bg-blue-900">{project.client.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium text-white">{project.client.name}</p>
                                <div className="flex items-center text-xs text-gray-400">
                                  <Star className="h-3 w-3 text-yellow-500 mr-1" />
                                  <span>
                                    {project.client.rating} • {project.client.projects} projects
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-gray-850 border-t border-gray-800 p-4">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="featured" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Featured projects would go here - using a subset of the same projects for demo */}
                    {[0, 2, 4].map((index) => {
                      const projects = [
                        {
                          title: "E-commerce Website Redesign",
                          category: "Web Development",
                          budget: "$2,000 - $3,500",
                          duration: "2-4 weeks",
                          description:
                            "Looking for an experienced web developer to redesign our e-commerce platform with modern UI and improved checkout flow.",
                          skills: ["React", "Node.js", "UI/UX", "Shopify"],
                          client: {
                            name: "TechCorp Inc.",
                            rating: 4.9,
                            projects: 15,
                          },
                        },
                        {
                          title: "Mobile App Development for Fitness Tracking",
                          category: "Mobile Development",
                          budget: "$4,000 - $6,000",
                          duration: "1-3 months",
                          description:
                            "Need a cross-platform mobile app for fitness tracking with features like workout plans, progress tracking, and social sharing.",
                          skills: ["React Native", "Firebase", "UI/UX", "API Integration"],
                          client: {
                            name: "FitLife LLC",
                            rating: 4.7,
                            projects: 8,
                          },
                        },
                        {
                          title: "Brand Identity Design",
                          category: "Graphic Design",
                          budget: "$1,500 - $2,500",
                          duration: "2-3 weeks",
                          description:
                            "Seeking a talented graphic designer to create a complete brand identity including logo, color palette, and brand guidelines.",
                          skills: ["Logo Design", "Branding", "Adobe Creative Suite", "Typography"],
                          client: {
                            name: "StartupX",
                            rating: 4.8,
                            projects: 5,
                          },
                        },
                      ]
                      const project = projects[index % 3]
                      return (
                        <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <Badge className="bg-blue-600 hover:bg-blue-700 mb-2">{project.category}</Badge>
                                <h3 className="font-bold text-white text-lg mb-1">{project.title}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                  <div className="flex items-center">
                                    <DollarSign className="h-4 w-4 mr-1" />
                                    {project.budget}
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {project.duration}
                                  </div>
                                </div>
                              </div>
                              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                                <Briefcase className="h-5 w-5" />
                              </Button>
                            </div>
                            <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.skills.map((skill, j) => (
                                <Badge key={j} variant="outline" className="border-gray-700 text-gray-300">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage
                                    src={`/placeholder.svg?height=32&width=32&text=${project.client.name.charAt(0)}`}
                                  />
                                  <AvatarFallback className="bg-blue-900">
                                    {project.client.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="text-sm font-medium text-white">{project.client.name}</p>
                                  <div className="flex items-center text-xs text-gray-400">
                                    <Star className="h-3 w-3 text-yellow-500 mr-1" />
                                    <span>
                                      {project.client.rating} • {project.client.projects} projects
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="bg-gray-850 border-t border-gray-800 p-4">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                          </CardFooter>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>
                <TabsContent value="recent" className="mt-4">
                  {/* Recent projects content */}
                  <div className="text-center py-8 text-gray-400">
                    <p>Recent projects tab content would go here</p>
                  </div>
                </TabsContent>
                <TabsContent value="ending" className="mt-4">
                  {/* Ending soon projects content */}
                  <div className="text-center py-8 text-gray-400">
                    <p>Ending soon projects tab content would go here</p>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  Load More Projects
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950">
        <div className="container px-4 md:px-6 py-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2025 WorkPulse. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-xs">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-xs">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-xs">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
