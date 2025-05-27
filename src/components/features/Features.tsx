import { CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


const features = [
    {
        name: 'Adhan Notifications',
        description: 'Get notified with Adhan sound before the next prayer time.'
    },
    {
        name: 'Customizable Clock',
        description: 'A clean and customizable clock that helps you keep track of time while staying productive.'
    },
    {
        name: 'Weather',
        description: 'Real-time weather updates tailored to your current location.'
    },
    {
        name: 'Greetings',
        description: 'Personalized greetings that uplift your mood and set the tone for your day.'
    },
    {
        name: 'Notes',
        description: 'A simple space to jot down reminders, tasks, or reflections directly on your start page.'
    },
    {
        name: 'Customizable Notifications',
        description: 'Enable or disable Adhan and prayer alerts based on your preference.'
    },
    {
        name: 'Dark Mode (Coming Soon)',
        description: 'A sleek, eye-friendly dark theme to reduce strain during nighttime use.'
    },
    {
        name: 'Al-Quran Integration (Coming Soon)',
        description: 'Read and reflect on the Quran directly from your new tab page.'
    },
    {
        name: 'Inspirational Islamic Quotes (Coming Soon)',
        description: 'Daily Islamic quotes to inspire your soul and keep you grounded.'
    },
    {
        name: 'Multilingual Support (Coming Soon)',
        description: 'Experience Mooslem Start Page in your preferred language.'
    },
    {
        name: 'Quick Access Links (Coming Soon)',
        description: 'Access your favorite websites and Islamic resources with one click.'
    }
]


export default function Features() {
    return (
        <div id='features' className="bg-[#012230] py-24 text-red-white">
            <div className='max-w-2xl mx-auto space-y-3 px-6 mb-10'>
                <h2 className='text-center text-4xl sm:text-5xl font-semibold'>Mooslem Start Page & Minimalist </h2>
                <p className='text-center text-lg/8'>Mooslem Start Page is a minimalist Chrome extension that transforms your new tab into a calming, functional, and faith-centered experience.</p>
            </div>

            <div className="overflow-hidden py-16 sm:py-30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8 flex items-center order-2 sm:order-1">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-4xl font-semibold sm:text-5xl tracking-tight text-pretty">
                                    Prayer Times
                                </h2>
                                <p className="mt-4 text-lg/8 text-gray-300">
                                    Mooslem Start Page automatically shows daily prayer times based on your location—with Adhan notifications to help you stay on track, even during your busiest days.
                                </p>
                            </div>
                        </div>
                        <Image
                            alt="Product screenshot"
                            src="/images/prayer.png"
                            width={632}
                            height={442}
                            className="w-auto max-w-none h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 order-1 sm:order-2"
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-hidden py-16 sm:py-30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pt-4 lg:pl-4 flex items-center">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-4xl font-semibold sm:text-5xl tracking-tight text-pretty">
                                    Dynamic Background
                                </h2>
                                <p className="mt-4 text-lg/8 text-gray-300">
                                    Mooslem Start Page brings a new aesthetic with every click—featuring dynamic 4K backgrounds that elevate your workspace, help you stay focused, and add a calming visual experience to your daily flow.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end order-first">
                            <Image
                                alt="Product screenshot"
                                src="/images/background.png"
                                width={632}
                                height={442}
                                className="w-auto h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden py-16 sm:py-30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8 flex items-center order-2 sm:order-1">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-4xl font-semibold sm:text-5xl tracking-tight text-pretty">
                                    Customizable
                                </h2>
                                <p className="mt-4 text-lg/8 text-gray-300">
                                    Mooslem Start Page gives you full control—customize clock format, weather settings, notifications, and background visuals to create a workspace that fits both your productivity and your faith.
                                </p>
                            </div>
                        </div>
                        <Image
                            alt="Product screenshot"
                            src="/images/customizable.png"
                            width={632}
                            height={442}
                            className="w-auto h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 order-1 sm:order-2"
                        />
                    </div>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <div className="col-span-2">
                            <h2 className="text-base/7 font-semibold text-gray-300">Everything you need</h2>
                            <p className="mt-2 text-4xl font-semibold sm:text-5xl tracking-tight text-pretty text-gray-200">
                                More Features, More Focus
                            </p>
                            <p className="mt-6 text-base/7 text-gray-300">
                                Mooslem Start Page is designed to enhance your daily routine with features that keep you organized, focused, and connected to your faith. From prayer times to dynamic backgrounds, every element is crafted to support your productivity and spiritual journey.
                            </p>
                        </div>
                        <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-200 sm:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-9">
                                    <dt className="font-semibold text-gray-100">
                                        <CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-gray-100" />
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
