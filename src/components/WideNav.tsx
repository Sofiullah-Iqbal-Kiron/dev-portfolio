import {Link} from "react-router-dom";

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

export function WideNav() {
    return (
        <ul className='flex invisible md:visible md:space-x-16'>
            {
                nav_links.map((link, idx) =>
                    <li key={idx} className='link nav-link'>
                        <Link to={link.link}>
                            {link.content}
                        </Link>
                    </li>)
            }
        </ul>
    );
}