import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { featuresLinks, useCasesLinks } from '../constants'

interface DropdownProps {
  label: string
  links: { href: string; label: string }[]
}

function Dropdown({ label, links }: DropdownProps) {
  return (
    <div className="relative group">
      <button className="text-gray-700 text-[0.9375rem] font-medium hover:text-brand-primary transition-colors flex items-center gap-1">
        {label}
        <svg
          className="w-3 h-3 transition-transform group-hover:rotate-180"
          fill="none"
          viewBox="0 0 12 12"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="block px-5 py-3 text-gray-700 text-[0.9375rem] font-medium hover:bg-gray-50 hover:text-brand-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-beige-50/95 backdrop-blur-sm border-b border-beige-200 z-[1000] transition-shadow ${
        hasScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="GreenThread" className="h-14 w-auto" />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/about"
            className="text-gray-700 text-[0.9375rem] font-medium hover:text-brand-primary transition-colors"
          >
            About
          </Link>
          <Dropdown label="Features" links={featuresLinks} />
          <Dropdown label="Use Cases" links={useCasesLinks} />
          <Link
            to="/pricing"
            className="text-gray-700 text-[0.9375rem] font-medium hover:text-brand-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/technology"
            className="text-gray-700 text-[0.9375rem] font-medium hover:text-brand-primary transition-colors"
          >
            Technology
          </Link>
          <Button href="mailto:sales@greenthread.ai">Contact Sales</Button>
        </div>
      </div>
    </nav>
  )
}
