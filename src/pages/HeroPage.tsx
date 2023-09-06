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
            className='relative min-h-screen flex flex-col sm:flex-row justify-center space-y-12 sm:space-y-0 sm:justify-around items-center'>
            <Navbar/>
            <SocialLinks/>

            <motion.div
                initial={{y: 100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7}}

                className='flex flex-col space-y-2 text-center'>
                <h1 className='text-3xl font-medium md:text-6xl'>Sofiullah Iqbal Kiron</h1>
                <h2 className='text-xl md:text-4xl text-gray-400'>Full Stack Web Programmer</h2>
            </motion.div>

            <HeroImage/>
        </section>
    )
}