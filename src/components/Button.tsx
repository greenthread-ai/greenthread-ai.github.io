import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cta'
  size?: 'default' | 'lg'
  href?: string
  children: ReactNode
  className?: string
}

const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 border-none cursor-pointer text-[0.9375rem] no-underline'

const variants = {
  primary: 'bg-brand-primary text-white shadow-sm hover:bg-brand-primary-hover hover:-translate-y-0.5 hover:shadow-md',
  secondary: 'bg-white text-gray-700 border border-beige-300 shadow-sm hover:bg-beige-50 hover:border-gray-300',
  cta: 'bg-white text-brand-primary shadow-md hover:bg-beige-50 hover:-translate-y-0.5 hover:shadow-lg',
}

const sizes = {
  default: 'px-6 py-3',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    if (href.startsWith('mailto:') || href.startsWith('http')) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
