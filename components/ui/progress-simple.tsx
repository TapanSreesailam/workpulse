"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressSimpleProps {
  value?: number
  max?: number
  className?: string
  indicatorClassName?: string
  variant?: 'default' | 'gradient' | 'success' | 'warning' | 'error'
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  animated?: boolean
}

const ProgressSimple = React.forwardRef<
  HTMLDivElement,
  ProgressSimpleProps
>(({ 
  className, 
  value = 0, 
  max = 100,
  indicatorClassName, 
  variant = 'default',
  showValue = false,
  size = 'md',
  animated = false,
  ...props 
}, ref) => {
  const [progress, setProgress] = React.useState(0)
  
  React.useEffect(() => {
    const timeout = setTimeout(() => setProgress(value), 100)
    return () => clearTimeout(timeout)
  }, [value])

  const getHeight = () => {
    switch (size) {
      case 'sm': return 'h-1.5';
      case 'md': return 'h-2.5';
      case 'lg': return 'h-4';
      default: return 'h-2.5';
    }
  }

  const getIndicatorStyles = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
      case 'success':
        return 'bg-emerald-500';
      case 'warning':
        return 'bg-amber-500';
      case 'error':
        return 'bg-rose-500';
      default:
        return 'bg-primary-600 dark:bg-primary-500';
    }
  }
  
  const percentage = Math.min(100, Math.max(0, (progress / max) * 100))
  
  return (
    <div className={cn("w-full", showValue && "relative", className)} ref={ref} {...props}>
      <div
        className={cn(
          "relative overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800",
          getHeight(),
          "backdrop-blur-sm shadow-sm"
        )}
      >
        <div
          className={cn(
            "h-full flex-1",
            getIndicatorStyles(),
            animated && "transition-all duration-300 ease-in-out",
            indicatorClassName
          )}
          style={{ 
            width: `${percentage}%`,
            transition: animated ? 'width 0.5s cubic-bezier(0.65, 0, 0.35, 1)' : undefined
          }}
        />
      </div>
      
      {showValue && (
        <span className="absolute -top-6 right-0 text-xs font-medium text-gray-700 dark:text-gray-300">
          {progress}%
        </span>
      )}
    </div>
  )
})
ProgressSimple.displayName = "ProgressSimple"

export { ProgressSimple } 