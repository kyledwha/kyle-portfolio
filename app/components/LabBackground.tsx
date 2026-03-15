"use client"

export default function LabBackground() {

return (

<div
className="fixed inset-0 -z-10"
style={{
background: `
radial-gradient(circle at 20% 20%, rgba(0,255,200,0.05), transparent),
radial-gradient(circle at 80% 40%, rgba(0,150,255,0.06), transparent),
#050505
`
}}
>

<div className="absolute inset-0 opacity-20">

<div
className="w-full h-full"
style={{
backgroundImage:
"linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
backgroundSize: "40px 40px"
}}
/>

</div>

</div>

)

}
