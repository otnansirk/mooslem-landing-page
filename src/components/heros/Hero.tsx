
import { useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/outline'
import Button from '@/components/form/Button'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'


export default function Hero() {

    const [onPlayVideo, setOnPlayVideo] = useState(false)

    const tHero = useTranslations('Hero');


    return (
        <div id="home" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494879540385-bc170b0878a7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>

            <div className="relative isolate px-6 lg:px-8 backdrop-blur-xl">
                <div className="flex justify-center items-center h-[100vh]">
                    <div className="text-center container mt-20">
                        <h1 className='text-5xl font-bold'>Mooslem° <span className='text-3xl font-normal'>Startpage</span></h1>
                        <div className='h-auto my-9  max-w-2xl mx-auto'>
                            <div className='bg-gray-800 h-5 rounded-t-md flex items-center gap-x-2 pl-2'>
                                <div className='bg-red-500 rounded-full h-3 w-3' />
                                <div className='bg-yellow-500 rounded-full h-3 w-3' />
                                <div className='bg-green-500 rounded-full h-3 w-3' />
                            </div>
                            {
                                onPlayVideo
                                    ? (
                                        <iframe
                                            className='w-full h-[250px] md:h-[350px] rounded-b-md'
                                            src="https://www.youtube.com/embed/NmcCkPw9jnk?autoplay=1&mute=0"
                                            title="Mooslem startpage - Prayer Time"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen />
                                    )
                                    : (
                                        <div className='relative'>
                                            <Image
                                                src={'/images/hero.png'}
                                                alt="Mooslem startpage"
                                                width={800}
                                                height={400}
                                                priority
                                                className='w-full h-auto rounded-b-md'
                                            />
                                            <PlayIcon
                                                onClick={() => setOnPlayVideo(!onPlayVideo)}
                                                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white bg-gray-800 rounded-full p-3 cursor-pointer hover:bg-gray-700 transition-colors duration-300' />
                                        </div>

                                    )
                            }

                            <div className="mt-10 w-[100%] h-full flex items-center justify-center gap-x-6 gap-y-3 flex-wrap">
                                <Button
                                    onClick={() => window.open('https://chromewebstore.google.com/detail/mooslem%C2%B0-startpage/kmjfcnegnnljfjlolhpdngigkcgaphdo', '_blank')}
                                >
                                    <Image
                                        src={'/chrome-icon.webp'}
                                        alt="Mooslem startpage"
                                        width={20}
                                        height={20}
                                    /> {tHero('cta_install-now')}
                                </Button>
                                <Link href="/docs">
                                    <Button>
                                        <div className='flex items-center gap-2'>
                                            {tHero('cta_documentation')} <span aria-hidden="true">→</span>
                                        </div>
                                    </Button>
                                </Link>
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