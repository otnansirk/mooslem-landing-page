'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocale, useTranslations } from 'next-intl'
import Button from '@/components/form/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const locale = useLocale();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();
    const tNav = useTranslations('Navigation');

    const navigation = [
        { name: tNav('home'), href: '/#home' },
        { name: tNav('documentation'), href: '/docs' },
        { name: tNav('contact'), href: '/#contact' },
        { name: tNav('donate'), href: '/#donate' },
    ]


    return (
        <header className="absolute inset-x-0 top-0 z-50 container mx-auto">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1 gap-2">
                    <Link href={pathname.replace(locale, 'en')}>
                        <Button className={`rounded-md px-2 py-0.5 h-0 ${locale === 'en' ? 'bg-white text-gray-600 hover:bg-white/90' : 'bg-white/10 hover:bg-white/20'}`}>
                            English
                        </Button>
                    </Link>
                    <Link href={pathname.replace(locale, 'id')}>
                        <Button className={`rounded-md px-2 py-0.5 h-0 ${locale === 'id' ? 'bg-white text-gray-600 hover:bg-white/90' : 'bg-white/10 hover:bg-white/20 '}`}>
                            Indonesia
                        </Button>
                    </Link>
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
                        <Link key={item.name} href={item.href} className="text-sm/6 font-bold text-gray-200">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>
            {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
            <div className={`${mobileMenuOpen ? ' lg:hidden' : 'hidden'}`} role="dialog" aria-modal="true">
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                <div className="fixed inset-0 z-50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-transparent backdrop-blur-[100px] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <span />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-200"
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root text-gray-200">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-gray-50 hover:text-gray-700">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;