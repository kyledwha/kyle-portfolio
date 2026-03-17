"use client"

import { useEffect, useRef } from "react"

export default function ParticleField(){

const canvasRef = useRef<HTMLCanvasElement>(null)

useEffect(()=>{

const canvas = canvasRef.current!
const ctx = canvas.getContext("2d")!

let particles:any[] = []

canvas.width = window.innerWidth
canvas.height = window.innerHeight

for(let i=0;i<120;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-.5)*0.3,
vy:(Math.random()-.5)*0.3,
size:Math.random()*2
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.vx
p.y+=p.vy

if(p.x<0||p.x>canvas.width)p.vx*=-1
if(p.y<0||p.y>canvas.height)p.vy*=-1

ctx.fillStyle="rgba(0,255,255,0.7)"
ctx.beginPath()
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()

},[])

return(

<canvas
ref={canvasRef}
className="fixed inset-0 -z-20"
/>

)
}