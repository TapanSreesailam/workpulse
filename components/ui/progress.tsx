"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
    variant?: 'default' | 'gradient' | 'success' | 'warning' | 'error';
    showValue?: boolean;
    size?: 'sm' | 'md' | 'lg';
    animated?: boolean;
  }
>(({ 
  className, 
  value, 
  indicatorClassName, 
  variant = 'default',
  showValue = false,
  size = 'md',
  animated = false,
  ...props 
}, ref) => {
  const [progress, setProgress] = React.useState(0)
  
  React.useEffect(() => {
    const timeout = setTimeout(() => setProgress(value || 0), 100)
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
  
  return (
    <div className={cn("w-full", showValue && "relative")}>
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800",
          getHeight(),
          "backdrop-blur-sm shadow-sm",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1",
            getIndicatorStyles(),
            animated && "transition-all duration-300 ease-in-out",
            indicatorClassName
          )}
          style={{ 
            transform: `translateX(-${100 - progress}%)`,
            transition: animated ? 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)' : undefined
          }}
        />
      </ProgressPrimitive.Root>
      
      {showValue && (
        <span className="absolute -top-6 right-0 text-xs font-medium text-gray-700 dark:text-gray-300">
          {progress}%
        </span>
      )}
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
