import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const benefits = [
  {
    title: 'Data Sovereignty',
    description: 'Keep all data within your security perimeter. No data ever leaves your infrastructure.',
  },
  {
    title: 'Cost Control',
    description: 'Predictable licensing costs instead of unpredictable API charges.',
  },
  {
    title: 'Compliance Ready',
    description: 'Meet regulatory requirements with on-premise deployment and audit logging.',
  },
  {
    title: 'Customization',
    description: 'Deploy your own fine-tuned models alongside open-source options.',
  },
]

export default function PrivateEnterprise() {
  return (
    <>
      <Helmet>
        <title>Private Enterprise - GreenThread</title>
        <meta name="description" content="Deploy AI inference in your own data center with full data sovereignty and compliance controls." />
      </Helmet>

      <Hero
        title="Built for Private Enterprise"
        subtitle="Deploy AI inference within your own security perimeter. Full data sovereignty, compliance controls, and predictable costs for enterprise workloads."
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
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Your data stays yours</h2>
              <p className="text-lg text-gray-600 mb-8">
                Many enterprises can't use cloud AI services due to data sensitivity, regulatory requirements, or security policies. GreenThread deploys entirely within your infrastructure—no data ever leaves your control.
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
              <div className="relative">
                <div className="w-64 h-64 border-4 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div className="text-gray-600 font-medium">Your Data Center</div>
                    <div className="text-sm text-gray-400 mt-2">GreenThread runs here</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready for private AI?"
        subtitle="Learn how GreenThread can power AI inference within your enterprise infrastructure."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
