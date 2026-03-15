"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ProjectCard({project}) {

const Icon = project.icon

return(

<motion.div
whileHover={{scale:1.05}}
className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-cyan-500 transition"
>

<Image
src={project.image}
alt={project.title}
width={600}
height={400}
/>

<div className="p-6">

<Icon className="mb-3 text-cyan-400"/>

<h3 className="text-lg font-semibold mb-2">
{project.title}
</h3>

<p className="text-gray-400 text-sm mb-4">
{project.summary}
</p>

<a
href={`/projects/${project.slug}`}
className="text-cyan-400 text-sm"
>

View System →

</a>

</div>

</motion.div>

)

}