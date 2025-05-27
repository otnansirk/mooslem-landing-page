'use client'

import Features from '@/components/features/Features'
import Contact from '@/components/contacts/Contact'
import Donate from '@/components/donates/Donate'
import Footer from '@/components/footers/Footer'
import Hero from '@/components/heros/Hero'
import Link from 'next/link'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function Home() {

  return (<>
    <Hero />
    <Features />
    <Donate />
    <Contact />
    <Footer />
    <div className='fixed right-6 bottom-6 bg-white/20 w-9 h-9 backdrop-blur-3xl rounded-md ring-1 ring-white/20 hover:bg-white/30'>
      <Link href={'#home'} className='flex justify-center items-center w-full h-full'>
        <ArrowUpIcon className='w-6 h-6 inline-block' />
      </Link>
    </div>
  </>
  )
}