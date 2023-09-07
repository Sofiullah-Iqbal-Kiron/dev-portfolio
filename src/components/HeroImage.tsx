import itp from "../assets/itp.jpg";
import {motion} from 'framer-motion'

export function HeroImage() {
    return (
        <div className='relative z-10'>
            <motion.img
                initial={{x: "100vw"}}
                animate={{x: 0}}
                transition={{delay: 1.8, duration: 1}}

                src={itp} alt='industrial tour presentation day: me' height={400} width={250}
                className='rounded-xl shadow-2xl z-10'/>
            <motion.div
                initial={{x: "150vw"}}
                animate={{x: 0}}
                transition={{delay: 2.1, duration: 1.1}}

                className='h-[330px] w-[250px] border-2 border-amber-300 rounded-xl absolute left-8 top-8 -z-10 shadow-2xl'/>
        </div>
    )
}