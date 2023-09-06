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
        <nav id='navbar' className='absolute top-0 inset-x-0 z-10 h-[4rem]'>
            <ul className='px-2 flex justify-center sm:justify-end items-center space-x-10 md:space-x-16 h-full pe-5'>
                {
                    nav_links.map((link, idx) =>
                        <li key={idx} className='link nav-link'>
                            <Link to={link.link}>
                                {link.content}
                            </Link>
                        </li>)
                }
            </ul>
        </nav>
    )
}