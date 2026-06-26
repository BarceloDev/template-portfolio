'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { PremiumButton as Button } from '@/components/ui/PremiumButton'
import { scrollToSection } from '@/lib/utils'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Com quanto tempo de antecedência devo contratar?',
    answer:
      'Para casamentos, recomendo agendar com no mínimo 6 a 12 meses de antecedência, especialmente para datas em alta temporada (outubro a março). Para ensaios e eventos corporativos, 4 a 8 semanas costumam ser suficientes.',
  },
  {
    id: 2,
    question: 'Em quanto tempo recebo as fotos depois do evento?',
    answer:
      'Para ensaios, o prazo médio de entrega é de 7 a 15 dias úteis. Para casamentos, trabalho com um prazo de 30 a 45 dias para que cada imagem receba a atenção que merece. Você receberá um preview de 20 fotos em até 72 horas.',
  },
  {
    id: 3,
    question: 'Você cobre eventos fora de São Paulo?',
    answer:
      'Sim! Costumo atender clientes em todo o Brasil e também no exterior. Para eventos fora da Grande São Paulo, aplicam-se custos de deslocamento e hospedagem, que serão detalhados na proposta personalizada.',
  },
  {
    id: 4,
    question: 'Quantas fotos são entregues ao final?',
    answer:
      'Para ensaios de 2 horas, entrego entre 60 e 80 imagens editadas. Para casamentos de dia inteiro, a entrega é de 400 a 600 fotos. O foco está sempre na qualidade e na narrativa, não apenas na quantidade.',
  },
  {
    id: 5,
    question: 'As fotos são entregues em arquivo RAW?',
    answer:
      'As entregas incluem apenas arquivos JPEG editados em alta resolução, que são os arquivos finalizados prontos para impressão ou uso digital. Arquivos RAW não são disponibilizados, pois fazem parte do processo criativo exclusivo.',
  },
  {
    id: 6,
    question: 'Como funciona o pagamento?',
    answer:
      'Para garantir a data, é necessário um sinal de 40% do valor total. Os 60% restantes são pagos até 7 dias antes do evento. Aceito PIX, transferência bancária e cartão de crédito em até 12x.',
  },
]

interface AccordionItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-coffee-200">
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between gap-4 py-6 text-left group',
          'focus-visible:outline-2 focus-visible:outline-coffee-500 focus-visible:outline-offset-2',
          'transition-colors duration-300',
        )}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span
          className={cn(
            'font-heading text-lg md:text-xl text-coffee-900 leading-snug text-balance transition-colors duration-300',
            isOpen && 'text-coffee-700',
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            'shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300',
            isOpen
              ? 'border-coffee-900 bg-coffee-900 text-coffee-100'
              : 'border-coffee-300 text-coffee-500 group-hover:border-coffee-500',
          )}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            role="region"
            aria-labelledby={`faq-question-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-[14px] text-coffee-600 leading-relaxed pb-6 pr-12">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      id="faq"
      ref={ref}
      className="py-28 md:py-36 bg-[#FAF8F5]"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">

          {/* Sidebar */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <SectionLabel>Dúvidas Frequentes</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              id="faq-heading"
              className="font-heading text-[clamp(2.4rem,4.5vw,3.8rem)] text-coffee-900 leading-tight tracking-tight text-balance"
            >
              Tudo o que você
              <br />
              precisa saber antes
              <br />
              de <em className="text-coffee-500 not-italic">contratar</em>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="font-sans text-[13px] text-coffee-600 leading-relaxed"
            >
              Não encontrou o que precisava? Entre em contato e responderei pessoalmente.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-2">
              <Button
                variant="outline"
                onClick={() => scrollToSection('contato')}
                aria-label="Enviar uma pergunta"
              >
                Enviar uma Pergunta
              </Button>
            </motion.div>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div role="list" aria-label="Perguntas frequentes">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  item={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
