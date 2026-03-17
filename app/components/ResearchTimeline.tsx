export default function ResearchTimeline(){

const entries=[
{year:"2026",title:"Energy Tower Research"},
{year:"2025",title:"Remote Gate Control Network"},
{year:"2024",title:"Embedded Solar Telemetry"},
]

return(

<div className="space-y-8">

{entries.map(e=>(

<div key={e.year} className="border-l border-cyan-600 pl-6">

<div className="text-cyan-400">
{e.year}
</div>

<div className="text-lg">
{e.title}
</div>

</div>

))}

</div>

)

}