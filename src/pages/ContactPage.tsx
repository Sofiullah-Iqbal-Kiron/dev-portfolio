import {useForm} from "react-hook-form"

import gmail from "../assets/gmail.svg"
import whatsapp from "../assets/whatsapp.svg"
import telegram from "../assets/telegram.svg"
import messenger from "../assets/messenger.svg"

const contact_links=[
    {
        logo: gmail,
        title: 'Gmail',
        content: 'sofiul.k.1023@gmail.com'
    },
    {
        logo: whatsapp,
        title: 'WhatsApp',
        content: 'wa.me'
    },
    {
        logo: telegram,
        title: 'Telegram',
        content: 'kironteleAtMe'
    },
    {
        logo: messenger,
        title: 'Messenger',
        content: 'Msg.me'
    }
]

interface MediaBarProps {
    logo: any,
    title: string,
    content: string
}

function MediaBar({logo, title, content}: MediaBarProps){
    return (
        <a href="#" className="flex space-x-3 items-center">
            <img src={logo} alt={title} className="h-[3rem]"/>
            <div className="flex flex-col">
                <p>{title}</p>
                <p>{content}</p>
            </div>
        </a>
    )
}

function ContactMedia(){
    return (
        <div className="flex sm:flex-col space-x-5 sm:space-x-0 sm:space-y-7">
            {contact_links.map((obj, idx)=><MediaBar key={idx} logo={obj.logo} title={obj.title} content={obj.content}/>)}
        </div>
    )
}

function ContactForm(){
    const {register, handleSubmit, watch, formState: {errors}}=useForm()

    const onContactFormSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onContactFormSubmit)} className="font-serif w-full sm:w-1/2 md:w-1/3 flex flex-col justify-center items-center space-y-5">
            <legend className="text-2xl text-center mb-8 sm:mb-5">Let me know what kind of project you want</legend>
            <input {...register("name")} placeholder="Your Name" className="contact-form-input"/>
            <input {...register("email")} type="email" placeholder="Your Email" className="contact-form-input"/>
            <textarea {...register("project abstract")} placeholder="Project Abstract" className="contact-form-textarea"/>
            <button type="submit" className="font-bold font-mono bg-gradient-to-br from-teal-400 to-teal-600 w-2/3 py-3 rounded-md transition-colors duration-200">Send</button>
        </form>
    )
}

export function ContactPage() {
    return (
        <section className="min-h-screen flex flex-col sm:flex-row justify-evenly sm:justify-around items-center">
            <ContactMedia/>
            <ContactForm/>
        </section>
    )
}