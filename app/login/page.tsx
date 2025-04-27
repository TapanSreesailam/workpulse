"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Frame, Check, AlertCircle, Loader2, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Basic validation
      if (!email.trim()) {
        setError("Email is required")
        setIsLoading(false)
        return
      }
      
      if (!email.includes('@')) {
        setError("Please enter a valid email address")
        setIsLoading(false)
        return
      }

      // For demo purposes, we'll simulate a successful login after a delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login
      setSuccess(true)
      
      // Store login state in localStorage
      localStorage.setItem("workpulse_logged_in", "true")
      localStorage.setItem("workpulse_user_email", email)
      
      // Redirect to the dashboard after a brief delay to show success state
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (err) {
      setError("Login failed. Please try again.")
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-950">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center group">
              <Frame className="h-10 w-10 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300">
                WorkPulse
              </span>
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-400">
              Enter your email to continue to your dashboard
            </p>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 bg-red-900/40 border border-red-800 rounded-md flex items-center text-sm text-red-400">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="p-3 bg-green-900/40 border border-green-800 rounded-md flex items-center text-sm text-green-400">
                    <Check className="h-4 w-4 mr-2" />
                    Login successful! Redirecting to dashboard...
                  </div>
                )}
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email address
                  </Label>
                  <div className="mt-1 relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your-email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-900 border-gray-700 text-white hover:border-blue-500 focus:border-blue-500 transition-colors duration-200 pl-10"
                      disabled={isLoading || success}
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <Checkbox 
                    id="remember-me" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-gray-700 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                    disabled={isLoading || success}
                  />
                  <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                    Remember me
                  </Label>
                </div>

                <div>
                  <Button 
                    type="submit" 
                    className={`w-full flex items-center justify-center hover:scale-[1.02] transition-all duration-300 ${
                      success ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/20"
                    }`}
                    disabled={isLoading || success}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </span>
                    ) : success ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-4 w-4" />
                        Success!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Continue to Dashboard
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-800" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-gray-950 px-2 text-gray-400">Don't have an account?</span>
                </div>
              </div>

              <div className="mt-6">
                <Link 
                  href="/signup"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-900 to-gray-900 overflow-hidden">
          <div className="absolute -inset-1/4 bg-gradient-to-br from-blue-900/30 to-transparent rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          
          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-blue-500/20 animate-float-slow"></div>
          <div className="absolute top-2/3 left-1/3 w-32 h-32 rounded-full bg-pink-500/20 animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-purple-500/20 animate-float-fast"></div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="p-12 max-w-lg">
              <h2 className="text-4xl font-bold text-white mb-6">Track Your Freelance Journey</h2>
              <p className="text-gray-300 text-lg mb-8">Monitor progress, celebrate milestones, and take control of your professional growth.</p>
              <div className="flex space-x-4">
                <div className="bg-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-1">94%</div>
                  <div className="text-sm text-gray-400">Completion Rate</div>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-1">+28%</div>
                  <div className="text-sm text-gray-400">Growth This Year</div>
                </div>
                <div className="bg-blue-600/20 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                  <div className="text-3xl font-bold text-blue-400 mb-1">$12k+</div>
                  <div className="text-sm text-gray-400">Monthly Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
