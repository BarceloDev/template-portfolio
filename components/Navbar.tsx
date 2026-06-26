'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import { useScrolled } from '@/hooks/useScrolled'

const navLinks = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Processo', id: 'processo' },
  { label: 'Depoimentos', id: 'depoimentos' },
  { label: 'FAQ', id: 'faq' },
] as const

export function Navbar() {
  const scrolled = useScrolled(60)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-coffee-100 py-4'
            : 'bg-transparent py-6',
        )}
        role="banner"
      >
        <nav
          className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-coffee-500"
            aria-label="João Martins Fotografia – voltar ao topo"
          >
            <span
              className={cn(
                'font-heading text-xl tracking-wide transition-colors duration-300',
                scrolled ? 'text-coffee-900' : 'text-coffee-100',
              )}
            >
              João Martins
            </span>
            <span
              className={cn(
                'text-[9px] font-sans font-medium uppercase tracking-[0.25em] transition-colors duration-300',
                scrolled ? 'text-coffee-500' : 'text-coffee-300',
              )}
            >
              Fotografia
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    'text-[10px] font-sans font-medium uppercase tracking-[0.2em] transition-colors duration-300',
                    'hover:text-coffee-500 focus-visible:outline-2 focus-visible:outline-coffee-500',
                    scrolled ? 'text-coffee-700' : 'text-coffee-300',
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contato')}
              className={cn(
                'text-[10px] font-sans font-medium uppercase tracking-[0.2em] px-5 py-2.5 border transition-all duration-300',
                scrolled
                  ? 'border-coffee-900 text-coffee-900 hover:bg-coffee-900 hover:text-coffee-100'
                  : 'border-coffee-100/60 text-coffee-100 hover:bg-coffee-100/10',
              )}
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              'md:hidden p-1 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-coffee-500',
              scrolled ? 'text-coffee-900' : 'text-coffee-100',
            )}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-coffee-900 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <ul className="flex flex-col items-center gap-6" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => handleNav(link.id)}
                    className="font-heading text-4xl text-coffee-100 hover:text-coffee-500 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-coffee-500"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => handleNav('contato')}
                  className="mt-4 text-[10px] font-sans font-medium uppercase tracking-[0.22em] px-8 py-3.5 border border-coffee-100/60 text-coffee-100 hover:bg-coffee-100/10 transition-all duration-300"
                >
                  Solicitar Orçamento
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
