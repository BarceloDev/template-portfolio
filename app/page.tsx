'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Stats } from '@/components/Stats'
import { Portfolio } from '@/components/Portfolio'
import { Testimonials } from '@/components/Testimonials'
import { Process } from '@/components/Process'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
