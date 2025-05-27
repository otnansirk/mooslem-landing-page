import Link from "next/link"

const Docs = () => {
    return (
        <div className="bg-[#012230]">
            <div className="relative bg-center min-h-64 max-h-64" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558617862-7a96a08f00c7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="backdrop-blur-0 backdrop-brightness-75 absolute w-full h-full flex items-end justify-center">
                </div>
            </div>
            <div className="max-w-6xl mx-auto text-gray-800 px-6 lg:px-8">
                <div className="bg-wite min-h-screen flex flex-col lg:flex-row p-6 lg:p-8">

                    <aside className="lg:w-1/4 mb-10 lg:mb-0">
                        <div className="py-6 rounded-xl shadow-sm text-gray-300 flex gap-2 flex-wrap">
                            <Link href="/docs" className="bg-white/10 hover:bg-white/20 text-sm rounded-md ring-1 ring-white/20 py-1 px-2 inline-block">
                                Greetings
                            </Link>
                            <Link href="/docs" className="bg-white/10 hover:bg-white/20 text-sm rounded-md ring-1 ring-white/20 py-1 px-2 inline-block">
                                Prayer Times
                            </Link>
                            <Link href="/docs" className="bg-white/10 hover:bg-white/20 text-sm rounded-md ring-1 ring-white/20 py-1 px-2 inline-block">
                                Notes
                            </Link>
                            <Link href="/docs" className="bg-white/10 hover:bg-white/20 text-sm rounded-md ring-1 ring-white/20 py-1 px-2 inline-block">
                                Wheater
                            </Link>
                        </div>
                    </aside>

                    <main className="lg:w-3/4 lg:pl-10 overflow-y-auto rounded-md text-gray-300">

                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-2 mt-4 text-gray-100">
                            7 React Patterns That Made Me a Better Front-End Developer
                        </h1>

                        <hr className="my-10 border-gray-600" />

                        <div className="prose prose-lg max-w-none mb-20">
                            <p>It’s 2 AM. I’m knee-deep in spaghetti code. My <code>useEffect</code> dependencies are screaming, the UI flickers like a cheap horror movie, and some mystery re-render is haunting my app every time I breathe.</p>
                            <p>Classic React chaos. Ever been there?</p>
                            <p>I used to think I was a decent developer. But React humbled me. Hard.</p>
                            <p>Turns out, knowing <code>useState</code> and slapping on some JSX doesn’t mean you know what the hell you’re doing. It means you <strong>started</strong>. But to actually <strong>ship</strong> maintainable, scalable apps? You need patterns. Real ones.</p>
                            <p>Here are 7 React patterns that slapped sense into me — and might just save your sanity too.</p>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-2 mt-4 text-gray-100">
                            7 React Patterns That Made Me a Better Front-End Developer
                        </h1>

                        <hr className="my-10 border-gray-600" />

                        <div className="prose prose-lg max-w-none">
                            <p>It’s 2 AM. I’m knee-deep in spaghetti code. My <code>useEffect</code> dependencies are screaming, the UI flickers like a cheap horror movie, and some mystery re-render is haunting my app every time I breathe.</p>
                            <p>Classic React chaos. Ever been there?</p>
                            <p>I used to think I was a decent developer. But React humbled me. Hard.</p>
                            <p>Turns out, knowing <code>useState</code> and slapping on some JSX doesn’t mean you know what the hell you’re doing. It means you <strong>started</strong>. But to actually <strong>ship</strong> maintainable, scalable apps? You need patterns. Real ones.</p>
                            <p>Here are 7 React patterns that slapped sense into me — and might just save your sanity too.</p>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Docs