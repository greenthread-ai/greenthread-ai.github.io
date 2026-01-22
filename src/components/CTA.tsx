import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'
import Button from './Button'

interface CTAProps {
  title: string
  subtitle: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  children?: ReactNode
}

export default function CTA({ title, subtitle, primaryButton, secondaryButton, children }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-primary-hover">
      <Container>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl font-medium text-white mb-4">{title}</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">{subtitle}</p>

          {children ? (
            children
          ) : (
            <div className="flex justify-center gap-4 flex-wrap">
              {primaryButton && (
                <Button variant="cta" size="lg" href={primaryButton.href}>
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button variant="secondary" size="lg" href={secondaryButton.href}>
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
