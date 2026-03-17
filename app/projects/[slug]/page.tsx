import { projects } from "../../data/projects"

import { Cpu, Zap, Wifi, Sun, Wrench } from "lucide-react"
import TelemetryPanel from "../../components/TelemetryPanel"
const iconMap:any = {
cpu: Cpu,
zap: Zap,
wifi: Wifi,
sun: Sun,
wrench: Wrench
}

export default function ProjectPage({ params }: { params: { slug: string } }) {

const project = projects.find(p => p.slug === params.slug)

if(!project) return <div>Not found</div>

const Icon = iconMap[project.icon]
return(

<div className="min-h-screen bg-black text-white p-10">

<div className="max-w-4xl mx-auto">

<Icon className="text-cyan-400 mb-6"/>

<h1 className="text-4xl font-bold mb-6">
{project.title}
</h1>

<p className="text-gray-400 mb-10">
{project.summary}
</p>

<h2 className="text-xl mb-4">
System Architecture
</h2>

<p className="text-gray-500 mb-10">
This system combines embedded hardware, software automation,
and infrastructure components to achieve autonomous operation.
</p>

<h2 className="text-xl mb-4">
Engineering Challenges
</h2>

<p className="text-gray-500 mb-10">
Development required solving problems related to power stability,
signal reliability, and real-world environmental conditions.
</p>

<h2 className="text-xl mb-4">
Future Research
</h2>

<p className="text-gray-500">
Future development will include additional telemetry, automation,
and system scalability.

<TelemetryPanel />
</p>

</div>

</div>

)

}