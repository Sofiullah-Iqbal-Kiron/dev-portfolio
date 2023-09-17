import {HeroPage} from "./pages/HeroPage";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {ProjectsPage} from "./pages/ProjectsPage";
import {Navbar} from "./components/Navbar";

import galaxy_bg from "../src/assets/galaxy_bg.jpg";

function App() {
    return (
        <div style={{backgroundImage: `url('${galaxy_bg}')`}}
             className='bg-cover bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen min-w-full overflow-x-hidden overflow-y-hidden px-5 lg:px-0'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HeroPage/>}/>
                <Route path='about' element={<AboutPage/>}/>
                <Route path='projects' element={<ProjectsPage/>}/>
                <Route path='contact' element={<ContactPage/>}/>
            </Routes>
        </div>
    );
}

export default App
