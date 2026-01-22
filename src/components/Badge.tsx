import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block px-5 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-brand-primary-hover text-sm font-semibold tracking-tight transition-all hover:bg-brand-primary/15 hover:border-brand-primary hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </span>
  )
}
