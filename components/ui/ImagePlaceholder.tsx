'use client'

import { cn } from '@/lib/utils'

export type PlaceholderVariant = 'dark' | 'medium' | 'light' | 'warm' | 'cool'

interface ImagePlaceholderProps {
  className?: string
  variant?: PlaceholderVariant
  aspectRatio?: string
  label?: string
  children?: React.ReactNode
}

const gradients: Record<PlaceholderVariant, string> = {
  dark: 'bg-gradient-to-br from-[#1a1008] via-[#291C0E] to-[#3d2416]',
  medium: 'bg-gradient-to-br from-[#291C0E] via-[#6E473B] to-[#A78D78]',
  light: 'bg-gradient-to-br from-[#BEB5A9] via-[#E1D4C2] to-[#F5EEE4]',
  warm: 'bg-gradient-to-br from-[#6E473B] via-[#A78D78] to-[#BEB5A9]',
  cool: 'bg-gradient-to-br from-[#3d2416] via-[#4a2e1f] to-[#6E473B]',
}

// Subtle film-grain-like pattern overlay
const noiseOverlay =
  "after:content-[''] after:absolute after:inset-0 after:opacity-[0.04] after:bg-[url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")]"

export function ImagePlaceholder({
  className,
  variant = 'dark',
  aspectRatio,
  label,
  children,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        gradients[variant],
        noiseOverlay,
        className,
      )}
      style={aspectRatio ? { aspectRatio } : undefined}
      role="img"
      aria-label={label ?? 'Fotografia'}
    >
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.35)_100%)]" />
      {children}
    </div>
  )
}
