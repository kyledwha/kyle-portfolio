"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Turbine(){

return(

<mesh rotation={[0,0,0]}>

<cylinderGeometry args={[0.3,0.3,3]} />
<meshStandardMaterial color="cyan"/>

</mesh>

)

}

export default function WindTurbine3D(){

return(

<div className="h-[400px]">

<Canvas>

ambientLight intensity={0.4} />
directionalLight position={[3,3,3]} />

<Turbine/>

<OrbitControls/>

</Canvas>

</div>

)

}