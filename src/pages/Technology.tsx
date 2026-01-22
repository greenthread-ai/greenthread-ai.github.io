import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, CTA, Container, Card } from '../components'

const problemStats = [
  { value: '15-30%', label: 'Typical GPU utilization', bad: true },
  { value: '1 model', label: 'Per dedicated GPU', bad: true },
  { value: '70-85%', label: 'Wasted capacity', bad: true },
]

const innovations = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: 'Intelligent Memory Management',
    description: 'Our engine manages GPU memory as a unified resource pool, dynamically allocating and deallocating model weights based on request patterns.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Predictive Scheduling',
    description: 'Request routing decisions are made in microseconds using learned patterns. The scheduler predicts which models will be needed and pre-positions resources accordingly.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Zero-Copy Context Switching',
    description: 'Traditional model switching requires expensive memory copies. Our proprietary approach eliminates these copies through innovative memory mapping techniques.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Automatic Optimization',
    description: 'Models are automatically optimized for the target hardware during deployment. Quantization, kernel fusion, and hardware-specific tuning happen transparently.',
  },
]

const performanceStats = [
  { value: '50x', label: 'More models per GPU', description: 'Serve 50+ models from hardware that traditionally served one' },
  { value: '85%+', label: 'GPU utilization', description: 'Compared to industry average of 15-30%' },
  { value: '<5ms', label: 'Model switch time', description: 'Context switch between models in milliseconds' },
  { value: '99.99%', label: 'Availability', description: 'Built-in redundancy and automatic failover' },
]

const deploymentOptions = [
  { icon: '☁️', title: 'Public Cloud', description: 'AWS, GCP, Azure, or any cloud provider' },
  { icon: '🏢', title: 'On-Premise', description: 'Your data center, your control' },
  { icon: '📱', title: 'Edge', description: 'Distributed locations, unified management' },
  { icon: '🔒', title: 'Air-Gapped', description: 'Fully offline, zero external dependencies' },
]

export default function Technology() {
  return (
    <>
      <Helmet>
        <title>Technology - GreenThread</title>
        <meta name="description" content="GreenThread's inference engine fundamentally reimagines how AI models share GPU resources." />
      </Helmet>

      <Hero
        title="The engine behind intelligent inference"
        subtitle="GreenThread's inference engine fundamentally reimagines how AI models share GPU resources. The result: dramatically higher utilization, lower costs, and the ability to serve hundreds of models from infrastructure that traditionally served a handful."
      />

      {/* Problem Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">The GPU utilization problem</h2>
              <p className="text-xl text-gray-700 mb-4">Traditional inference is fundamentally wasteful.</p>
              <p className="text-gray-600 leading-relaxed">
                Most AI inference deployments dedicate entire GPUs to individual models. The model sits in GPU memory, waiting for requests. Between requests, those expensive compute resources sit idle. Studies consistently show GPU utilization rates of 15-30% in production inference workloads—meaning 70-85% of your GPU investment generates zero value.
              </p>
            </motion.div>
            <motion.div
              className="flex gap-6 flex-wrap"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {problemStats.map((stat, index) => (
                <Card key={index} className="flex-1 min-w-[140px] text-center">
                  <div className={`text-3xl font-bold mb-2 ${stat.bad ? 'text-red-500' : 'text-brand-primary'}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </Card>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-brand-dark text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium mb-6">A fundamentally different approach</h2>
              <p className="text-xl text-gray-300 mb-4">What if GPUs could serve hundreds of models, not just one?</p>
              <p className="text-gray-400 leading-relaxed mb-8">
                GreenThread's inference engine treats GPU resources as a shared pool rather than dedicated silos. Our proprietary scheduling and memory management technology enables rapid context switching between models, serving requests across your entire model catalog from a fraction of the hardware traditionally required.
              </p>
              <div className="space-y-4">
                {['Shared GPU pools', 'Millisecond switching', 'Intelligent scheduling'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-surface rounded-xl p-8"
            >
              <div className="text-sm text-gray-400 mb-4">GreenThread Approach</div>
              <div className="space-y-4">
                {['GPU 1', 'GPU 2', 'GPU 3'].map((gpu, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{gpu}</span>
                      <span className="text-brand-primary">50+ models</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-primary rounded-full" style={{ width: `${85 + index * 3}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700 text-center text-brand-primary font-semibold">
                3 GPUs → 150+ models
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Innovation Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Core innovation: Model Multiplexing</h2>
            <p className="text-lg text-gray-600">The technology that makes it all possible</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="feature" className="h-full">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary mb-6">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{innovation.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{innovation.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-brand-dark text-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium mb-4">Performance that speaks for itself</h2>
            <p className="text-lg text-gray-400">Real results from production deployments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-brand-primary mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Deploy Anywhere Section */}
      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Deploy anywhere</h2>
              <p className="text-xl text-gray-700 mb-4">Your infrastructure, your rules.</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                GreenThread runs wherever you need it. Public cloud, private data center, edge locations, or fully air-gapped environments. The same engine, the same APIs, the same management interface—regardless of where it's deployed.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {deploymentOptions.map((option, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{option.title}</h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  </div>
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
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-brand-primary font-bold">GreenThread</span>
                  </div>
                </div>
                {['Cloud', 'Data Center', 'Edge', 'Secure'].map((loc, index) => (
                  <div
                    key={index}
                    className="absolute w-16 h-16 bg-white shadow-lg rounded-full flex items-center justify-center text-xs font-medium text-gray-700"
                    style={{
                      top: `${50 + 40 * Math.sin((index * Math.PI) / 2)}%`,
                      left: `${50 + 40 * Math.cos((index * Math.PI) / 2)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {loc}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to see the technology in action?"
        subtitle="Schedule a technical deep-dive with our engineering team and see how GreenThread can transform your AI infrastructure."
        primaryButton={{ text: 'Schedule a Demo', href: 'mailto:sales@greenthread.ai' }}
        secondaryButton={{ text: 'Explore Features', href: '/features/model-multiplexing' }}
      />
    </>
  )
}
