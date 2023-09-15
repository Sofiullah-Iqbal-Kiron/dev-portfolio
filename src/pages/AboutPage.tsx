import react from '../assets/react.svg'
import django from '../assets/django.svg'
import mysql from '../assets/mysql.svg'
import manim from '../assets/manim.svg'
import javafx from '../assets/JavaFX_Logo.png'
import latex from '../assets/latex.svg'

interface Skill {
    logo: any,
    title: string,
    link: string,
    width?: number,
    height?: number
}

const skillset1: Array<Skill> = [
    {
        logo: react,
        title: 'React',
        link: 'https://react.dev/',
        width: 70
    },
    {
        logo: django,
        title: 'Django',
        link: 'https://react.dev/',
        width: 70
    },
    {
        logo: mysql,
        title: 'MySQL',
        link: 'https://react.dev/',
        width: 100
    }
]

const skillset2: Array<Skill> = [
    {
        logo: manim,
        title: 'Manim',
        link: 'https://react.dev/',
        width: 130
    },
    {
        logo: javafx,
        title: 'JavaFX',
        link: 'https://react.dev/',
        width: 130
    },
    {
        logo: latex,
        title: 'LaTeX',
        link: 'https://react.dev/',
        width: 70
    }
]

export function AboutPage() {
    return (
        <section className='relative min-h-screen flex flex-col lg:flex-row justify-around items-center'>
            <div className='h-[4rem]'/>
            <div className="flex justify-around items-center w-full">
                {skillset1.map((skill, idx) =>
                    <a href={skill.link}>
                        <img src={skill.logo} alt={skill.title} width={skill.width}/>
                    </a>
                )}
            </div>
            <div className={`flex justify-around w-full`}>
                {skillset2.map((skill, idx) =>
                    <li>
                        <a href={skill.link}>
                            <img src={skill.logo} alt={skill.title} width={skill.width}/>
                        </a>
                    </li>)}
            </div>

            <div className='flex justify-around'>
                <p className='text-left'>
                    I PREFER AGILE PRACTICES.
                </p>
                <p className='text-right'>
                    Life is all about code and coffee.
                </p>
            </div>

            <div className=''>
                <div className='text-left w-2/5'>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-slate-500 via-fuchsia-400 to-slate-800'>
                        Welcome!
                    </h2>
                    <p className='text-lg md:text-xl lg:text-2xl mt-2 text-gray-100 font-thin'>
                        I am a full stack web developer based on Dhaka, Bangladesh.
                        Writes robust & large scale web applications with React and Django then connect them with a <a
                        className='hover:text-blue-500 link'
                        href='https://en.wikipedia.org/wiki/Representational_state_transfer'>REST</a> service.
                    </p>
                </div>
            </div>
        </section>
    )
}