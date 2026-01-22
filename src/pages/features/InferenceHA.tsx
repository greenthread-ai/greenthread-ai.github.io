import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const haFeatures = [
  {
    title: 'Automatic Failover',
    description: 'When a node fails, traffic is automatically rerouted to healthy nodes with zero manual intervention.',
  },
  {
    title: 'Health Monitoring',
    description: 'Continuous health checks across your entire fleet detect issues before they impact users.',
  },
  {
    title: 'Load Balancing',
    description: 'Intelligent request distribution ensures optimal resource utilization across all available nodes.',
  },
  {
    title: 'Rolling Updates',
    description: 'Deploy updates without downtime through graceful node rotation and traffic draining.',
  },
]

export default function InferenceHA() {
  return (
    <>
      <Helmet>
        <title>Inference HA - GreenThread</title>
        <meta name="description" content="Enterprise-grade high availability for AI inference with automatic failover and zero downtime." />
      </Helmet>

      <Hero
        title={
          <>
            Inference <span className="italic font-normal">High Availability</span>
          </>
        }
        subtitle="Enterprise-grade reliability for mission-critical AI workloads. Automatic failover, health monitoring, and zero-downtime deployments built into every installation."
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
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Built for 99.99% uptime</h2>
              <p className="text-lg text-gray-600 mb-8">
                GreenThread is designed from the ground up for high availability. Every component is redundant, every failure mode is handled, and every deployment is resilient.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-brand-primary">99.99%</div>
                  <div className="text-gray-600 text-sm">Target availability</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-primary">&lt;1s</div>
                  <div className="text-gray-600 text-sm">Failover time</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {haFeatures.map((feature, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <CTA
        title="Need enterprise reliability?"
        subtitle="Talk to our team about high availability configurations for your workloads."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
