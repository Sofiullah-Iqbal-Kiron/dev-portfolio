import {CgMenuRightAlt} from "react-icons/cg";
import {GiSplitCross} from "react-icons/gi"
import { useState } from 'react';

function ExpandedBar() {
    return (
        <ul className="z-50 absolute top-12 -right-3 p-5 rounded-sm bg-white/20 backdrop-blur-xl flex flex-col justify-between items-start text-xl">
            {/* links are global state via zustand */}
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    )
}

export function MobileNav() {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="md:hidden flex flex-col justify-center items-center">
            <button onClick={()=>setExpanded(!expanded)} className='text-teal-300 hover:text-gray-200 relative'>
                {!expanded && <CgMenuRightAlt className="text-4xl transition-all duration-200"/>}
                {expanded && <GiSplitCross className="text-3xl transition-all duration-200"/>}
                {expanded && <ExpandedBar/>}
            </button>
        </div>
    );
}