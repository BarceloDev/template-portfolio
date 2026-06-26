'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CheckCircle, MapPin, Mail, Phone } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations'
import { cn } from '@/lib/utils'

interface FormValues {
  name: string
  phone: string
  email: string
  message: string
}

const info = [
  { icon: MapPin, label: 'Localização', value: 'São Paulo, SP — Brasil' },
  { icon: Mail, label: 'E-mail', value: 'joao@exemplo.com.br' },
  { icon: Phone, label: 'Telefone', value: '+55 (11) 99000-0000' },
]

function FormField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-sans font-medium uppercase tracking-[0.18em] text-coffee-600">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-[11px] font-sans text-red-500/80"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputClass = cn(
  'w-full bg-transparent border-b border-coffee-200 py-3 px-0',
  'font-sans text-[14px] text-coffee-900 placeholder:text-coffee-300',
  'focus:outline-none focus:border-coffee-700',
  'transition-colors duration-300',
)

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ mode: 'onBlur' })

  const onSubmit = async (_data: FormValues) => {
    // Simulated delay — no real backend
    await new Promise((res) => setTimeout(res, 1200))
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <section
      id="contato"
      ref={ref}
      className="py-28 md:py-36 bg-[#F5EEE4] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <SectionLabel>Contato</SectionLabel>
          <motion.h2
            variants={fadeInUp}
            id="contact-heading"
            className="font-heading text-[clamp(2.4rem,5vw,4rem)] text-coffee-900 leading-tight tracking-tight text-balance max-w-2xl"
          >
            Vamos criar algo{' '}
            <em className="text-coffee-500 not-italic">inesquecível</em> juntos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-sans text-[13px] text-coffee-600 max-w-md leading-relaxed"
          >
            Preencha o formulário e entrarei em contato em até 24 horas com uma proposta personalizada.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — info + image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            {/* Image */}
            <ImagePlaceholder
              variant="dark"
              className="w-full h-64 md:h-80"
              label="Estúdio fotográfico de João Martins"
            >
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-coffee-900/70 to-transparent">
                <p className="font-heading text-xl text-coffee-100">Estúdio São Paulo</p>
                <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-coffee-400 mt-1">
                  Agendamento disponível
                </p>
              </div>
            </ImagePlaceholder>

            {/* Contact info */}
            <div className="flex flex-col gap-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-coffee-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-coffee-500" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans uppercase tracking-[0.18em] text-coffee-400 mb-0.5">
                      {label}
                    </p>
                    <p className="font-sans text-[14px] text-coffee-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center justify-center text-center gap-5 py-20"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle
                    size={48}
                    className="text-coffee-500"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-3xl text-coffee-900">Mensagem enviada!</h3>
                  <p className="font-sans text-[14px] text-coffee-600 leading-relaxed max-w-sm">
                    Obrigado pelo contato. Responderei pessoalmente em até 24 horas.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Formulário de solicitação de orçamento"
                  className="flex flex-col gap-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <FormField label="Nome completo *" error={errors.name?.message}>
                      <input
                        {...register('name', {
                          required: 'Nome é obrigatório',
                          minLength: { value: 2, message: 'Mínimo de 2 caracteres' },
                        })}
                        type="text"
                        placeholder="Maria da Silva"
                        autoComplete="name"
                        className={cn(inputClass, errors.name && 'border-red-400')}
                        aria-invalid={!!errors.name}
                      />
                    </FormField>

                    <FormField label="Telefone / WhatsApp *" error={errors.phone?.message}>
                      <input
                        {...register('phone', {
                          required: 'Telefone é obrigatório',
                          pattern: {
                            value: /^\+?[\d\s\(\)\-]{8,20}$/,
                            message: 'Formato inválido',
                          },
                        })}
                        type="tel"
                        placeholder="+55 (11) 99999-9999"
                        autoComplete="tel"
                        className={cn(inputClass, errors.phone && 'border-red-400')}
                        aria-invalid={!!errors.phone}
                      />
                    </FormField>
                  </div>

                  <FormField label="E-mail *" error={errors.email?.message}>
                    <input
                      {...register('email', {
                        required: 'E-mail é obrigatório',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'E-mail inválido',
                        },
                      })}
                      type="email"
                      placeholder="maria@email.com"
                      autoComplete="email"
                      className={cn(inputClass, errors.email && 'border-red-400')}
                      aria-invalid={!!errors.email}
                    />
                  </FormField>

                  <FormField label="Mensagem *" error={errors.message?.message}>
                    <textarea
                      {...register('message', {
                        required: 'Mensagem é obrigatória',
                        minLength: { value: 20, message: 'Mínimo de 20 caracteres' },
                      })}
                      rows={5}
                      placeholder="Conte um pouco sobre o seu evento ou ensaio — data, local e suas expectativas..."
                      className={cn(inputClass, 'resize-none', errors.message && 'border-red-400')}
                      aria-invalid={!!errors.message}
                    />
                  </FormField>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.97 }}
                      className={cn(
                        'inline-flex items-center justify-center gap-2',
                        'px-9 py-4 text-[11px] font-sans font-medium uppercase tracking-[0.18em]',
                        'bg-coffee-900 text-coffee-100 border border-coffee-900',
                        'hover:bg-coffee-700 hover:border-coffee-700',
                        'transition-all duration-300',
                        'disabled:opacity-60 disabled:cursor-not-allowed',
                        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coffee-500',
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-3 h-3 border border-coffee-300 border-t-transparent rounded-full"
                            aria-hidden="true"
                          />
                          Enviando...
                        </>
                      ) : (
                        'Solicitar Orçamento'
                      )}
                    </motion.button>
                    <p className="font-sans text-[11px] text-coffee-400">
                      * Campos obrigatórios
                    </p>
                  </div>

                  <p className="font-sans text-[10px] text-coffee-300 leading-relaxed">
                    Este é um formulário de demonstração. Nenhum dado real é enviado ou armazenado.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
