import {motion} from 'framer-motion'

import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa6";

interface Links {
    content: any,
    link: string
}

const social_links: Array<Links> = [
    {
        content: <FaFacebook className='text-3xl lg:text-4xl text-blue-500'/>,
        link: 'https://www.facebook.com/kiron1023'
    },
    {
        content: <FaLinkedin className='rounded-2xl text-3xl lg:text-4xl text-blue-600'/>,
        link: 'https://www.linkedin.com/in/sofiullah-iqbal-kiron-968a841b9/'
    },
    {
        content: <FaGithub className='text-3xl lg:text-4xl text-gray-200'/>,
        link: 'https://github.com/Sofiullah-Iqbal-Kiron'
    },
]

export function SocialLinks() {
    return (
        <motion.ul
            className='flex space-x-10 md:space-x-0 md:flex-col md:space-y-8'>
            {
                social_links.map((link, idx) =>
                    <motion.li className='link social-link link-underline bg-white/10 backdrop-blur-lg p-1.5 rounded-full'>
                        <a href={link.link}>{link.content}</a>
                    </motion.li>)
            }
        </motion.ul>
    )
}