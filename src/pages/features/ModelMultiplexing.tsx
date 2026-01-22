import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, Container, Card } from '../../components'

const benefits = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Reduce infrastructure costs',
    description: 'Run multiple models on fewer GPUs. Stop paying for idle compute while models wait for requests.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Maintain low latency',
    description: 'Subsecond switching means users never notice when models are being multiplexed behind the scenes.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Scale effortlessly',
    description: 'Add new models without provisioning new hardware. Your existing fleet automatically accommodates growth.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: 'Simplify operations',
    description: 'One platform manages all your models. No more juggling separate deployments for each model variant.',
  },
]

export default function ModelMultiplexing() {
  return (
    <>
      <Helmet>
        <title>Model Multiplexing - GreenThread</title>
        <meta name="description" content="Dynamically context switch between AI models on the same GPU hardware with subsecond performance." />
      </Helmet>

      <Hero
        title={
          <>
            Model <span className="italic font-normal">Multiplexing</span>
          </>
        }
        subtitle="At the core of GreenThread's inference engine lies Model Multiplexing—the ability to dynamically context switch between AI models on the same GPU hardware with subsecond performance."
      />

      {/* Inference Router Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Intelligent inference routing</h2>
              <p className="text-xl text-gray-700 mb-4">
                Every inference request flows through our distributed routing layer, which makes real-time decisions about where and how to execute each request.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The inference router doesn't just load balance—it understands model requirements, current GPU memory state, request priorities, and queue depths across your entire fleet. When a request arrives, the router identifies the optimal execution path in microseconds.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-gray-600 text-sm">Requests</div>
              </div>
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="bg-brand-primary/10 border-2 border-brand-primary rounded-lg p-4 text-center">
                <div className="text-brand-primary font-semibold text-sm">Inference Router</div>
              </div>
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-gray-600 text-sm">GPU Fleet</div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Context Switching Section */}
      <section className="py-24 bg-brand-dark text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium mb-6">Subsecond context switching</h2>
              <p className="text-xl text-gray-300 mb-4">Traditional model loading takes minutes. GreenThread does it in milliseconds.</p>
              <p className="text-gray-400 leading-relaxed mb-8">
                When demand shifts between models, our engine performs context switches that move models in and out of GPU memory with remarkable speed. This isn't cold loading from disk—it's intelligent memory management that keeps your most-used models warm and ready.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-brand-primary">&lt;500ms</div>
                  <div className="text-gray-400 text-sm">Typical context switch time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">Zero</div>
                  <div className="text-gray-400 text-sm">Dropped requests during switches</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-surface rounded-xl p-8"
            >
              <div className="text-sm text-gray-400 mb-4">GPU Memory</div>
              <div className="space-y-3">
                <div className="bg-brand-primary/20 border border-brand-primary rounded-lg p-3 text-brand-primary text-sm">
                  Model A (Active)
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-3 text-yellow-500 text-sm animate-pulse">
                  Model B (Switching)
                </div>
                <div className="bg-gray-700 rounded-lg p-3 text-gray-400 text-sm">
                  Model C (Standby)
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Model Filesystem Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">The GreenThread Model Filesystem</h2>
              <p className="text-xl text-gray-700 mb-4">Purpose-built storage that treats AI models as first-class citizens.</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our model filesystem is engineered specifically for the unique access patterns of AI inference. Models are chunked, indexed, and distributed across high-speed storage tiers.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Optimized for large sequential reads typical of model loading
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent caching across memory, NVMe, and distributed storage
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic model sharding for multi-GPU deployments
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Built-in versioning and rollback capabilities
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { label: 'GPU VRAM', speed: 'Fastest' },
                { label: 'System Memory', speed: 'Fast' },
                { label: 'NVMe Cache', speed: 'Quick' },
                { label: 'Distributed Storage', speed: 'Scalable' },
              ].map((tier, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <span className="font-medium text-gray-900">{tier.label}</span>
                  <span className="text-brand-primary text-sm">{tier.speed}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Why Model Multiplexing matters</h2>
            <p className="text-lg text-gray-600">Transform GPU economics without sacrificing performance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="feature" className="h-full text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
