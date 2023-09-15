import {TbMenu2} from 'react-icons/tb'
import {CgMenuRightAlt} from "react-icons/cg";

export function MobileNav() {
    return (
        <div className="md:hidden flex flex-col justify-center items-center dropdown dropdown-bottom">
            <button className='btn ps-2 pe-0 py-1 bg-transparent border-none text-teal-400'>
                <CgMenuRightAlt className="text-4xl"/>
                <ul
                    className="menu dropdown-content z-[5] p-0 rounded-box shadow bg-base-100 w-30 mt-3 mr-10">
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </button>
        </div>
    );
}