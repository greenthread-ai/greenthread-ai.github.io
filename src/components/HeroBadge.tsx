import { ReactNode } from 'react'

interface HeroBadgeProps {
  icon?: ReactNode
  children: ReactNode
}

export default function HeroBadge({ icon, children }: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-beige-300 rounded-full text-sm font-medium text-gray-700 shadow-sm">
      {icon && <span className="text-brand-primary">{icon}</span>}
      <span>{children}</span>
    </div>
  )
}
