import { motion } from 'framer-motion'
import Container from './Container'
import { usePricingCalculator, gpuOptions } from '../hooks'

function formatCurrency(amount: number) {
  return '$' + amount.toLocaleString('en-AU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}

function formatNumber(num: number) {
  return num.toLocaleString('en-AU')
}

export default function PricingCalculator() {
  const {
    vramPerGpu,
    setVramPerGpu,
    gpuCount,
    setGpuCount,
    billingPeriod,
    setBillingPeriod,
    totalVram,
    pricePerGb,
    discountAmount,
    finalPrice,
    hasDiscount,
  } = usePricingCalculator()

  return (
    <section className="py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-medium text-gray-900 mb-4">Pricing Calculator</h2>
          <p className="text-lg text-gray-600">Configure your GPU setup and see your price instantly</p>
        </div>

        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-beige-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2">
            {/* Inputs */}
            <div className="p-8 space-y-6 border-r border-beige-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GPU Type</label>
                <select
                  value={vramPerGpu}
                  onChange={(e) => setVramPerGpu(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                >
                  {gpuOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of GPUs</label>
                <input
                  type="number"
                  value={gpuCount}
                  onChange={(e) => setGpuCount(Math.max(1, Math.min(1000, Number(e.target.value))))}
                  min="1"
                  max="1000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Billing Period</label>
                <select
                  value={billingPeriod}
                  onChange={(e) => setBillingPeriod(e.target.value as 'monthly' | 'annual')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                >
                  <option value="monthly">Monthly</option>
                  <option value="annual">Annual (2 months free)</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 bg-gray-50">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Total VRAM</span>
                  <span className="font-semibold text-gray-900">{formatNumber(totalVram)} GB</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Price per GB</span>
                  <span className="font-semibold text-gray-900">${pricePerGb.toFixed(2)}</span>
                </div>
                {hasDiscount && (
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Volume discount</span>
                    <span className="font-semibold text-brand-primary">-${discountAmount.toFixed(2)}/GB</span>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl p-6 border border-beige-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">
                    {billingPeriod === 'annual' ? 'Annual Price' : 'Monthly Price'}
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-gray-900">{formatCurrency(finalPrice)}</span>
                    <span className="text-gray-500">AUD</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {billingPeriod === 'annual' ? 'Billed annually (10 months for 12)' : 'Billed monthly'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
