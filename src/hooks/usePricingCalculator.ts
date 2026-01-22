import { useState, useMemo } from 'react'

const BASE_PRICE = 17.70
const FLOOR_PRICE = 15.00
const DISCOUNT_PER_TIER = 0.30
const TIER_SIZE = 300
const ANNUAL_MONTHS = 10

export interface GpuOption {
  value: number
  label: string
}

export const gpuOptions: GpuOption[] = [
  { value: 80, label: 'NVIDIA H100 (80GB)' },
  { value: 192, label: 'NVIDIA B200 (192GB)' },
  { value: 96, label: 'NVIDIA H200 (96GB)' },
  { value: 48, label: 'NVIDIA A100 (48GB)' },
  { value: 80, label: 'NVIDIA A100 (80GB)' },
  { value: 24, label: 'NVIDIA A10 (24GB)' },
  { value: 48, label: 'NVIDIA L40S (48GB)' },
]

export type BillingPeriod = 'monthly' | 'annual'

export function usePricingCalculator() {
  const [vramPerGpu, setVramPerGpu] = useState(80)
  const [gpuCount, setGpuCount] = useState(8)
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly')

  const calculations = useMemo(() => {
    const totalVram = vramPerGpu * gpuCount
    const tiers = Math.floor(totalVram / TIER_SIZE)
    const discount = tiers * DISCOUNT_PER_TIER
    const pricePerGb = Math.max(BASE_PRICE - discount, FLOOR_PRICE)
    const monthlyPrice = totalVram * pricePerGb
    const finalPrice = billingPeriod === 'annual' ? monthlyPrice * ANNUAL_MONTHS : monthlyPrice
    const discountAmount = BASE_PRICE - pricePerGb

    return {
      totalVram,
      pricePerGb,
      discountAmount,
      monthlyPrice,
      finalPrice,
      hasDiscount: discountAmount > 0,
    }
  }, [vramPerGpu, gpuCount, billingPeriod])

  return {
    vramPerGpu,
    setVramPerGpu,
    gpuCount,
    setGpuCount,
    billingPeriod,
    setBillingPeriod,
    ...calculations,
  }
}
