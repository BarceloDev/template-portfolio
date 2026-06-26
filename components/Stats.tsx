'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCounter } from '@/hooks/useCounter'
import { staggerContainer, fadeInUp } from '@/lib/animations'

interface StatItemProps {
  value: number
  suffix: string
  label: string
  description: string
  enabled: boolean
  delay?: number
}

function StatItem({ value, suffix, label, description, enabled, delay = 0 }: StatItemProps) {
  const count = useCounter({ end: value, duration: 2200, enabled })

  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center text-center group px-4"
    >
      <div className="flex items-end gap-1 leading-none mb-3">
        <span className="font-heading text-[clamp(3rem,6vw,5.5rem)] text-coffee-100 leading-none">
          {suffix === '+' ? `+${count}` : count}
        </span>
        {suffix !== '+' && (
          <span className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] text-coffee-400 mb-1 pb-1">
            {suffix}
          </span>
        )}
      </div>
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-coffee-300 mb-2">
        {label}
      </p>
      <p className="font-sans text-[12px] text-coffee-500 leading-relaxed max-w-[140px]">
        {description}
      </p>
    </motion.div>
  )
}

const stats = [
  {
    value: 250,
    suffix: '+',
    label: 'Clientes',
    description: 'Famílias e casais que confiaram em mim',
  },
  {
    value: 600,
    suffix: '+',
    label: 'Ensaios',
    description: 'Sessões realizadas com esmero e dedicação',
  },
  {
    value: 10,
    suffix: 'anos',
    label: 'Experiência',
    description: 'Uma trajetória construída com paixão',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfação',
    description: 'Clientes que nos indicam para amigos',
  },
]

export function Stats() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="bg-coffee-900 py-24 md:py-28 overflow-hidden"
      aria-label="Estatísticas e conquistas"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-coffee-400 mb-4">
            <span className="block h-px w-8 bg-coffee-600" />
            Números que Representam
            <span className="block h-px w-8 bg-coffee-600" />
          </span>
          <h2 className="font-heading text-[clamp(2.2rem,4vw,3.5rem)] text-coffee-100 leading-tight">
            Uma carreira dedicada à{' '}
            <em className="text-coffee-400 not-italic">excelência</em>
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="h-px bg-coffee-700/60 mb-16 origin-left"
        />

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 relative"
        >
          {/* Vertical separators — desktop only */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute hidden lg:block w-px bg-coffee-700/40 top-0 bottom-0"
              style={{ left: `${(i / 4) * 100}%` }}
            />
          ))}

          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              enabled={inView}
              delay={i * 0.15}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
