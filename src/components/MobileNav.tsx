import {motion} from "framer-motion"
import {CgMenuRightAlt} from "react-icons/cg";
import {GiSplitCross} from "react-icons/gi"
import { useState } from 'react';

import { front_nav_links } from "../constants";
import { Link } from "react-router-dom";

function ExpandedBar() {
    return (
        <motion.div initial={{scale: 0.01, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 0.15}} className="z-100 absolute top-12 -right-3 p-5 rounded-sm bg-white/20 backdrop-blur-xl flex flex-col justify-between items-start text-xl">
            {front_nav_links.map((link, idx)=><Link key={idx} to={link.link} className="hover:text-gray-100 transition-colors duration-150">{link.content}</Link>)}
        </motion.div>
    )
}

export function MobileNav() {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="md:hidden flex flex-col justify-center items-center">
            <button className="text-teal-500 relative">
                {!expanded && <CgMenuRightAlt onClick={()=>setExpanded(!expanded)} className="text-4xl transition-all duration-200"/>}
                {expanded && <GiSplitCross onClick={()=>setExpanded(!expanded)} className="text-3xl transition-all duration-200"/>}
                {expanded && <ExpandedBar/>}
            </button>
        </div>
    );
}