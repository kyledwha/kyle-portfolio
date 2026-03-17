"use client"

import { motion } from "framer-motion"

const nodes = [
"Solar Array",
"Controller",
"Battery",
"Inverter",
"Load"
]

export default function SystemDiagram(){

return(

<div className="flex gap-8 items-center flex-wrap">

{nodes.map((n,i)=>(

<motion.div
key={n}
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*.2}}
className="px-4 py-3 bg-neutral-900 border border-cyan-600 rounded"
>

{n}

</motion.div>

))}

</div>

)

}