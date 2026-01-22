import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const complianceFeatures = [
  {
    title: 'Content Filtering',
    description: 'Built-in content moderation to prevent harmful or inappropriate outputs.',
  },
  {
    title: 'Audit Logging',
    description: 'Complete audit trail of all inference requests for compliance reporting.',
  },
  {
    title: 'Access Controls',
    description: 'Fine-grained permissions to control who can access which models.',
  },
  {
    title: 'Data Residency',
    description: 'Keep your data in specific regions to meet regulatory requirements.',
  },
  {
    title: 'Encryption',
    description: 'End-to-end encryption for data in transit and at rest.',
  },
  {
    title: 'Rate Limiting',
    description: 'Configurable limits to prevent abuse and ensure fair usage.',
  },
]

export default function GuardrailsCompliance() {
  return (
    <>
      <Helmet>
        <title>Guardrails & Compliance - GreenThread</title>
        <meta name="description" content="Enterprise-grade security controls and compliance features for responsible AI deployment." />
      </Helmet>

      <Hero
        title={
          <>
            Guardrails & <span className="italic font-normal">Compliance</span>
          </>
        }
        subtitle="Deploy AI responsibly with built-in guardrails, comprehensive audit logging, and compliance controls that meet the most demanding enterprise requirements."
      />

      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Enterprise-ready security</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every feature is designed with security and compliance in mind, giving you the controls you need to deploy AI safely.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="feature" className="h-full">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Need help with compliance?"
        subtitle="Our team can help you understand how GreenThread meets your regulatory requirements."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
