"use client"

import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="py-32">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:.8}}
className="text-6xl font-bold mb-6"
>

Engineering Systems Laboratory

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.4}}
className="text-gray-400 max-w-xl text-lg"
>

Independent research and engineering development focused on
embedded systems, infrastructure automation, and renewable
energy systems.

</motion.p>

</section>

)

}