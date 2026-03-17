import Navbar from "./components/Navbar"
import GridBackground from "./components/GridBackground"
import ParticleField from "./components/ParticleField"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data/projects"

export default function Home(){

return(

<div className="text-white min-h-screen">

<GridBackground/>
<ParticleField/>

<Navbar/>

<div className="max-w-6xl mx-auto p-10">

<Hero/>

<h2 className="text-2xl mb-10">
Engineering Projects
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map(p=>(
<ProjectCard key={p.slug} project={p}/>
))}

</div>

</div>

</div>

)

}