import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const deploymentFeatures = [
  {
    title: 'One-Click Deploy',
    description: 'Deploy any model from HuggingFace or your private registry with a single click.',
  },
  {
    title: 'Automatic Optimization',
    description: 'Models are automatically optimized for your hardware during deployment.',
  },
  {
    title: 'Version Management',
    description: 'Roll back to previous versions instantly if issues arise.',
  },
  {
    title: 'A/B Testing',
    description: 'Test new model versions with a subset of traffic before full rollout.',
  },
]

export default function InstantModelDeployment() {
  return (
    <>
      <Helmet>
        <title>Instant Model Deployment - GreenThread</title>
        <meta name="description" content="Deploy AI models in seconds, not hours. One-click deployment with automatic optimization." />
      </Helmet>

      <Hero
        title={
          <>
            Instant Model <span className="italic font-normal">Deployment</span>
          </>
        }
        subtitle="Go from model selection to production in seconds. Deploy models from HuggingFace or your private registry with automatic optimization for your hardware."
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
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Deploy in seconds, not hours</h2>
              <p className="text-lg text-gray-600 mb-8">
                Traditional model deployment involves downloading weights, configuring inference servers, optimizing for hardware, and managing infrastructure. GreenThread handles all of this automatically.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-brand-primary">&lt;30s</div>
                  <div className="text-gray-600 text-sm">Time to production</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-primary">1-click</div>
                  <div className="text-gray-600 text-sm">Deployment process</div>
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
              {deploymentFeatures.map((feature, index) => (
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
        title="Ready to deploy faster?"
        subtitle="See how GreenThread can accelerate your model deployment workflow."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
