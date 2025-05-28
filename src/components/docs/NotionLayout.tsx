"use client"

import { getDocsNavigationByLocale } from "@/utils/docs-navigation";
import Link from "next/link";
import { useParams } from "next/navigation";

const NotionLayout = ({ children }: { children: React.ReactNode }) => {

    const { slug, locale }: { slug: string, locale: string } = useParams()
    const background = "https://images.unsplash.com/photo-1558617862-7a96a08f00c7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const NAVIGATION = getDocsNavigationByLocale(locale ?? "en");

    return (
        <div className="bg-[#012230]">
            <div className="relative bg-center min-h-64 max-h-64" style={{ backgroundImage: `url('${background}')` }}>
                <div className="backdrop-blur-0 backdrop-brightness-75 absolute w-full h-full flex items-end justify-center">
                </div>
            </div>
            <div className="max-w-6xl mx-auto text-gray-800 px-6 lg:px-8">
                <div className="bg-wite min-h-screen flex flex-col lg:flex-row p-6 lg:p-8">

                    <aside className="lg:w-1/4 mb-10 lg:mb-0">
                        <div className="py-6 rounded-xl shadow-sm text-gray-300 flex gap-2 flex-wrap">
                            {NAVIGATION.map(item => (
                                <Link
                                    key={item.pageId}
                                    href={item.href}
                                    className={`${item.href.includes(slug ?? "greetings") ? 'bg-white/30 hover:bg-white/40' : 'bg-white/10 hover:bg-white/20'}  text-sm rounded-md ring-1 ring-white/20 py-1 px-2 inline-block`}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </aside>

                    <main className="lg:w-3/4 lg:pl-10 overflow-y-auto rounded-md text-gray-300">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default NotionLayout;