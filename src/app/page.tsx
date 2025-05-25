'use client'

import { useState } from 'react'
import { Bars3Icon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Donate', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494879540385-bc170b0878a7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <header className="absolute inset-x-0 top-0 z-50 container mx-auto">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <SunIcon aria-hidden="true" className="size-8 text-gray-200" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-200">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 backdrop-blur-xl">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className='text-5xl font-bold'>Mooslem° <span className='text-3xl font-normal'>Startpage</span></h1>
            <div className='h-auto my-14'>
              <div className='bg-gray-800 h-5 rounded-t-md flex items-center gap-x-2 pl-2'>
                <div className='bg-red-500 rounded-full h-3 w-3' />
                <div className='bg-yellow-500 rounded-full h-3 w-3' />
                <div className='bg-green-500 rounded-full h-3 w-3' />
              </div>
              <iframe
                className='w-full h-[250px] md:h-[350px] rounded-b-md'
                src="https://www.youtube.com/embed/5LoA9sPiyww" title="Mooslem startpage - Prayer Time" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
              <div className="mt-10 w-[100%] h-full flex items-center justify-center gap-x-6">
                <button className="flex items-center justify-center gap-[0.7em] max-w-[260px] px-5 py-2.5 rounded-[12px] border border-white/10 bg-white/10 text-inherit whitespace-nowrap box-border backdrop-blur-md hover:bg-white/20">
                  <Image src={'/chrome-icon.webp'} alt="Mooslem startpage" width={20} height={20} /> Install Now
                </button>
                <button className="flex items-center justify-center gap-[0.7em] max-w-[260px] px-5 py-2.5 rounded-[12px] border border-white/10 bg-white/10 text-inherit whitespace-nowrap box-border backdrop-blur-md hover:bg-white/20">
                  Documentation <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}