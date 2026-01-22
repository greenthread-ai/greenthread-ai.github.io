import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          flex-1 px-6 py-4 text-base border border-beige-300 rounded-lg bg-white text-gray-900
          transition-all duration-200 font-sans shadow-sm
          focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary
          disabled:opacity-50 disabled:cursor-not-allowed
          placeholder:text-gray-400
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input
