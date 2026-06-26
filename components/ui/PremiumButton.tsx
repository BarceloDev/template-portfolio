'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'outline-light'

interface PremiumButtonProps {
  children: ReactNode
  variant?: Variant
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  href?: string
  'aria-label'?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-coffee-900 text-coffee-100 border border-coffee-900 hover:bg-coffee-700 hover:border-coffee-700',
  outline:
    'bg-transparent text-coffee-900 border border-coffee-900 hover:bg-coffee-900 hover:text-coffee-100',
  ghost:
    'bg-transparent text-coffee-500 border border-transparent hover:text-coffee-900',
  'outline-light':
    'bg-transparent text-coffee-100 border border-coffee-100/60 hover:bg-coffee-100/10',
}

export function PremiumButton({
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  disabled,
  href,
  'aria-label': ariaLabel,
}: PremiumButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2',
    'px-7 py-3.5 text-[11px] font-sans font-medium uppercase tracking-[0.18em]',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coffee-500',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    className,
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        aria-label={ariaLabel}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={base}
      aria-label={ariaLabel}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  )
}
