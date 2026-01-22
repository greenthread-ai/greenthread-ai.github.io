import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'New revenue stream',
    description: 'Generate income from GPU capacity that\'s currently producing nothing. Shared inference revenue supplements dedicated compute sales.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: 'Massive model selection',
    description: 'Offer more models than AWS Bedrock or Azure AI. Model multiplexing means your catalog scales without infrastructure cost.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Instant model deployment',
    description: 'Add new models to your catalog in minutes, not weeks. Respond to customer requests and market trends immediately.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Enterprise-ready',
    description: 'Built-in guardrails, compliance reporting, and multi-tenant isolation. Win enterprise deals with security-first infrastructure.',
  },
]

export default function NeoClouds() {
  return (
    <>
      <Helmet>
        <title>NeoClouds - GreenThread</title>
        <meta name="description" content="Turn your idle GPU compute into a world-class inference platform that rivals the hyperscalers." />
      </Helmet>

      <Hero
        title="Built for NeoClouds"
        subtitle="Your customers don't want GPUs. They want AI inference. Turn your idle compute into a world-class inference platform that rivals the hyperscalers."
      />

      {/* Monetize Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Monetize every GPU hour</h2>
              <p className="text-xl text-gray-700 mb-4">Your GPUs are sitting idle. GreenThread turns them into revenue.</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Most NeoCloud GPU fleets run at 30-40% utilization. That's not a capacity problem—it's an opportunity. GreenThread lets you offer shared inference services on your existing hardware.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-brand-primary">60%</div>
                  <div className="text-gray-600 text-sm">of GPU capacity typically sits idle</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-primary">3x</div>
                  <div className="text-gray-600 text-sm">revenue potential from same hardware</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="p-6">
                <div className="text-sm text-gray-500 mb-4">Without GreenThread</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Dedicated workloads</span>
                      <span>35%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Idle capacity</span>
                      <span>65%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-gray-400 rounded-full" style={{ width: '65%' }} />
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 ring-2 ring-brand-primary">
                <div className="text-sm text-brand-primary font-semibold mb-4">With GreenThread</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Dedicated workloads</span>
                      <span>35%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Shared inference</span>
                      <span>50%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-brand-primary rounded-full" style={{ width: '50%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Burst reserve</span>
                      <span>15%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: '15%' }} />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Compete with the hyperscalers</h2>
            <p className="text-lg text-gray-600">Differentiate on model availability, not just price</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="feature" className="h-full">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to transform your GPU fleet?"
        subtitle="See how GreenThread can help you monetize idle capacity and compete with the hyperscalers."
        primaryButton={{ text: 'Talk to Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
