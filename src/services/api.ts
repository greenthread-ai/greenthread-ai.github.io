export interface WaitlistResponse {
  message: string
  attio_url?: string
}

export async function submitWaitlist(email: string): Promise<WaitlistResponse> {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.')
  }

  return data
}
