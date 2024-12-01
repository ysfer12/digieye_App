import * as React from "react"
 
import { cn } from "@/lib/utils"
 
type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.ForwardedRef<HTMLDivElement>
}

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.ForwardedRef<HTMLDivElement>
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  ref?: React.ForwardedRef<HTMLParagraphElement>
}

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & {
  ref?: React.ForwardedRef<HTMLParagraphElement>
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.ForwardedRef<HTMLDivElement>
}

type CardFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.ForwardedRef<HTMLDivElement>
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("p-6 pt-0", className)}
      {...props}
    />
  )
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }