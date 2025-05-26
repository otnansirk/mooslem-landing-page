import { ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import Button from '../form/Button'

export default function Contact() {
    return (
        <div className="isolate  text-white bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className='backdrop-blur-xl px-6 py-24 sm:py-32 lg:px-8'>

                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Contact</h2>
                    <p className="mt-5 text-lg/8 ">Got questions, feedback, or found a bug? Feel free to reach out—we’d love to hear from you and will respond as soon as we can. 😊</p>
                </div>
                <div className="flex gap-x-6 justify-center mt-10">
                    <Button className=''>
                        <ChatBubbleLeftRightIcon aria-hidden="true" className="size-6" />
                        Gmail
                    </Button>
                    <Button className=''>
                        <HeartIcon aria-hidden="true" className="size-6" />
                        Github
                    </Button>
                </div>
            </div>
        </div>
    )
}
