import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Card variants
const cardVariants = cva(
  "rounded-lg border transition-all duration-200", 
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 dark:border-gray-800 dark:bg-gray-950",
        premium: "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white",
        flat: "border-transparent bg-gray-50 dark:bg-gray-900",
        glass: "backdrop-filter backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-gray-200/50 dark:border-gray-700/30",
        outline: "bg-transparent border-gray-300 dark:border-gray-700",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg", 
        xl: "rounded-xl",
        full: "rounded-3xl",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm hover:shadow",
        md: "shadow-md hover:shadow-lg",
        lg: "shadow-lg hover:shadow-xl",
        inner: "shadow-inner",
      },
      padding: {
        none: "p-0",
        sm: "p-3",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
      },
      hover: {
        none: "",
        subtle: "hover:border-gray-300 dark:hover:border-gray-600",
        lift: "hover:-translate-y-1",
        glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        scale: "hover:scale-[1.02]",
      },
    },
    defaultVariants: {
      variant: "default",
      radius: "lg",
      shadow: "md",
      padding: "md",
      hover: "subtle",
    },
  }
)

interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, radius, shadow, padding, hover, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, radius, shadow, padding, hover }), className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 px-6 pt-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { gradient?: boolean }
>(({ className, gradient = false, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight", 
      gradient && "bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-6 py-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center px-6 pb-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn("border-t border-gray-200 dark:border-gray-800 my-4", className)}
    {...props}
  />
))
CardDivider.displayName = "CardDivider"

const CardBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  }
>(({ className, variant = "primary", ...props }, ref) => {
  const variantClasses = {
    primary: "bg-primary-50 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800/30",
    secondary: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700",
    success: "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800/30",
    danger: "bg-red-50 text-red-700 border-red-100 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800/30",
    warning: "bg-yellow-50 text-yellow-700 border-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800/30",
    info: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800/30",
  };
  
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
})
CardBadge.displayName = "CardBadge"

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardDivider,
  CardBadge,
}
