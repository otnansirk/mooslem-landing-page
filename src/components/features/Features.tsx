import { CheckIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl';
import Image from 'next/image'




export default function Features() {
    const t = useTranslations('Features');

    const features = [
        {
            name: t('feature_adhan-title'),
            description: t('feature_adhan-description')
        },
        {
            name: t('feature_clock-title'),
            description: t('feature_clock-description')
        },
        {
            name: t('feature_weather-title'),
            description: t('feature_weather-description')
        },
        {
            name: t('feature_background-title'),
            description: t('feature_background-description')
        },
        {
            name: t('feature_notes-title'),
            description: t('feature_notes-description')
        },
        {
            name: t('feature_customization-title'),
            description: t('feature_customization-description')
        },
        {
            name: t('feature_dark-mode-title'),
            description: t('feature_dark-mode-description')
        },
        {
            name: t('feature_quran-title'),
            description: t('feature_quran-description')
        },
        {
            name: t('feature_quotes-title'),
            description: t('feature_quotes-description')
        },
        {
            name: t('feature_language-title'),
            describetion: t('feature_language-description')
        },
        {
            name: t('feature_bookmarks-title'),
            description: t('feature_bookmarks-description')
        }
    ]

    return (
        <div id='features' className="bg-[#012230] py-24 text-red-white">
            <div className='max-w-2xl mx-auto space-y-3 px-6 mb-10'>
                <h2 className='text-center text-4xl sm:text-5xl font-semibold'>{t('title')} </h2>
                <p className='text-center text-lg/8'>{t('description')}</p>
            </div>

            <div className="overflow-hidden py-16 sm:py-30">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8 flex items-center order-2 sm:order-1">
                            <div className="lg:max-w-lg">
                                <h2 className="mt-2 text-4xl font-semibold sm:text-5xl tracking-tight text-pretty">
                                    {t('feature_prayer-title')}
                                </h2>
                                <p className="mt-4 text-lg/8 text-gray-300">{t('feature_prayer-description')}</p>
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
                                    {t('feature_bg-dynamic-title')}
                                </h2>
                                <p className="mt-4 text-lg/8 text-gray-300">{t('feature_bg-dynamic-description')}</p>
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
                                    {t('feature_customizable-title')}
                                </h2>
                                <p className="mt-4 text-lg/8 text-gray-300">{t('feature_customizable-description')}</p>
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
                            <h2 className="text-base/7 font-semibold text-gray-300">{t('more_label')}</h2>
                            <p className="mt-2 text-4xl font-semibold sm:text-5xl tracking-tight text-pretty text-gray-200">
                                {t('more_title')}
                            </p>
                            <p className="mt-6 text-base/7 text-gray-300">
                                {t('more_description')}
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
