import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa6'
import {Navbar} from "../components/Navbar";
import {SocialLinks} from "../components/SocialLinks";

import {motion} from 'framer-motion'
import {HeroImage} from "../components/HeroImage";

interface Links {
    content: any,
    link: string
}

const social_links: Array<Links> = [
    {
        content: <FaFacebook className='text-sky-600'/>,
        link: ''
    },
    {
        content: <FaLinkedin className='text-blue-800'/>,
        link: ''
    },
    {
        content: <FaGithub className='text-gray-900'/>,
        link: ''
    },
]

export function HeroPage() {
    return (
        <section
            className='hero-page'>
            <SocialLinks/>

            <div className='flex flex-col space-y-2 text-center'>
                <motion.h1
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 1, duration: 0.7}}

                    className='text-3xl md:text-4xl lg:text-6xl font-medium transition-all duration-150'>Sofiullah Iqbal Kiron
                </motion.h1>
                <motion.h2
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 1.5, duration: 0.7}}

                    className='text-xl md:text-2xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-300 transition-all duration-150'>Full
                    Stack Web Programmer
                </motion.h2>
            </div>

            <HeroImage/>
        </section>
    )
}