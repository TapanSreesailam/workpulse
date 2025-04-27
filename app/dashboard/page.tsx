"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  Briefcase,
  Calendar,
  CreditCard,
  DollarSign,
  Menu,
  Home,
  MessageSquare,
  Search,
  Settings,
  TrendingUp,
  ChevronRight,
  FileText,
  Users,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Activity,
  BarChart,
  LineChart,
  PieChart,
  Award,
  Target,
  Globe,
  Star
} from "lucide-react"
import { ProgressSimple } from "@/components/ui/progress-simple"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [userEmail, setUserEmail] = useState("")
  const [progressValues, setProgressValues] = useState({
    completionRate: 0,
    clientSatisfaction: 0,
    projectDelivery: 0,
    monthlyGoal: 0
  })
  
  // Animation for floating elements
  const [floatingElements, setFloatingElements] = useState([
    { id: 1, x: Math.random() * 100, y: Math.random() * 100, size: 20 + Math.random() * 30, speed: 0.2 + Math.random() * 0.3 },
    { id: 2, x: Math.random() * 100, y: Math.random() * 100, size: 20 + Math.random() * 30, speed: 0.2 + Math.random() * 0.3 },
    { id: 3, x: Math.random() * 100, y: Math.random() * 100, size: 20 + Math.random() * 30, speed: 0.2 + Math.random() * 0.3 },
    { id: 4, x: Math.random() * 100, y: Math.random() * 100, size: 20 + Math.random() * 30, speed: 0.2 + Math.random() * 0.3 },
    { id: 5, x: Math.random() * 100, y: Math.random() * 100, size: 20 + Math.random() * 30, speed: 0.2 + Math.random() * 0.3 }
  ])

  // Effects for animations and interactions
  useEffect(() => {
    // Get user email from localStorage if available
    const email = localStorage.getItem("workpulse_user_email")
    if (email) {
      setUserEmail(email)
    }
    
    // Setup scroll listener for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    
    // Animate the progress bars gradually
    const timeout = setTimeout(() => {
      setProgressValues({
        completionRate: 94,
        clientSatisfaction: 87,
        projectDelivery: 92,
        monthlyGoal: 72
      })
    }, 500)
    
    // Animate floating elements
    const interval = setInterval(() => {
      setFloatingElements(prev => 
        prev.map(el => ({
          ...el,
          x: (el.x + el.speed) % 100,
          y: (el.y + el.speed * 0.5) % 100
        }))
      )
    }, 50)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-primary-900 dark:to-primary-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map(el => (
          <div 
            key={el.id}
            className="absolute rounded-full bg-gradient-to-br from-primary-300/10 to-accent/5 dark:from-primary-300/5 dark:to-accent/10 backdrop-blur-3xl"
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: `${el.size}px`,
              height: `${el.size}px`,
              transition: 'all 3s ease-in-out',
              opacity: 0.3 + Math.random() * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out dark:bg-primary-800 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center border-b border-gray-200 px-6 dark:border-gray-700">
          <Link href="/" className="flex items-center group">
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300">WorkPulse</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-primary-900 dark:bg-primary-700/50 dark:text-white transition-all duration-200 hover:scale-105"
            >
              <Home className="h-4 w-4" />
              Overview
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white mt-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-primary-700/30 hover:scale-105"
            >
              <Briefcase className="h-4 w-4" />
              Projects
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white mt-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-primary-700/30 hover:scale-105"
            >
              <MessageSquare className="h-4 w-4" />
              Messages
              <span className="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">3</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white mt-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-primary-700/30 hover:scale-105"
            >
              <CreditCard className="h-4 w-4" />
              Payments
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white mt-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-primary-700/30 hover:scale-105"
            >
              <FileText className="h-4 w-4" />
              Invoices
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white mt-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-primary-700/30 hover:scale-105"
            >
              <Users className="h-4 w-4" />
              Clients
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white mt-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-primary-700/30 hover:scale-105"
            >
              <Award className="h-4 w-4" />
              Achievements
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 hover:text-primary-900 dark:text-gray-400 dark:hover:text-white mt-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-primary-700/30 hover:scale-105"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white font-medium dark:from-primary-400 dark:to-accent shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              {userEmail ? userEmail.charAt(0).toUpperCase() : "JD"}
            </div>
                <div>
              <div className="font-medium text-gray-900 dark:text-white">{userEmail || "John Doe"}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Pro Freelancer</div>
                </div>
              </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-6 dark:border-gray-700 dark:bg-primary-800 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
          <button
            className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-primary-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-semibold text-lg text-primary-600 hover:text-primary-700 group"
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Home</span>
            </Link>
          </div>
          <div className="w-full max-w-md">
              <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <input
                  type="search"
                  placeholder="Search..."
                className="w-full rounded-md border border-gray-300 bg-white pl-9 pr-4 py-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-primary-800/50 dark:text-white dark:placeholder-gray-400 dark:focus:border-accent transition-all duration-300 hover:border-primary-400 dark:hover:border-accent/70"
                />
              </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <button 
              className="rounded-lg relative bg-primary-600 px-2 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-700 transition-all duration-300 hover:scale-105 group"
              aria-label="Notifications"
            >
            <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white group-hover:scale-110 transition-transform duration-300">3</span>
            <span className="sr-only">Notifications</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white font-medium shadow-md hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-300">
              {userEmail ? userEmail.charAt(0).toUpperCase() : "JD"}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Welcome back, {userEmail ? userEmail.split('@')[0] : "John"}
            </div>
          </div>

          {/* Stats overview */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Earnings</h3>
                <DollarSign className="h-5 w-5 text-accent group-hover:text-accent-400 transition-colors duration-300" />
              </div>
              <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$12,450</div>
              <div className="mt-1 flex items-center text-xs text-green-500">
                <TrendingUp className="mr-1 h-3 w-3" />
                    +14.5% from last month
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Projects</h3>
                <Briefcase className="h-5 w-5 text-accent group-hover:text-accent-400 transition-colors duration-300" />
              </div>
              <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">7</div>
              <div className="mt-1 flex items-center text-xs text-green-500">
                <TrendingUp className="mr-1 h-3 w-3" />
                    +2 new this week
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Completion Rate</h3>
                <BarChart3 className="h-5 w-5 text-accent group-hover:text-accent-400 transition-colors duration-300" />
                  </div>
              <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{progressValues.completionRate}%</div>
              <div className="mt-2">
                <ProgressSimple 
                  value={progressValues.completionRate} 
                  className="h-2" 
                  variant="gradient" 
                  animated
                />
                  </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
                        <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Upcoming Tasks</h3>
                <Calendar className="h-5 w-5 text-accent group-hover:text-accent-400 transition-colors duration-300" />
              </div>
              <div className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">5</div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Next: Client Meeting (2h)
              </div>
            </div>
          </div>

          {/* Monthly Progress Charts */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Activity className="h-5 w-5 mr-2 text-accent" />
              Progress Metrics
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Client Satisfaction</h3>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-medium">Excellent</div>
                          </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{progressValues.clientSatisfaction}%</div>
                  <Star className="h-5 w-5 text-yellow-400" />
                        </div>
                <div className="mt-2">
                  <ProgressSimple 
                    value={progressValues.clientSatisfaction} 
                    className="h-2" 
                    variant="success" 
                    animated
                  />
                        </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <div key={rating} className="flex flex-col items-center">
                      <div className="font-medium text-gray-900 dark:text-white">★{rating}</div>
                      <div className="text-gray-500 dark:text-gray-400">{90 - (rating * 15)}%</div>
                      </div>
                    ))}
                  </div>
              </div>
              
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-700 dark:text-gray-300">Monthly Goal Progress</h3>
                  <div className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 font-medium">In Progress</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">${progressValues.monthlyGoal * 100}</div>
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-2">
                  <ProgressSimple 
                    value={progressValues.monthlyGoal} 
                    className="h-2" 
                    variant="warning" 
                    animated
                  />
                </div>
                <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div>Current: $7,200</div>
                  <div>Target: $10,000</div>
                </div>
                        </div>
                        </div>
                      </div>

          {/* Recent activity */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Clock className="h-5 w-5 mr-2 text-accent" />
              Recent Activity
            </h2>
            <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-primary-800 shadow-sm">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-primary-700/30 transition-colors duration-200 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 dark:bg-primary-700/50 dark:text-primary-100 group-hover:scale-110 transition-transform duration-300">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">New Message</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Client feedback on logo design</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mr-2">2h ago</div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors duration-200" />
            </div>
                </li>
                <li className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-primary-700/30 transition-colors duration-200 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 dark:bg-green-700/30 dark:text-green-300 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="h-5 w-5" />
                        </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Payment Received</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">$450 for Logo Design project</div>
                        </div>
                      </div>
                  <div className="flex items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mr-2">Yesterday</div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors duration-200" />
                  </div>
                </li>
                <li className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-primary-700/30 transition-colors duration-200 cursor-pointer group">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 dark:bg-blue-700/30 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="h-5 w-5" />
                          </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Project Completed</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Website Redesign for Tech Co.</div>
                        </div>
                      </div>
                  <div className="flex items-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mr-2">2 days ago</div>
                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors duration-200" />
                  </div>
                </li>
              </ul>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-2 text-sm font-medium text-accent hover:text-accent-600 dark:hover:text-accent-400 flex items-center justify-center group transition-colors duration-200">
                  <span>View All Activity</span>
                  <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <Globe className="h-5 w-5 mr-2 text-accent" />
              Analytics Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">New Clients</h3>
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">+12</div>
                <div className="mt-2 text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>Up 30% from last month</span>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Avg. Project Value</h3>
                  <BarChart className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">$1,842</div>
                <div className="mt-2 text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>Up 12.5% from last month</span>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-primary-800 hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">On-time Delivery</h3>
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">98.3%</div>
                <div className="mt-2 text-xs text-green-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>Up 2.1% from last month</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
