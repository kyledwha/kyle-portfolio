"use client"

import Navbar from "./components/Navbar"
import LabBackground from "./components/LabBackground"
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data/projects"

export default function Home() {

return (

<div className="min-h-screen text-white">

<LabBackground/>

<Navbar/>

<div className="max-w-6xl mx-auto p-10">

<h1 className="text-5xl font-bold mb-6">
Engineering Systems Lab
</h1>

<p className="text-gray-400 max-w-2xl mb-16">
Independent engineering research focused on embedded systems,
energy infrastructure, automation, and experimental hardware.
</p>

<h2 className="text-2xl mb-8">
Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((p)=>(
<ProjectCard key={p.slug} project={p}/>
))}

</div>

</div>

</div>

)

}