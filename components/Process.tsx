'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, CalendarDays, Camera, Package } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { staggerContainer, fadeInUp, fadeInLeft } from '@/lib/animations'
import type { LucideIcon } from 'lucide-react'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Primeiro Contato',
    description:
      'Conversamos sobre sua visão, expectativas e detalhes do evento. Quero conhecer sua história antes de começar a fotografá-la.',
  },
  {
    number: '02',
    icon: CalendarDays,
    title: 'Planejamento',
    description:
      'Juntos, definimos roteiro, locais, horários e todos os detalhes para que o dia da sessão seja perfeito e sem surpresas.',
  },
  {
    number: '03',
    icon: Camera,
    title: 'Sessão Fotográfica',
    description:
      'No dia da sessão, crio um ambiente leve e natural para que você se sinta completamente à vontade. A magia acontece de forma espontânea.',
  },
  {
    number: '04',
    icon: Package,
    title: 'Entrega Final',
    description:
      'Após cuidadosa seleção e edição, entrego suas fotos em galeria online privativa de alta resolução, prontas para serem guardadas para sempre.',
  },
]

export function Process() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="processo"
      ref={ref}
      className="py-28 md:py-36 bg-coffee-900 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
        >
          <div className="flex flex-col gap-4">
            <SectionLabel light>Como Funciona</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              id="process-heading"
              className="font-heading text-[clamp(2.4rem,5vw,4rem)] text-coffee-100 leading-tight tracking-tight text-balance max-w-md"
            >
              Do primeiro olá à
              <br />
              <em className="text-coffee-400 not-italic">entrega perfeita</em>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-[13px] text-coffee-400 leading-relaxed max-w-xs"
          >
            Um processo cuidadoso, transparente e pensado para que você viva cada etapa com tranquilidade.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="absolute top-8 left-0 right-0 h-px bg-coffee-700/50 origin-left hidden lg:block"
            aria-hidden="true"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  custom={index}
                  className="flex flex-col gap-5 relative group"
                >
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                    <div className="relative lg:mb-8">
                      {/* Circle */}
                      <div className="w-16 h-16 rounded-full border border-coffee-700 bg-coffee-900 flex items-center justify-center group-hover:border-coffee-500 transition-colors duration-400">
                        <Icon
                          size={22}
                          className="text-coffee-400 group-hover:text-coffee-300 transition-colors duration-400"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>
                      {/* Number badge */}
                      <span className="absolute -top-2 -right-2 text-[9px] font-sans font-medium text-coffee-600 bg-coffee-900 px-1.5">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-heading text-2xl text-coffee-100 leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[13px] text-coffee-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <motion.div
                      variants={fadeInLeft}
                      className="lg:hidden absolute left-8 top-16 bottom-0 w-px bg-coffee-700/50"
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
