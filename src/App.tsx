import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {HeroPage} from "./pages/HeroPage";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage";
import {ContactPage} from "./pages/ContactPage";
import {ProjectsPage} from "./pages/ProjectsPage";

function App() {
    return (
        <div
            className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen overflow-x-hidden overflow-y-hidden px-5 lg:px-0'>
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
