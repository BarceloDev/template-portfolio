'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { PremiumButton as Button } from '@/components/ui/PremiumButton'
import { scrollToSection } from '@/lib/utils'
import { staggerContainer, heroText, fadeIn } from '@/lib/animations'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        {/* Multi-layer dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e0906] via-[#1c110a] to-[#291C0E]" />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#291C0E]/80 via-transparent to-transparent" />
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(161,141,120,0.3) 2px,
              rgba(161,141,120,0.3) 3px
            )`,
          }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.5)_100%)]" />

        {/* Decorative lines */}
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-coffee-700/30 to-transparent hidden lg:block"
        />
        <motion.div
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-coffee-700/30 to-transparent hidden lg:block"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Pre-title */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-coffee-500/60" />
          <span className="text-[9px] font-sans font-medium uppercase tracking-[0.3em] text-coffee-400">
            São Paulo · Brasil
          </span>
          <span className="h-px w-10 bg-coffee-500/60" />
        </motion.div>

        {/* Main name */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <motion.h1
            variants={heroText}
            className="font-heading text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em] text-coffee-100 mb-4"
          >
            João
          </motion.h1>
          <motion.h1
            variants={heroText}
            className="font-heading text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-[-0.03em] text-coffee-100 italic"
          >
            Martins
          </motion.h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          className="my-8 h-px w-24 bg-coffee-500/50 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="font-sans text-[13px] font-light uppercase tracking-[0.28em] text-coffee-300 mb-12"
        >
          Fotógrafo de Casamentos e Ensaios
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="primary"
            onClick={() => scrollToSection('portfolio')}
            aria-label="Ver portfólio"
          >
            Ver Portfólio
          </Button>
          <Button
            variant="outline-light"
            onClick={() => scrollToSection('contato')}
            aria-label="Entrar em contato"
          >
            Entrar em Contato
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 focus-visible:outline-2 focus-visible:outline-coffee-500"
        aria-label="Rolar para baixo"
      >
        <motion.span
          className="text-[9px] font-sans uppercase tracking-[0.22em] text-coffee-400"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          Deslizar
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-coffee-400" />
        </motion.div>
      </motion.button>
    </section>
  )
}
