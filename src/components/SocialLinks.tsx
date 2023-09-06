import {motion} from 'framer-motion'

import {FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa6";

interface Links {
    content: any,
    link: string
}

const social_links: Array<Links> = [
    {
        content: <FaFacebook className='text-2xl sm:text-3xl lg:text-4xl text-gray-100'/>,
        link: ''
    },
    {
        content: <FaLinkedin className='text-2xl sm:text-3xl lg:text-4xl text-gray-100'/>,
        link: ''
    },
    {
        content: <FaGithub className='text-2xl sm:text-3xl lg:text-4xl text-gray-100'/>,
        link: ''
    },
]

export function SocialLinks() {
    return (
        <motion.ul
            className='flex space-x-10 sm:space-x-0 sm:flex-col sm:space-y-8'>
            {
                social_links.map((link, idx) =>
                    <motion.li className='link social-link link-underline'>
                        <a href={link.link}>{link.content}</a>
                    </motion.li>)
            }
        </motion.ul>
    )
}