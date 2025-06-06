import { BanknotesIcon } from '@heroicons/react/24/outline'
import Button from '../form/Button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Donate() {
    const t = useTranslations('Donate');
    return (
        <div id="donate" className="isolate  text-white bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className='backdrop-blur-xl px-6 py-24 sm:py-56 lg:px-8'>

                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{t('title')}</h2>
                    <p className="mt-5 text-lg/8 ">{t('description')}</p>
                </div>
                <div className="flex gap-x-6 justify-center mt-10">
                    <Link href="https://ko-fi.com/otnansirk" target="_blank">
                        <Button>
                            <BanknotesIcon aria-hidden="true" className="size-6" />
                            Ko-Fi
                        </Button>
                    </Link>
                    <Link href="https://github.com/sponsors/otnansirk" target="_blank">
                        <Button>
                            <BanknotesIcon aria-hidden="true" className="size-6" />
                            Github Sponsors
                        </Button>
                    </Link>
                    <Link href="https://lynk.id/pakotnan" target="_blank">
                        <Button>
                            <BanknotesIcon aria-hidden="true" className="size-6" />
                            Lynk.id
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
