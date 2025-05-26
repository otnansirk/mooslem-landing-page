import { ChatBubbleLeftRightIcon, HeartIcon } from '@heroicons/react/24/outline'
import { DocumentIcon } from '@heroicons/react/24/outline'
import Button from '../form/Button'

export default function Contact() {
    return (
        <div id="contact" className="isolate  text-white bg-cover bg-center bg-[#012230]" >
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
                <div className="mx-auto max-w-2xl sm:text-center mt-20">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Documentation</h2>
                    <p className="mt-5 text-lg/8 ">{`Learn how to use all features of Mooslem Start Page with ease. Step-by-step guides are available to help you get the most out of the experience—whether you're a beginner or advanced user.`}</p>
                </div>
                <div className="flex gap-x-6 justify-center mt-10">
                    <Button className=''>
                        <DocumentIcon aria-hidden="true" className="size-6" />
                        Documentation <span aria-hidden="true">→</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
