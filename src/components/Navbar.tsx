import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import {MobileNav} from "./MobileNav";
import {WideNav} from "./WideNav";

export function Navbar() {
    return (
        <motion.nav
            initial={{y: '-100vh', opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1}}

            id='navbar' className='bg-white/10 backdrop-blur-sm fixed top-0 inset-x-0 z-30 h-[3.25rem] md:h-[4rem] flex justify-between items-center px-5'
        >

            <Link to='/' className='link nav-link text-3xl font-bold text-teal-600 md:text-gray-100 hover:text-gray-200 transition-colors'>KIRON</Link>

            <div className='flex items-center'>
                <WideNav/>
                <MobileNav/>
            </div>
        </motion.nav>
    )
}