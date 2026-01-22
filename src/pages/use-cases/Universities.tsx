import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../../components'

const benefits = [
  {
    title: 'Shared Resources',
    description: 'Allow multiple research groups to share GPU resources efficiently.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Maximize the value of limited hardware budgets.',
  },
  {
    title: 'Easy Access',
    description: 'Provide students and researchers with simple API access to AI models.',
  },
  {
    title: 'Research Ready',
    description: 'Deploy custom models alongside state-of-the-art open-source options.',
  },
]

export default function Universities() {
  return (
    <>
      <Helmet>
        <title>Universities - GreenThread</title>
        <meta name="description" content="Maximize GPU utilization across research groups with shared AI inference infrastructure." />
      </Helmet>

      <Hero
        title="Built for Universities"
        subtitle="Maximize the value of your GPU investment by sharing inference resources across departments, research groups, and students—without conflicts or complexity."
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
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Democratize AI research</h2>
              <p className="text-lg text-gray-600 mb-8">
                University GPU clusters are expensive and often underutilized. GreenThread lets you serve many research groups from the same hardware, with fair scheduling and isolation between users.
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
              className="space-y-4"
            >
              {['Computer Science', 'Biology', 'Physics', 'Engineering', 'Medicine'].map((dept, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold text-sm">
                    {dept[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{dept} Dept</div>
                    <div className="text-sm text-gray-500">Shared GPU access</div>
                  </div>
                  <div className="text-brand-primary text-sm font-medium">Active</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to power research?"
        subtitle="Learn how GreenThread can maximize your university's GPU investment."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
