'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'
import { cn } from '@/lib/utils'
import type { PlaceholderVariant } from '@/components/ui/ImagePlaceholder'

type Category = 'Todos' | 'Casamentos' | 'Ensaios' | 'Corporativo' | 'Eventos' | 'Lifestyle'

interface PortfolioItem {
  id: number
  category: Exclude<Category, 'Todos'>
  variant: PlaceholderVariant
  height: string
  title: string
}

const items: PortfolioItem[] = [
  { id: 1,  category: 'Casamentos',  variant: 'dark',   height: 'h-[380px]', title: 'Cerimônia ao Pôr do Sol' },
  { id: 2,  category: 'Ensaios',     variant: 'medium', height: 'h-[260px]', title: 'Ensaio em Estúdio' },
  { id: 3,  category: 'Lifestyle',   variant: 'cool',   height: 'h-[260px]', title: 'Cotidiano & Emoção' },
  { id: 4,  category: 'Corporativo', variant: 'warm',   height: 'h-[300px]', title: 'Retrato Executivo' },
  { id: 5,  category: 'Casamentos',  variant: 'cool',   height: 'h-[340px]', title: 'Recepção Elegante' },
  { id: 6,  category: 'Eventos',     variant: 'dark',   height: 'h-[320px]', title: 'Gala Corporativa' },
  { id: 7,  category: 'Ensaios',     variant: 'light',  height: 'h-[280px]', title: 'Ensaio Externo' },
  { id: 8,  category: 'Lifestyle',   variant: 'medium', height: 'h-[360px]', title: 'Família & Memória' },
  { id: 9,  category: 'Casamentos',  variant: 'warm',   height: 'h-[300px]', title: 'Detalhes do Altar' },
  { id: 10, category: 'Corporativo', variant: 'cool',   height: 'h-[260px]', title: 'Evento de Lançamento' },
  { id: 11, category: 'Ensaios',     variant: 'dark',   height: 'h-[340px]', title: 'Alta Moda' },
  { id: 12, category: 'Eventos',     variant: 'medium', height: 'h-[280px]', title: 'Conferência Internacional' },
]

const categories: Category[] = ['Todos', 'Casamentos', 'Ensaios', 'Corporativo', 'Eventos', 'Lifestyle']

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      layout
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
      className="overflow-hidden cursor-pointer group"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      role="figure"
      aria-label={item.title}
    >
      <div className={cn('relative overflow-hidden', item.height)}>
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImagePlaceholder
            variant={item.variant}
            className="w-full h-full"
            label={item.title}
          />
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-coffee-900/70 flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-10 bg-coffee-400 origin-center"
          />
          <p className="font-heading text-xl text-coffee-100 text-center px-4">
            {item.title}
          </p>
          <span className="text-[9px] font-sans uppercase tracking-[0.22em] text-coffee-400">
            {item.category}
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-10 bg-coffee-400 origin-center"
          />
        </motion.div>

        {/* Category badge */}
        <motion.span
          className="absolute top-4 left-4 text-[9px] font-sans uppercase tracking-[0.18em] text-coffee-300 bg-coffee-900/60 backdrop-blur-sm px-3 py-1.5"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: hovered ? 0 : 1, y: hovered ? -8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.category}
        </motion.span>
      </div>
    </motion.div>
  )
}

export function Portfolio() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<Category>('Todos')

  const filtered = active === 'Todos' ? items : items.filter((i) => i.category === active)

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-28 md:py-36 bg-[#FAF8F5]"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
        >
          <div className="flex flex-col gap-4 max-w-xl">
            <SectionLabel>Portfólio</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              id="portfolio-heading"
              className="font-heading text-[clamp(2.4rem,5vw,4rem)] text-coffee-900 leading-tight tracking-tight text-balance"
            >
              Trabalhos que falam
              <br />
              por si mesmos
            </motion.h2>
          </div>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-[13px] text-coffee-600 leading-relaxed max-w-xs"
          >
            Uma seleção dos projetos mais marcantes de mais de uma década de trabalho artístico.
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap gap-2 mb-12"
          role="group"
          aria-label="Filtrar por categoria"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeInUp}
              onClick={() => setActive(cat)}
              className={cn(
                'px-5 py-2 text-[10px] font-sans font-medium uppercase tracking-[0.18em] transition-all duration-300',
                active === cat
                  ? 'bg-coffee-900 text-coffee-100'
                  : 'bg-transparent text-coffee-600 border border-coffee-200 hover:border-coffee-400 hover:text-coffee-900',
              )}
              aria-pressed={active === cat}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <div key={item.id} className="break-inside-avoid">
                <PortfolioCard item={item} index={i} />
              </div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
