import { Helmet } from 'react-helmet-async'
import { Hero, Features, Benefits, CTA, HeroBadge, WaitlistForm } from '../components'

const homeFeatures = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: '50+ models per GPU node',
    description: 'Run an order of magnitude more models on the same hardware — without cold starts.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
      </svg>
    ),
    title: 'Sub-2s deterministic model wake',
    description: 'Predictable model activation in seconds, not tens of seconds. No engine restarts required.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
        <path d="M12 5V3M12 21V19M19 12H21M3 12H5M18.36 18.36L19.78 19.78M4.22 4.22L5.64 5.64M18.36 5.64L19.78 4.22M4.22 19.78L5.64 18.36" strokeLinecap="round" />
      </svg>
    ),
    title: 'Zero engine restart overhead',
    description: 'No Python, CUDA, or runtime reinitialisation on model switch. The inference engine stays resident.',
  },
]

const homeBenefits = [
  { text: 'Host large model catalogs without one-model-per-GPU economics' },
  { text: 'Handle bursty demand without cold starts' },
  { text: 'Maintain data sovereignty and infrastructure control' },
]

const homeStats = [
  { value: '~1s', label: 'Sub-second model wake time (P50)' },
  { value: '~2-3s', label: 'P95 wake latency across hundreds of transitions' },
  { value: '99.9%', label: 'Uptime for enterprise deployments' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GreenThread - Distributed AI Infrastructure</title>
        <meta
          name="description"
          content="Run 10x more AI models on the same GPUs without cold starts. GreenThread is a high-density inference engine with sub-2s model wake times. OpenAI API compatible."
        />
      </Helmet>

      <Hero
        variant="home"
        badge={
          <HeroBadge
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L9.79611 6.20389L16 8L9.79611 9.79611L8 16L6.20389 9.79611L0 8L6.20389 6.20389L8 0Z" />
              </svg>
            }
          >
            OpenAI API Compatible
          </HeroBadge>
        }
        title={
          <>
            Run 10× more AI models on the same GPUs{' '}
            <span className="text-brand-primary font-semibold">without cold starts</span>
          </>
        }
        subtitle="GreenThread is a high-density inference engine that keeps execution resident and swaps model state on demand. OpenAI-compatible, enterprise-ready, and built for operators who care about utilisation, latency, and control."
      >
        <div className="mb-16">
          <WaitlistForm />
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-gray-500">Trusted by teams at</span>
          <div className="flex gap-3 flex-wrap justify-center">
            <span className="px-4 py-2 bg-white border border-beige-300 rounded-lg text-sm font-medium text-gray-600">
              Hyperscalers
            </span>
            <span className="px-4 py-2 bg-white border border-beige-300 rounded-lg text-sm font-medium text-gray-600">
              Enterprises
            </span>
            <span className="px-4 py-2 bg-white border border-beige-300 rounded-lg text-sm font-medium text-gray-600">
              AI Companies
            </span>
          </div>
        </div>
      </Hero>

      <Features
        title="Built for high-density inference"
        subtitle="Serve many models concurrently without dedicating hardware"
        features={homeFeatures}
      />

      <Benefits
        title="Designed for GPU operators"
        description="Most inference platforms restart the engine when switching models. GreenThread keeps the engine alive and swaps model state instead — so GPUs stay busy and models stay responsive."
        benefits={homeBenefits}
        stats={homeStats}
        ctaText="Talk to Sales"
        ctaHref="mailto:sales@greenthread.ai"
      />

      <CTA
        title="Lower cost per model served"
        subtitle="By sharing GPUs across many workloads without cold starts. Join the waitlist for early access."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
