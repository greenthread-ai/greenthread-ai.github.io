import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'feature' | 'stat'
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white border border-beige-200 rounded-xl p-6 shadow-sm',
    feature: 'bg-white border border-beige-200 rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300',
    stat: 'bg-white border border-beige-200 rounded-xl p-6 shadow-sm',
  }

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
