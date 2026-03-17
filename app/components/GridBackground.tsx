export default function GridBackground(){

return(

<div className="fixed inset-0 -z-30">

<div
className="w-full h-full opacity-20"
style={{
backgroundImage:
"linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
backgroundSize:"50px 50px"
}}
/>

</div>

)

}