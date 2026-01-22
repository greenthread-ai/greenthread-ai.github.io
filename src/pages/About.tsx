import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, Team, Container, Card } from '../components'
import { teamGroups, investors } from '../constants'

const solutionCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
    title: 'Multi-model GPU sharing',
    description: 'Run multiple AI models simultaneously on the same GPU hardware. Our intelligent scheduling ensures optimal resource allocation without bottlenecks or interference between workloads.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Zero capability compromise',
    description: "Sharing doesn't mean sacrificing. Each model runs with full access to the compute it needs, when it needs it. Latency targets are met. Throughput is maintained. Quality never drops.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
    title: 'Distributed intelligence',
    description: 'Our engine spans across your entire GPU fleet—cloud, on-prem, or hybrid. Work is automatically distributed to where capacity exists, maximizing utilization across every available resource.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Dramatic cost reduction',
    description: 'When you use 90% of your GPU instead of 20%, the economics change entirely. Our customers typically see 3-5x better cost efficiency compared to traditional single-model deployments.',
  },
]

const complianceCards = [
  { title: 'ISO 27001:2022', description: 'Information security management systems' },
  { title: 'ISO 42001:2023', description: 'AI management systems' },
  { title: 'SOC 1 Type 2', description: 'Financial reporting controls' },
  { title: 'SOC 2 Type 2', description: 'Security, availability & confidentiality' },
  { title: 'HITRUST', description: 'Healthcare information security' },
  { title: 'PCI-DSS 4.0', description: 'Payment card data security' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - GreenThread</title>
        <meta name="description" content="At GreenThread, we believe exceptional AI infrastructure shouldn't come with an exceptional price tag." />
      </Helmet>

      <Hero
        title={
          <>
            More for <span className="italic font-normal">less</span>
          </>
        }
        subtitle="At GreenThread, we believe exceptional AI infrastructure shouldn't come with an exceptional price tag. Our highly skilled team has built a platform that delivers enterprise-grade distributed inference at a fraction of the cost."
      />

      {/* GPU Utilization Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">The GPU utilization problem</h2>
              <p className="text-xl text-gray-700 mb-4">
                Most GPUs in production environments sit idle 70-80% of the time. That's millions of dollars in hardware doing nothing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Traditional inference deployments dedicate entire GPUs to single models, regardless of actual demand. During off-peak hours, between requests, or when running smaller models—expensive hardware sits waiting. It's an inefficiency the industry has simply accepted.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center p-12">
                <div className="text-6xl font-bold text-red-500 mb-4">70-80%</div>
                <div className="text-gray-600">Average GPU idle time in traditional deployments</div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Run more. Pay less. Compromise nothing.</h2>
            <p className="text-lg text-gray-600">GreenThread's distributed inference engine transforms how GPUs are utilized</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutionCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="feature" className="h-full">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-6">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Team
        title="Meet the Team"
        subtitle="The people making distributed AI accessible to everyone"
        groups={teamGroups}
      />

      {/* Security Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">
              Built in Australia to the highest security standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security isn't optional—it's foundational. GreenThread is built from the ground up to meet the most demanding compliance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center p-8">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Backed By Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Backed by Australia's Best</h2>
            <p className="text-lg text-gray-600">Supported by three of Australia's top Venture Capital firms</p>
          </div>
          <div className="flex flex-col items-center gap-12">
            {/* First row - Antler */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={investors[0].logo} alt={investors[0].name} className="h-24 w-auto mx-auto mb-4 grayscale hover:grayscale-0 transition-all" />
              <span className="text-gray-600 text-sm">{investors[0].name}</span>
            </motion.div>

            {/* Second row - Black Nova and ArchAngel */}
            <div className="flex justify-center items-center gap-16">
              {investors.slice(1).map((investor, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                >
                  <img src={investor.logo} alt={investor.name} className={`h-16 w-auto mx-auto mb-4 grayscale hover:grayscale-0 transition-all ${investor.className || ''}`} />
                  <span className="text-gray-600 text-sm">{investor.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
