"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "danger" | "success" | "warning" | "gradient";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: "default" | "full" | "none";
  glassmorphism?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    isLoading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    rounded = "default",
    glassmorphism = false,
    children,
    disabled,
    ...props 
  }, ref) => {
    // Base styles
    const baseStyles = cn(
      "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500",
      "active:scale-[0.98]",
      isLoading && "cursor-not-allowed",
      disabled && "opacity-50 cursor-not-allowed",
      fullWidth && "w-full",
      
      // Rounded styles
      rounded === "full" && "rounded-full",
      rounded === "default" && "rounded-md",
      rounded === "none" && "rounded-none",
      
      // Glassmorphism effect
      glassmorphism && "backdrop-blur-md bg-opacity-80 shadow-lg"
    );
    
    // Variants
    const variantStyles = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-md hover:shadow-lg",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-md hover:shadow-lg",
      outline: "bg-transparent border-2 border-primary-500 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-800",
      ghost: "bg-transparent text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-800",
      link: "bg-transparent text-primary-600 hover:underline p-0 h-auto",
      danger: "bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 shadow-md hover:shadow-lg",
      success: "bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 shadow-md hover:shadow-lg",
      warning: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700 shadow-md hover:shadow-lg",
      gradient: "bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600 shadow-md hover:shadow-lg",
    };
    
    // Sizes
    const sizeStyles = {
      xs: "h-7 px-2.5 text-xs",
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-11 px-5 text-base",
      xl: "h-12 px-6 text-lg",
      icon: {
        xs: "h-7 w-7",
        sm: "h-9 w-9",
        md: "h-10 w-10",
        lg: "h-11 w-11",
        xl: "h-12 w-12",
      },
    };
    
    const getSizeStyle = () => {
      if (size === "icon") {
        return sizeStyles.icon.md;
      }
      
      return sizeStyles[size];
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          getSizeStyle(),
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!isLoading && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
