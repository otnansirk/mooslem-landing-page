import Image from 'next/image'


export default function Features() {
    return (<div className="bg-[#012230] py-24 text-red-white">
        <div className='max-w-2xl mx-auto space-y-3 px-6 mb-10'>
            <h2 className='text-center text-3xl md:text-4xl'>Mooslem Start Page & Minimalist </h2>
            <p className='text-center'>Mooslem Start Page is a minimalist Chrome extension that transforms your new tab into a calming, functional, and faith-centered experience.</p>
        </div>

        <div className="overflow-hidden py-16 sm:py-30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8 flex items-center order-2 sm:order-1">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-3xl tracking-tight text-pretty sm:text-4xl">
                                Prayer Times
                            </h2>
                            <p className="mt-4 text-lg/8 text-gray-300">
                                Mooslem Start Page automatically shows daily prayer times based on your location—with Adhan notifications to help you stay on track, even during your busiest days.
                            </p>
                        </div>
                    </div>
                    <Image
                        alt="Product screenshot"
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        width={832}
                        height={442}
                        className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 order-1 sm:order-2"
                    />
                </div>
            </div>
        </div>

        <div className="overflow-hidden py-16 sm:py-30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pt-4 lg:pl-4 flex items-center">
                        <div className="lg:max-w-lg">
                            <h2 className="mt-2 text-3xl tracking-tight text-pretty sm:text-4xl">
                                Customizable
                            </h2>
                            <p className="mt-4 text-lg/8 text-gray-300">
                                Mooslem Start Page gives you full control—customize clock format, weather settings, notifications, and background visuals to create a workspace that fits both your productivity and your faith.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start justify-end order-first">
                        <Image
                            alt="Product screenshot"
                            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                            width={832}
                            height={442}
                            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
