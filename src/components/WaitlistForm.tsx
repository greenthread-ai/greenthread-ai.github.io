import { useState, FormEvent } from 'react'
import Input from './Input'
import Button from './Button'
import { submitWaitlist } from '../services'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email.trim()) return

    setStatus('loading')
    setMessage('')

    try {
      await submitWaitlist(email)
      setStatus('success')
      setMessage("Thanks for joining! We'll be in touch soon.")
      setEmail('')
    } catch (error) {
      // Show success even on error (matching original behavior)
      setStatus('success')
      setMessage("Thanks for joining! We'll be in touch soon.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex gap-3 items-stretch">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          className="flex-1"
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === 'loading'}
          className="whitespace-nowrap"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Joining...
            </span>
          ) : (
            'Join the Waitlist'
          )}
        </Button>
      </div>

      {message && (
        <p
          className={`mt-4 text-sm ${
            status === 'success' ? 'text-brand-primary' : 'text-red-500'
          }`}
        >
          {message}
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500">Join the waitlist for early access.</p>
    </form>
  )
}
