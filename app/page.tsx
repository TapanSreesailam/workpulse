import Image from 'next/image';
import Link from 'next/link';
import { 
  BarChart3, 
  BadgeCheck, 
  ArrowRight, 
  Search, 
  Briefcase, 
  Calendar, 
  CreditCard, 
  TrendingUp, 
  MessageSquare, 
  Trophy, 
  Shield, 
  ChevronRight, 
  Star, 
  Clock, 
  Github, 
  Linkedin, 
  Twitter,
  Mail,
  LogIn
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-secondary py-20 md:py-28">
        <div className="container-content">
          <div className="grid-2 items-center">
            <div className="text-center md:text-left">
              <h1 className="mb-4">TRACK YOUR GROWTH, OWN YOUR JOURNEY</h1>
              <p className="text-lg mb-8">
                Visualize your freelance progress, celebrate milestones, and take control of your professional journey with comprehensive tracking tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="/dashboard" 
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-600 to-accent px-8 font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Start Tracking
                </Link>
                <Link href="/login" className="btn btn-outline flex items-center">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Dashboard Preview" 
                  width={600} 
                  height={400} 
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid-3 mt-16">
            <div className="stat-card">
              <div className="flex items-center justify-center bg-primary-50 p-3 rounded-full mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div className="stat-value">$124,500+</div>
              <div className="stat-label">Total Earnings Tracked</div>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-center bg-primary-50 p-3 rounded-full mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="stat-value">2,400+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="flex items-center justify-center bg-primary-50 p-3 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="stat-value">12,800+</div>
              <div className="stat-label">Positive Testimonials</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Progress Filter Section */}
      <section className="section bg-white">
        <div className="container-content">
          <h2 className="text-center mb-10">Find Your Progress Insights</h2>
          <div className="card shadow-lg p-8 max-w-3xl mx-auto">
            <div className="grid-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Year Range</label>
                <div className="flex gap-4">
                  <select 
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    aria-label="Start Year"
                  >
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                    aria-label="End Year"
                  >
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  aria-label="Project Type"
                >
                  <option>All Projects</option>
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Content Writing</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-2">Transaction Type</label>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-1.5 rounded-full bg-primary text-text-white text-sm">All</button>
                <button className="px-4 py-1.5 rounded-full bg-gray-100 text-text-primary text-sm">Invoices</button>
                <button className="px-4 py-1.5 rounded-full bg-gray-100 text-text-primary text-sm">One-time</button>
                <button className="px-4 py-1.5 rounded-full bg-gray-100 text-text-primary text-sm">Recurring</button>
                <button className="px-4 py-1.5 rounded-full bg-gray-100 text-text-primary text-sm">Contracts</button>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="btn btn-primary flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Search Progress Data
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Metrics Section */}
      <section className="section bg-secondary-500">
        <div className="container-content">
          <h2 className="text-center mb-2">Track What Matters</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Our comprehensive metrics give you a 360° view of your freelance business growth and performance.
          </p>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-4">
              <div className="bg-white rounded-lg shadow-md w-80 flex-none">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Earnings Overview</h3>
                    <CreditCard className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-semibold">$4,250</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Last Month</span>
                    <span className="font-semibold">$3,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year to Date</span>
                    <span className="font-semibold">$38,240</span>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-500">+12% from last year</span>
                      </div>
                      <Link 
                        href="/dashboard"
                        className="text-accent text-sm font-medium hover:underline"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md w-80 flex-none">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Growth Graph</h3>
                    <BarChart3 className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-40 relative">
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-full">
                      <div className="w-8 bg-primary-100 rounded-t relative" style={{height: '40%'}}>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">Jan</span>
                      </div>
                      <div className="w-8 bg-primary-100 rounded-t relative" style={{height: '60%'}}>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">Feb</span>
                      </div>
                      <div className="w-8 bg-primary-100 rounded-t relative" style={{height: '45%'}}>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">Mar</span>
                      </div>
                      <div className="w-8 bg-primary-300 rounded-t relative" style={{height: '75%'}}>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">Apr</span>
                      </div>
                      <div className="w-8 bg-primary-500 rounded-t relative" style={{height: '85%'}}>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">May</span>
                      </div>
                      <div className="w-8 bg-primary-700 rounded-t relative" style={{height: '70%'}}>
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs">Jun</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BadgeCheck className="h-4 w-4 text-accent mr-1" />
                        <span className="text-sm text-gray-600">Monthly tracking</span>
                      </div>
                      <Link 
                        href="/dashboard"
                        className="text-accent text-sm font-medium hover:underline"
                      >
                        Full Analytics
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md w-80 flex-none">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Client Testimonials</h3>
                    <MessageSquare className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="italic text-gray-700 mb-4">
                    "Working with this freelancer has been exceptional. They delivered high-quality work ahead of schedule."
                  </div>
                  <div className="flex items-center mb-6">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                      <span className="font-medium text-gray-700">JD</span>
                    </div>
                          <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-gray-600">Project Manager, Tech Co.</div>
                          </div>
                        </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600">24 testimonials total</span>
                      </div>
                      <Link 
                        href="/dashboard"
                        className="text-accent text-sm font-medium hover:underline"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md w-80 flex-none">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Recent Transactions</h3>
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Website Redesign</div>
                        <div className="text-sm text-gray-600">Jun 28, 2023</div>
                      </div>
                      <div className="text-green-600 font-medium">$1,250</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Logo Design</div>
                        <div className="text-sm text-gray-600">Jun 15, 2023</div>
                      </div>
                      <div className="text-green-600 font-medium">$450</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                        <div className="font-medium">SEO Consulting</div>
                        <div className="text-sm text-gray-600">Jun 10, 2023</div>
                      </div>
                      <div className="text-green-600 font-medium">$850</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-accent mr-1" />
                        <span className="text-sm text-gray-600">Recent activity</span>
                      </div>
                      <Link 
                        href="/dashboard"
                        className="text-accent text-sm font-medium hover:underline"
                      >
                        Transaction History
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="dark-section">
        <div className="container-content">
          <h2 className="text-center text-text-white mb-2">Why Choose WorkPulse</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Our platform gives freelancers the tools they need to track growth, showcase achievements, and make data-driven decisions.
          </p>
          
          <div className="grid-2 gap-8">
            <div className="feature-card bg-primary-600 text-white border-primary-700">
              <div className="bg-primary-500 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="text-text-white">Real-time Earnings Tracking</h3>
              <p className="text-gray-300">Monitor your income streams with precision. See how much you're earning from each client and project category.</p>
            </div>
            <div className="feature-card bg-primary-600 text-white border-primary-700">
              <div className="bg-primary-500 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h3 className="text-text-white">Showcase Testimonials</h3>
              <p className="text-gray-300">Automatically collect and display client testimonials. Build your reputation with verified reviews.</p>
            </div>
            <div className="feature-card bg-primary-600 text-white border-primary-700">
              <div className="bg-primary-500 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-text-white">Secure Transaction History</h3>
              <p className="text-gray-300">Keep all your financial records in one secure place. Export reports for tax season with one click.</p>
            </div>
            <div className="feature-card bg-primary-600 text-white border-primary-700">
              <div className="bg-primary-500 rounded-lg w-14 h-14 flex items-center justify-center mb-4">
                <BarChart3 className="h-7 w-7" />
              </div>
              <h3 className="text-text-white">Advanced Growth Analytics</h3>
              <p className="text-gray-300">Visualize your progress with intuitive charts. Identify trends and optimize your freelance business strategy.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Milestones Section */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid-2 items-center gap-12">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Freelancer Achievements" 
                  width={600} 
                  height={400} 
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2>Celebrate Your Milestones</h2>
              <p className="mb-8">
                Your freelance journey is filled with significant achievements. Our platform helps you track and celebrate these milestones, providing motivation and a clear view of how far you've come.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-none mr-4">
                    <div className="bg-primary-50 rounded-full p-3">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">100+ Projects Delivered</h3>
                    <p className="text-gray-600">Track the number of successful projects you've completed and showcase your experience.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-none mr-4">
                    <div className="bg-primary-50 rounded-full p-3">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">5+ Years of Freelancing</h3>
                    <p className="text-gray-600">Mark your freelancing anniversaries and reflect on your professional growth over time.</p>
                  </div>
            </div>
              </div>
              
              <Link 
                href="/dashboard"
                className="btn btn-primary mt-8 flex items-center"
              >
                <span>Track Your Milestones</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-secondary-500">
        <div className="container-content">
          <h2 className="text-center mb-2">Track Progress Across Categories</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Monitor your growth across different service categories to identify your strengths and opportunities.
          </p>
          
          <div className="grid-4">
            <div className="category-card">
              <div className="bg-primary-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10H6a2 2 0 0 0-2 2v7h16v-7a2 2 0 0 0-2-2Z" />
                  <path d="M5 10V6a1 1 0 0 1 1-1h4" />
                  <path d="M10 5V3" />
                  <path d="M14 5h5a1 1 0 0 1 1 1v3" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Web Development</h3>
              <p className="text-sm text-gray-600 mb-4">Front-end, back-end, and full-stack development projects</p>
              <Link 
                href="/dashboard"
                className="text-accent font-medium text-sm flex items-center hover:underline"
              >
                View Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="category-card">
              <div className="bg-primary-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M12 2v2" />
                  <path d="M12 14v8" />
                  <path d="M9 17h6" />
                  <path d="M5 5.2l1.4 1.4" />
                  <path d="M17.6 6.6 19 5.2" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Graphic Design</h3>
              <p className="text-sm text-gray-600 mb-4">Logos, branding, illustrations, and UI/UX design</p>
              <Link 
                href="/dashboard"
                className="text-accent font-medium text-sm flex items-center hover:underline"
              >
                View Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="category-card">
              <div className="bg-primary-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Writing & Content</h3>
              <p className="text-sm text-gray-600 mb-4">Blogs, articles, copywriting, and content strategy</p>
              <Link 
                href="/dashboard"
                className="text-accent font-medium text-sm flex items-center hover:underline"
              >
                View Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="category-card">
              <div className="bg-primary-50 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12V4" />
                  <path d="M20 12V4" />
                  <path d="M15 4v16h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4v-2" />
                  <path d="M9 20h.01" />
                  <path d="M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h2" />
                  <path d="M5 13v-1h1" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Digital Marketing</h3>
              <p className="text-sm text-gray-600 mb-4">SEO, social media, email marketing, and PPC campaigns</p>
              <Link 
                href="/dashboard"
                className="text-accent font-medium text-sm flex items-center hover:underline"
              >
                View Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instant Action Section */}
      <section className="dark-section">
        <div className="container-content text-center">
          <h2 className="text-text-white mb-4">Connect Your Portfolio Instantly</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Start tracking your freelance journey today. Our platform integrates seamlessly with your existing portfolio and client base.
          </p>
          <Link 
            href="/dashboard"
            className="btn btn-secondary text-lg px-8 py-4"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-700 text-gray-300 py-12">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">WorkPulse</h3>
              <p className="text-sm">
                The complete platform for freelancers to track growth, showcase achievements, and celebrate milestones.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                  </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-600 mt-8 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-sm">&copy; 2023 WorkPulse. All rights reserved.</p>
            <p className="text-sm mt-2 md:mt-0">Designed for freelance success</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
