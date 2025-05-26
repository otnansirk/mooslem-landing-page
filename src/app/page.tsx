'use client'

import Features from '@/components/features/Features'
import Contact from '@/components/contacts/Contact'
import Donate from '@/components/donates/Donate'
import Footer from '@/components/footers/Footer'
import Hero from '@/components/heros/Hero'

export default function Home() {

  return (<>
    <Hero />
    <Features />
    <Donate />
    <Contact />
    <Footer />
  </>
  )
}