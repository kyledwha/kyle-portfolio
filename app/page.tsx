"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Cpu, Zap, Wifi, Sun, Wrench, ChevronRight } from "lucide-react"

export default function HomePage(){

const [active,setActive] = useState<any>(null)

const projects = [

{
id:"bios",
title:"Raspberry Pi BIOS Stress Tester",
icon:Cpu,
summary:"Automated endurance validation for bare-metal systems."
},

{
id:"energy",
title:"Off-Grid Energy Tower",
icon:Zap,
summary:"Hybrid renewable infrastructure with gravitational storage."
},

{
id:"gate",
title:"Cellular Remote Gate Network",
icon:Wifi,
summary:"Long-range monitoring and remote infrastructure control."
},

{
id:"solar",
title:"Solar Monitoring Controller",
icon:Sun,
summary:"Embedded telemetry controller for off-grid solar systems."
},

{
id:"printer",
title:"Ultrasonic Bed Leveling",
icon:Wrench,
summary:"Experimental automated bed leveling for 3D printers."
}

]

return(

<div className="min-h-screen bg-black text-white">

<div className="max-w-6xl mx-auto p-8">

{/* HERO */}

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
>

<h1 className="text-5xl font-bold mb-4">
Kyle Wharton
</h1>

<p className="text-xl text-gray-400 mb-6">
Engineering Systems • Embedded Control • Experimental Infrastructure
</p>

<p className="max-w-2xl text-gray-500 mb-16">
I design and build experimental engineering systems combining software,
electronics, and mechanical infrastructure.
</p>

</motion.div>

{/* PROJECTS */}

<h2 className="text-2xl font-semibold mb-8">
Engineering Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((p,i)=>{

const Icon = p.icon

return(

<motion.div
key={p.id}
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{delay:i*.1}}
whileHover={{scale:1.04}}
>

<div
onClick={()=>setActive(p)}
className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 cursor-pointer hover:border-neutral-600 transition"
>

<Image
src={`/projects/${p.id}.jpg`}
alt={p.title}
width={600}
height={400}
/>

<div className="p-6">

<Icon className="mb-3"/>

<h3 className="text-lg font-semibold mb-2">
{p.title}
</h3>

<p className="text-gray-400 text-sm mb-4">
{p.summary}
</p>

<div className="flex items-center text-gray-500 text-sm">

View details
<ChevronRight size={16} className="ml-1"/>

</div>

</div>

</div>

</motion.div>

)

})}

</div>

{/* CONTACT */}

<div className="mt-24 flex gap-6">

<a
href="https://github.com/YOUR_GITHUB"
className="px-4 py-2 bg-neutral-800 rounded-lg"
>

GitHub

</a>

<a
href="/resume.pdf"
className="px-4 py-2 bg-neutral-800 rounded-lg"
>

Resume

</a>

<a
href="mailto:you@email.com"
className="px-4 py-2 bg-neutral-800 rounded-lg"
>

Contact

</a>

</div>

</div>

</div>

)

}