'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { scrollToSection } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const navLinks = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Processo', id: 'processo' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contato', id: 'contato' },
]

function IconInstagram() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const socials = [
  { label: 'Instagram', Icon: IconInstagram, href: '#' },
  { label: 'YouTube', Icon: IconYoutube, href: '#' },
  { label: 'LinkedIn', Icon: IconLinkedIn, href: '#' },
]

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <footer
      ref={ref}
      className="bg-coffee-900 pt-20 pb-8 overflow-hidden"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Top */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-coffee-800"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-left group focus-visible:outline-2 focus-visible:outline-coffee-500"
              aria-label="Voltar ao topo"
            >
              <p className="font-heading text-3xl text-coffee-100 group-hover:text-coffee-300 transition-colors duration-300">
                João Martins
              </p>
              <p className="text-[9px] font-sans uppercase tracking-[0.28em] text-coffee-500 mt-0.5">
                Fotografia
              </p>
            </button>
            <p className="font-sans text-[13px] text-coffee-500 leading-relaxed max-w-[220px]">
              Registrando momentos únicos com elegância e emoção desde 2014.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-coffee-700 flex items-center justify-center text-coffee-500 hover:text-coffee-200 hover:border-coffee-500 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-coffee-500"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <p className="text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-coffee-600">
              Navegação
            </p>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-2.5" role="list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="font-sans text-[13px] text-coffee-400 hover:text-coffee-200 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-coffee-500"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <p className="text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-coffee-600">
              Contato
            </p>
            <div className="flex flex-col gap-2.5">
              <p className="font-sans text-[13px] text-coffee-400">São Paulo, SP — Brasil</p>
              <a
                href="mailto:joao@exemplo.com.br"
                className="font-sans text-[13px] text-coffee-400 hover:text-coffee-200 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-coffee-500"
              >
                joao@exemplo.com.br
              </a>
              <p className="font-sans text-[13px] text-coffee-400">+55 (11) 99000-0000</p>
            </div>

            <div className="mt-4 pt-4 border-t border-coffee-800">
              <p className="text-[10px] font-sans uppercase tracking-[0.22em] text-coffee-600 mb-2">
                Disponível para
              </p>
              <div className="flex flex-wrap gap-2">
                {['Casamentos', 'Ensaios', 'Eventos', 'Corporativo'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-sans text-coffee-500 border border-coffee-700 px-2.5 py-1 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-sans text-[11px] text-coffee-600">
            &copy; {new Date().getFullYear()} João Martins Fotografia. Todos os direitos reservados.
          </p>
          <p className="font-sans text-[11px] text-coffee-700">
            Template comercial · Conteúdo fictício
          </p>
        </div>
      </div>
    </footer>
  )
}
