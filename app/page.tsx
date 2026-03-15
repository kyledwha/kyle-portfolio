"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Cpu, Zap, Wifi, Sun, Wrench, Mail, FileText, ChevronRight } from "lucide-react";

export default function HomePage() {

  const [activeProject, setActiveProject] = useState<any>(null);

  const projects = [

    {
      id: "bios",
      title: "Raspberry Pi BIOS Stress Tester",
      icon: Cpu,
      summary:
        "Automated endurance testing system for bare-metal computers using relay power cycling and BIOS USB detection.",
      details: {
        problem:
          "Large batches of computers needed validation before OS installation. Manual testing was slow and unreliable.",
        solution:
          "A Raspberry Pi controller repeatedly power cycles systems and detects USB initialization in BIOS to confirm successful boot cycles.",
        features: [
          "GPIO relay control",
          "USB detection in BIOS",
          "100-cycle endurance testing",
          "Automated logging"
        ],
        tech: "Python, Raspberry Pi, GPIO automation"
      }
    },

    {
      id: "energy",
      title: "Off-Grid Energy Tower",
      icon: Zap,
      summary:
        "Hybrid renewable infrastructure combining wind power with gravitational water storage.",
      details: {
        problem:
          "Remote properties require resilient energy storage beyond batteries.",
        solution:
          "Wind energy pumps water into an elevated tower and later releases it through hydroelectric generation.",
        features: [
          "Elevated water storage",
          "Wind powered pumping",
          "Hydroelectric recovery",
          "Off-grid energy buffering"
        ],
        tech: "Energy systems, mechanical design"
      }
    },

    {
      id: "gate",
      title: "Cellular Remote Gate Network",
      icon: Wifi,
      summary:
        "Long-range remote gate control and monitoring system for rural properties.",
      details: {
        problem:
          "Remote land often lacks internet access for cameras and gate control.",
        solution:
          "Directional WiFi bridges and LTE cellular modules extend connectivity across large distances.",
        features: [
          "Cellular uplink",
          "Directional WiFi bridge",
          "Remote gate control",
          "Camera integration"
        ],
        tech: "Networking, LTE modules, routers"
      }
    },

    {
      id: "solar",
      title: "Solar Monitoring Controller",
      icon: Sun,
      summary:
        "Embedded system monitoring solar panels, batteries, and generator backup.",
      details: {
        problem:
          "Off-grid solar systems require telemetry to maintain reliability.",
        solution:
          "A microcontroller monitors system status and controls generator backup when needed.",
        features: [
          "Solar current monitoring",
          "Battery telemetry",
          "Generator auto-start",
          "Data logging"
        ],
        tech: "Microcontrollers, sensors, telemetry"
      }
    },

    {
      id: "printer",
      title: "Ultrasonic 3D Printer Bed Leveling",
      icon: Wrench,
      summary:
        "Experimental automated bed leveling using ultrasonic sensors.",
      details: {
        problem:
          "Manual bed leveling on 3D printers is slow and inconsistent.",
        solution:
          "Sensors measure bed distance and automatically adjust leveling actuators.",
        features: [
          "Multi-point measurement",
          "Automatic leveling",
          "Error averaging"
        ],
        tech: "Sensors, microcontrollers"
      }
    }

  ];

  return (

    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        <motion.div initial={{opacity:0}} animate={{opacity:1}}>

          <h1 className="text-5xl font-bold mb-4">
            Kyle Wharton
          </h1>

          <p className="text-xl text-gray-300 mb-4">
            Engineering Systems • Embedded Control • Experimental Infrastructure
          </p>

          <p className="text-gray-400 max-w-3xl mb-12">
            I design and build experimental engineering systems combining
            software, electronics, and mechanical infrastructure.
          </p>

        </motion.div>


        <h2 className="text-2xl font-semibold mb-6">
          Engineering Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {projects.map((project,i)=>{

            const Icon = project.icon;

            return (

              <motion.div
                key={project.id}
                initial={{opacity:0,y:20}}
                animate={{opacity:1,y:0}}
                transition={{delay:i*0.05}}
              >

                <div
                  onClick={()=>setActiveProject(project)}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 cursor-pointer hover:border-gray-700"
                >

                  <Icon className="mb-3"/>

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.summary}
                  </p>

                  <div className="flex items-center text-sm text-gray-500">
                    View details
                    <ChevronRight size={16} className="ml-1"/>
                  </div>

                </div>

              </motion.div>

            )

          })}

        </div>


        {activeProject && (

          <div className="mb-20">

            <h2 className="text-2xl font-semibold mb-4">
              {activeProject.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Problem</h3>
                <p className="text-sm text-gray-400">
                  {activeProject.details.problem}
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Solution</h3>
                <p className="text-sm text-gray-400">
                  {activeProject.details.solution}
                </p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
                <h3 className="font-semibold mb-2">Technology</h3>
                <p className="text-sm text-gray-400">
                  {activeProject.details.tech}
                </p>
              </div>

            </div>

            <button
              className="mt-6 bg-gray-800 px-4 py-2 rounded-lg"
              onClick={()=>setActiveProject(null)}
            >
              Close
            </button>

          </div>

        )}


        <h2 className="text-2xl font-semibold mb-6">
          Technical Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Software</h3>
            <p className="text-sm text-gray-400">
              Python, C/C++, automation scripting, embedded firmware
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Electronics</h3>
            <p className="text-sm text-gray-400">
              Microcontrollers, sensors, relay control systems
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl">
            <h3 className="font-semibold mb-2">Mechanical</h3>
            <p className="text-sm text-gray-400">
              Structural prototyping, energy systems
            </p>
          </div>

        </div>


        <div className="flex gap-4">

          <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center">
            <Github className="mr-2"/> GitHub
          </button>

          <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center">
            <FileText className="mr-2"/> Resume
          </button>

          <button className="bg-gray-800 px-4 py-2 rounded-lg flex items-center">
            <Mail className="mr-2"/> Contact
          </button>

        </div>

      </div>

    </div>

  )

}