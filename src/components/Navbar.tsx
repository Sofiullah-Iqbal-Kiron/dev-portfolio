import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

interface Links {
    content: any,
    link: string
}

const nav_links: Array<Links> = [
    {
        content: 'About',
        link: 'about'
    },
    {
        content: 'Projects',
        link: 'projects'
    },
    {
        content: 'Contact',
        link: 'contact'
    },
]

export function Navbar() {
    return (
        <motion.nav
            initial={{y: '-100vh', opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.7}}

            id='navbar' className='absolute top-0 inset-x-0 z-10 h-[4rem] flex justify-between items-center px-5 backdrop-blur-sm'>

            <Link to='/' className='link nav-link text-2xl'>KIRON</Link>
            <ul className='flex justify-center sm:justify-end items-center space-x-10 md:space-x-16 h-full'>
                {
                    nav_links.map((link, idx) =>
                        <li key={idx} className='link nav-link'>
                            <Link to={link.link}>
                                {link.content}
                            </Link>
                        </li>)
                }
            </ul>
        </motion.nav>
    )
}