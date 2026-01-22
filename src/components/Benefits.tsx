import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'
import Card from './Card'

interface Benefit {
  text: string
}

interface Stat {
  value: string
  label: string
}

interface BenefitsProps {
  title: string
  description: string
  benefits: Benefit[]
  stats: Stat[]
  ctaText?: string
  ctaHref?: string
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-brand-primary flex-shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" />
    </svg>
  )
}

export default function Benefits({ title, description, benefits, stats, ctaText, ctaHref }: BenefitsProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">{title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700">{benefit.text}</span>
                </li>
              ))}
            </ul>

            {ctaText && ctaHref && <Button href={ctaHref}>{ctaText}</Button>}
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <Card key={index} variant="stat">
                <div className="text-4xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
