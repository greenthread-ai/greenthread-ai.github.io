import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero, PricingCalculator, CTA, Container, Card } from '../components'

const pricingHighlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Volume discounts',
    description: 'Price drops $0.30 per GB for every 300GB, down to $15.00/GB floor',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Annual savings',
    description: 'Pay for 10 months, get 12 with annual commitment',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'All-inclusive',
    description: 'No setup fees, no support tiers, no hidden charges',
  },
]

const exampleConfigs = [
  {
    title: 'Single H100',
    badge: 'Starter',
    gpus: '1x NVIDIA H100',
    vram: '80 GB',
    pricePerGb: '$17.70',
    monthlyPrice: '$1,416',
    annualPrice: '$14,160',
  },
  {
    title: '8x B200 Node',
    badge: 'Popular',
    featured: true,
    gpus: '8x NVIDIA B200',
    vram: '1,536 GB',
    pricePerGb: '$16.20',
    monthlyPrice: '$24,883',
    annualPrice: '$248,832',
  },
  {
    title: '4x 8x B200 Cluster',
    badge: 'Enterprise',
    gpus: '32x NVIDIA B200',
    vram: '6,144 GB',
    pricePerGb: '$15.00',
    monthlyPrice: '$92,160',
    annualPrice: '$921,600',
  },
]

const discountTiers = [
  { range: '0 - 299 GB', price: '$17.70', discount: 'Base price' },
  { range: '300 - 599 GB', price: '$17.40', discount: '-$0.30' },
  { range: '600 - 899 GB', price: '$17.10', discount: '-$0.60' },
  { range: '900 - 1,199 GB', price: '$16.80', discount: '-$0.90' },
  { range: '1,200 - 1,499 GB', price: '$16.50', discount: '-$1.20' },
  { range: '1,500 - 1,799 GB', price: '$16.20', discount: '-$1.50' },
  { range: '1,800 - 2,099 GB', price: '$15.90', discount: '-$1.80' },
  { range: '2,100 - 2,399 GB', price: '$15.60', discount: '-$2.10' },
  { range: '2,400 - 2,699 GB', price: '$15.30', discount: '-$2.40' },
  { range: '2,700+ GB', price: '$15.00', discount: 'Floor price', isFloor: true },
]

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing - GreenThread</title>
        <meta name="description" content="Simple, transparent pricing. Pay for VRAM capacity, not complexity. Volume discounts built in. No hidden fees." />
      </Helmet>

      <Hero
        title={
          <>
            Simple, <span className="italic font-normal">transparent</span> pricing
          </>
        }
        subtitle="Pay for VRAM capacity, not complexity. Volume discounts built in. No hidden fees."
      />

      {/* Pricing Model Section */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-6">Capacity-based licensing</h2>
            <p className="text-lg text-gray-600 mb-12">
              GreenThread is licensed based on the total VRAM capacity you need. Start at <strong className="text-gray-900">$17.70 AUD per GB per month</strong>, with automatic volume discounts as you scale.
            </p>

            <div className="space-y-6">
              {pricingHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{highlight.title}</h4>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PricingCalculator />

      {/* Example Configurations */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Example Configurations</h2>
            <p className="text-lg text-gray-600">Common setups and their pricing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {exampleConfigs.map((config, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full ${config.featured ? 'ring-2 ring-brand-primary' : ''}`}>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">{config.title}</h3>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${config.featured ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {config.badge}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">GPUs</span>
                      <span className="text-gray-900">{config.gpus}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">VRAM</span>
                      <span className="text-gray-900">{config.vram}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Price/GB</span>
                      <span className="text-gray-900">{config.pricePerGb}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl font-bold text-gray-900">{config.monthlyPrice}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <p className="text-sm text-gray-500">{config.annualPrice}/year with annual billing</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Volume Discount Tiers */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Volume Discount Tiers</h2>
            <p className="text-lg text-gray-600">The more capacity you need, the less you pay per GB</p>
          </div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">VRAM Capacity</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price per GB/month</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Discount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {discountTiers.map((tier, index) => (
                    <tr key={index} className={tier.isFloor ? 'bg-brand-primary/5' : ''}>
                      <td className="px-6 py-4 text-sm text-gray-900">{tier.range}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{tier.price}</td>
                      <td className={`px-6 py-4 text-sm ${tier.isFloor ? 'text-brand-primary font-semibold' : 'text-brand-primary'}`}>
                        {tier.discount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTA
        title="Ready to get started?"
        subtitle="Contact our sales team for a custom quote or to discuss your specific requirements."
        primaryButton={{ text: 'Contact Sales', href: 'mailto:sales@greenthread.ai' }}
      />
    </>
  )
}
