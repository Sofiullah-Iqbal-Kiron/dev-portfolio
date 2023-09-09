const skills: Array<string> = [
    'React',
    'Django',
    'MySQL',
    'Manim',
    'JavaFX',
    'LaTeX',
]

const skillset1: Array<string> = [
    'React',
    'Django',
    ''
]

export function AboutPage() {
    return (
        <section className='relative min-h-screen flex flex-col lg:flex-row justify-around items-center'>
            {/*<div className='h-[4rem]'/>*/}
            <div>
                <div id="skills-icon">
                    <ul>
                        <li>React Django MySQL</li>
                    </ul>
                </div>
                <p>
                    I PREFER AGILE PRACTICES.
                </p>
            </div>
            <p>Life is all about code and coffee.</p>
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
            {/*<ul id='my-skills'>*/}
            {/*    {*/}
            {/*        skills.map((s, idx) =>*/}
            {/*            <li key={idx}>*/}
            {/*                {s}*/}
            {/*            </li>)*/}
            {/*    }*/}
            {/*</ul>*/}
        </section>
    )
}