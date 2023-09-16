import {Link} from "react-router-dom";

import {front_nav_links} from "../constants"

export function WideNav() {
    return (
        <ul className='flex invisible md:visible md:space-x-16'>
            {
                front_nav_links.map((link, idx) =>
                    <li key={idx} className='link nav-link'>
                        <Link to={link.link}>
                            {link.content}
                        </Link>
                    </li>)
            }
        </ul>
    );
}