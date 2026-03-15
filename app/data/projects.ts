import { Cpu, Zap, Wifi, Sun, Wrench } from "lucide-react"

export const projects = [

{
slug:"bios-tester",
title:"Raspberry Pi BIOS Stress Tester",
icon:Cpu,
image:"/projects/bios.jpg",
summary:"Automated bare-metal endurance testing platform using relay power cycling and USB detection."
},

{
slug:"energy-tower",
title:"Off-Grid Energy Tower",
icon:Zap,
image:"/projects/energy.jpg",
summary:"Hybrid renewable infrastructure combining wind energy and gravitational water storage."
},

{
slug:"gate-network",
title:"Cellular Remote Gate Network",
icon:Wifi,
image:"/projects/gate.jpg",
summary:"Remote infrastructure monitoring system using cellular IoT networking."
},

{
slug:"solar-controller",
title:"Solar Monitoring Controller",
icon:Sun,
image:"/projects/solar.jpg",
summary:"Embedded telemetry system for monitoring solar power generation."
},

{
slug:"ultrasonic-leveling",
title:"Ultrasonic Bed Leveling",
icon:Wrench,
image:"/projects/printer.jpg",
summary:"Experimental auto-leveling system for 3D printers using ultrasonic distance sensing."
}

]