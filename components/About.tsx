'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Camera } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { PremiumButton as Button } from '@/components/ui/PremiumButton'
import { scrollToSection } from '@/lib/utils'
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from '@/lib/animations'

const awards = [
  { label: 'Wedding Photography Awards', year: '2023' },
  { label: 'Lux Photo Prize — Finalista', year: '2022' },
  { label: 'ISPWP — Top 100 Brasil', year: '2021' },
]

export function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-28 md:py-36 bg-[#FAF8F5] overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Main image */}
            <motion.div variants={scaleIn} className="relative z-10">
              <ImagePlaceholder
                variant="medium"
                className="w-full h-[520px] md:h-[620px]"
                label="Fotógrafo João Martins em sessão de trabalho"
              >
                {/* Camera icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Camera size={80} className="text-coffee-100" strokeWidth={0.8} />
                </div>
                {/* Bottom caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-coffee-900/60 to-transparent">
                  <p className="text-[9px] font-sans uppercase tracking-[0.22em] text-coffee-300">
                    João Martins · São Paulo
                  </p>
                </div>
              </ImagePlaceholder>
            </motion.div>

            {/* Floating accent card */}
            <motion.div
              variants={fadeInRight}
              className="absolute -bottom-8 -right-4 md:-right-10 z-20 bg-coffee-900 px-7 py-6 shadow-2xl hidden sm:block"
            >
              <p className="font-heading text-4xl text-coffee-100 leading-none">10</p>
              <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-coffee-400 mt-1">
                Anos de<br />Experiência
              </p>
            </motion.div>

            {/* Decorative square */}
            <motion.div
              variants={fadeInLeft}
              className="absolute -top-5 -left-5 w-24 h-24 border border-coffee-300/40 z-0 hidden md:block"
            />
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <SectionLabel>Sobre Mim</SectionLabel>

            <motion.h2
              variants={fadeInUp}
              id="about-heading"
              className="font-heading text-[clamp(2.6rem,5vw,4.2rem)] text-coffee-900 leading-[1.05] tracking-tight text-balance"
            >
              Cada imagem é uma{' '}
              <em className="text-coffee-500 not-italic">história</em>{' '}
              que merece ser contada
            </motion.h2>

            <motion.div variants={fadeInUp} className="h-px w-16 bg-coffee-300" />

            <motion.p
              variants={fadeInUp}
              className="font-sans text-[14px] leading-relaxed text-coffee-700"
            >
              Há mais de dez anos registro os momentos mais preciosos da vida das pessoas —
              o primeiro olhar trocado no altar, a emoção de um abraço genuíno,
              a luz dourada que transforma o ordinário em extraordinário.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="font-sans text-[14px] leading-relaxed text-coffee-700"
            >
              Meu trabalho vai além da técnica: é sobre presença, sensibilidade e a
              capacidade de capturar a essência de cada pessoa em um único frame.
              Acredito que a fotografia mais poderosa é aquela que, anos depois,
              ainda consegue trazer de volta toda a emoção daquele instante.
            </motion.p>

            {/* Awards */}
            <motion.div variants={fadeInUp} className="mt-2 space-y-3">
              {awards.map((award) => (
                <div key={award.label} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-coffee-500/60 shrink-0" />
                  <span className="text-[12px] font-sans text-coffee-700">{award.label}</span>
                  <span className="ml-auto text-[10px] font-sans text-coffee-400 tracking-wider shrink-0">
                    {award.year}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection('contato')}
                aria-label="Entrar em contato"
              >
                Vamos Conversar
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
