import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const benefits = [
  {
    title: 'Low Latency',
    description: 'Process inference requests locally for sub-millisecond response times.',
  },
  {
    title: 'Offline Operation',
    description: 'Continue serving inference even when disconnected from the cloud.',
  },
  {
    title: 'Bandwidth Savings',
    description: 'Process data at the source instead of sending everything to the cloud.',
  },
  {
    title: 'Unified Management',
    description: 'Manage all edge deployments from a single control plane.',
  },
]

export default function EdgeComputing() {
  return (
    <>
      <Helmet>
        <title>Edge Computing - GreenThread</title>
        <meta name="description" content="Deploy AI inference at the edge for low-latency, offline-capable AI processing." />
      </Helmet>

      <Hero
        title="Built for the Edge"
        subtitle="Deploy AI inference at the edge for ultra-low latency, offline operation, and bandwidth efficiency. The same GreenThread engine, optimized for distributed edge deployments."
      />

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">AI where you need it</h2>
              <p className="text-lg text-gray-600 mb-8">
                Not all AI workloads can wait for a round trip to the cloud. GreenThread brings the same powerful inference capabilities to edge locations—retail stores, factories, vehicles, and beyond.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-bold text-xs">Central</span>
                  </div>
                </div>
                {['Store 1', 'Factory', 'Warehouse', 'Store 2'].map((loc, index) => (
                  <div
                    key={index}
                    className="absolute w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center text-xs font-medium text-gray-600"
                    style={{
                      top: `${50 + 38 * Math.sin((index * Math.PI) / 2)}%`,
                      left: `${50 + 38 * Math.cos((index * Math.PI) / 2)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready for edge AI?"
        subtitle="Learn how GreenThread can power AI inference at your edge locations."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
