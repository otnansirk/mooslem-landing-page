import { ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import { DocumentIcon } from '@heroicons/react/24/outline'
import Button from '../form/Button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Contact() {
    const tConct = useTranslations('Contact');
    const tDocs = useTranslations('Documentation');

    return (
        <div id="contact" className="isolate  text-white bg-cover bg-center bg-[#012230]" >
            <div className='backdrop-blur-xl px-6 py-24 sm:py-32 lg:px-8'>

                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{tConct('title')}</h2>
                    <p className="mt-5 text-lg/8 ">{tConct('description')}</p>
                </div>
                <div className="flex gap-x-6 justify-center mt-10">
                    <Link href="mailto:iam.otnansirk@gmail.com">
                        <Button>
                            <ChatBubbleLeftRightIcon aria-hidden="true" className="size-6" />
                            Gmail
                        </Button>
                    </Link>
                    <Link href="https://github.com/otnansirk">
                        <Button>
                            <HeartIcon aria-hidden="true" className="size-6" />
                            Github
                        </Button>
                    </Link>
                </div>
                <div className="mx-auto max-w-2xl sm:text-center mt-20">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{tDocs('title')}</h2>
                    <p className="mt-5 text-lg/8 ">{tDocs('description')}</p>
                </div>
                <div className="flex gap-x-6 justify-center mt-10">
                    <Link href="/docs">
                        <Button>
                            <DocumentIcon aria-hidden="true" className="size-6" />
                            {tDocs('cta_documentation')} <span aria-hidden="true">→</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
