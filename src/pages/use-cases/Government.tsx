import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const benefits = [
  {
    title: 'Air-Gapped Operation',
    description: 'Deploy in completely isolated networks with zero external dependencies.',
  },
  {
    title: 'Compliance Ready',
    description: 'Meet strict government security standards and regulatory requirements.',
  },
  {
    title: 'Data Sovereignty',
    description: 'Ensure all data processing happens within approved boundaries.',
  },
  {
    title: 'Audit Logging',
    description: 'Complete audit trails for all inference activity.',
  },
]

export default function Government() {
  return (
    <>
      <Helmet>
        <title>Government - GreenThread</title>
        <meta name="description" content="Secure, compliant AI inference for government agencies with air-gapped deployment options." />
      </Helmet>

      <Hero
        title="Built for Government"
        subtitle="Deploy AI inference in the most secure environments. Air-gapped operation, comprehensive compliance controls, and audit logging for government and defense applications."
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
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Security without compromise</h2>
              <p className="text-lg text-gray-600 mb-8">
                Government agencies need AI capabilities but can't compromise on security. GreenThread provides powerful AI inference that meets the strictest security requirements, including air-gapped deployment for classified environments.
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
                <div className="w-64 h-64 border-4 border-brand-primary rounded-2xl flex items-center justify-center bg-brand-primary/5">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div className="text-brand-primary font-semibold">Secure Environment</div>
                    <div className="text-sm text-gray-500 mt-2">Air-gapped capable</div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  SECURED
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready for secure AI?"
        subtitle="Contact our team to discuss your government deployment requirements."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
