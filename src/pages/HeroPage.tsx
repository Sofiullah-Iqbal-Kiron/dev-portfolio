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
            className='min-h-screen flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:justify-around items-center'>
            <SocialLinks/>

            <motion.div
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.7, duration: 0.5}}

                className='flex flex-col space-y-2 text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-medium'>Sofiullah Iqbal Kiron</h1>
                <h2 className='text-xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-300'>Full
                    Stack Web Programmer</h2>
            </motion.div>

            <HeroImage/>
        </section>
    )
}