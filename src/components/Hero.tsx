import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Container from './Container'

interface HeroProps {
  title: ReactNode
  subtitle: string
  badge?: ReactNode
  children?: ReactNode
  variant?: 'home' | 'page'
}

export default function Hero({ title, subtitle, badge, children, variant = 'page' }: HeroProps) {
  const isHome = variant === 'home'

  return (
    <section
      className={`flex items-center justify-center text-center relative ${
        isHome ? 'min-h-screen py-32 pt-32' : 'py-32 pt-40'
      }`}
    >
      <Container>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {badge}
            </motion.div>
          )}

          <motion.h1
            className="font-serif text-5xl md:text-6xl font-medium tracking-tight leading-tight text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
