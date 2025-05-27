import { useTranslations } from "next-intl"


export default function Footer() {

    const t = useTranslations('Footer');


    const navigation = {
        main: [
            { name: t('privacy-policy'), href: '#' }
        ]
    }

    return (
        <footer className="bg-gray-900">
            <div className="mx-auto max-w-7xl overflow-hidden px-3 py-5 lg:px-8">
                <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                    {navigation.main.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center">
                    {t('copyright')}
                </div>
                <p className="mt-5 text-center text-sm/6 text-gray-400">&copy; 2025 - {(new Date()).getFullYear()} Mooslem.</p>
            </div>
        </footer>
    )
}
