import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Card from './Card'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeaturesProps {
  title: string
  subtitle: string
  features: Feature[]
}

export default function Features({ title, subtitle, features }: FeaturesProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="feature" className="h-full">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
