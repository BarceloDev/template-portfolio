'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInUp } from '@/lib/animations'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  light?: boolean
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <motion.span
      variants={fadeInUp}
      className={cn(
        'inline-flex items-center gap-3 text-[10px] font-sans font-medium uppercase tracking-[0.22em]',
        light ? 'text-coffee-300' : 'text-coffee-500',
        className,
      )}
    >
      <span
        className={cn(
          'block h-px w-8',
          light ? 'bg-coffee-300' : 'bg-coffee-500',
        )}
      />
      {children}
    </motion.span>
  )
}
