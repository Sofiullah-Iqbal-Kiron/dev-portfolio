const skills: Array<string> = [
    'React',
    'Django',
    'MySQL',
    'Manim',
    'JavaFX',
    'LaTeX',
]

export function AboutPage() {
    return (
        <section className='relative min-h-screen flex flex-col lg:flex-row justify-around items-center'>
            <div className='h-[4rem]'/>
            <div className='bg-gradient-to-r from-rose-400 via-fuschia-500 to-indigo-500'>
                <div className='text-left w-2/5'>
                    <h2
                        className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-slate-300 via-fuchsia-200 to-slate-400 font-bold'>Welcome!</h2>
                    <p className='text-lg md:text-xl lg:text-2xl mt-8 text-gray-100'>
                        I am a full stack web developer based on Dhaka, Bangladesh. Writes robust & large scale web
                        applications with React and Django then connect them with a <a
                        className='underline underline-offset-2 hover:text-blue-500 link'
                        href='https://en.wikipedia.org/wiki/Representational_state_transfer'>REST</a> service.
                    </p>
                </div>
            </div>
            <ul id='my-skills'>
                {
                    skills.map((s, idx) =>
                        <li key={idx}>
                            {s}
                        </li>)
                }
            </ul>
        </section>
    )
}