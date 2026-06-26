'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'

interface Testimonial {
  id: number
  name: string
  role: string
  text: string
  initials: string
  variant: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana e Pedro Carvalho',
    role: 'Casamento · Março 2024',
    initials: 'AC',
    variant: 'bg-coffee-700',
    text: 'O João capturou cada detalhe do nosso dia de um jeito que nunca imaginamos ser possível. As fotos são de uma beleza e emoção que nos fazem reviver o casamento sempre que as olhamos. Um artista extraordinário.',
  },
  {
    id: 2,
    name: 'Marina Lopes',
    role: 'Ensaio de Gestante · Janeiro 2024',
    initials: 'ML',
    variant: 'bg-coffee-500',
    text: 'Profissionalismo, delicadeza e um olhar único. O João soube transformar um momento tão especial em imagens eternas. Cada foto conta uma história, transmite sentimento. Recomendo sem hesitar.',
  },
  {
    id: 3,
    name: 'Grupo Nexo Investimentos',
    role: 'Retratos Corporativos · Fev. 2024',
    initials: 'GN',
    variant: 'bg-coffee-900',
    text: 'Contratamos o João para nossa campanha institucional e o resultado superou todas as expectativas. Pontualidade, visão estética impecável e uma equipe que faz você se sentir completamente à vontade.',
  },
]

interface TestimonialCardProps {
  t: Testimonial
}

function TestimonialCard({ t }: TestimonialCardProps) {
  return (
    <motion.article
      variants={scaleIn}
      className="bg-white border border-coffee-100 p-8 md:p-10 flex flex-col gap-6 hover:shadow-xl hover:shadow-coffee-900/5 transition-shadow duration-500"
      aria-label={`Depoimento de ${t.name}`}
    >
      {/* Quote icon */}
      <Quote
        size={28}
        className="text-coffee-300"
        strokeWidth={1}
        aria-hidden="true"
      />

      {/* Text */}
      <p className="font-sans text-[14px] leading-[1.8] text-coffee-700 flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Divider */}
      <div className="h-px w-8 bg-coffee-200" />

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full ${t.variant} flex items-center justify-center shrink-0`}
          aria-hidden="true"
        >
          <span className="text-[11px] font-sans font-medium text-coffee-100">
            {t.initials}
          </span>
        </div>
        <div>
          <p className="font-sans text-[13px] font-medium text-coffee-900">
            {t.name}
          </p>
          <p className="text-[11px] font-sans text-coffee-400 tracking-wide">
            {t.role}
          </p>
        </div>
      </div>

      {/* Example disclaimer */}
      <p className="text-[9px] font-sans uppercase tracking-[0.18em] text-coffee-300 border-t border-coffee-100 pt-4">
        * Depoimento fictício — apenas para fins de template
      </p>
    </motion.article>
  )
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="py-28 md:py-36 bg-[#F5EEE4]"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <SectionLabel>Depoimentos</SectionLabel>
          <motion.h2
            variants={fadeInUp}
            id="testimonials-heading"
            className="font-heading text-[clamp(2.4rem,5vw,4rem)] text-coffee-900 leading-tight tracking-tight text-balance max-w-2xl"
          >
            O que dizem aqueles que{' '}
            <em className="text-coffee-500 not-italic">viveram</em> a experiência
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-[13px] text-coffee-500 max-w-md leading-relaxed"
          >
            Histórias reais de clientes que confiaram o registro dos seus momentos mais importantes.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
