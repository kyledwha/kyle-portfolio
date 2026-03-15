"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { Github, Cpu, Zap, Wifi, Sun, Wrench, Mail, FileText, ChevronRight } from "lucide-react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: "bios",
      title: "Raspberry Pi BIOS Stress Tester",
      icon: Cpu,
      summary:
        "Automated endurance testing system for bare‑metal computers using relay power cycling and BIOS USB detection.",
      details: {
        problem:
          "Large batches of computers needed validation before OS installation. Manual testing was time‑consuming and unreliable.",
        solution:
          "Designed a Raspberry Pi relay controller that repeatedly power cycles systems, detects USB initialization from BIOS, and logs successful boot events.",
        features: [
          "GPIO relay control for multiple computers",
          "USB device detection inside BIOS",
          "100‑cycle endurance validation",
          "Automatic OS flashing after successful validation",
          "Timestamped logging"
        ],
        tech: "Python, Raspberry Pi, GPIO automation, USB enumeration"
      }
    },

    {
      id: "energy",
      title: "Off‑Grid Energy Tower",
      icon: Zap,
      summary:
        "Hybrid renewable infrastructure concept combining wind capture and gravitational water storage.",
      details: {
        problem:
          "Remote properties require resilient power generation without relying entirely on batteries.",
        solution:
          "Designed a system that stores excess wind energy by pumping water to a tower, later recovering the energy through hydroelectric generation.",
        features: [
          "Elevated water storage tower",
          "Wind‑powered pumping",
          "Hydroelectric recovery",
          "Energy buffering for off‑grid properties"
        ],
        tech: "Energy systems, fluid mechanics, mechanical design"
      }
    },

    {
      id: "gate",
      title: "Cellular Remote Gate Network",
      icon: Wifi,
      summary:
        "Long‑range rural network for controlling property gates and monitoring cameras.",
      details: {
        problem:
          "Rural properties often lack internet connectivity but require remote monitoring and access control.",
        solution:
          "Built a network combining cellular modules and directional WiFi links to extend connectivity across large distances.",
        features: [
          "Cellular uplink",
          "Long‑range WiFi bridge",
          "Remote gate control",
          "Camera integration"
        ],
        tech: "Networking, LTE modules, routers, embedded systems"
      }
    },

    {
      id: "solar",
      title: "Solar Monitoring Controller",
      icon: Sun,
      summary:
        "Embedded controller that monitors solar output, batteries, inverter state, and generator backup.",
      details: {
        problem:
          "Off‑grid solar installations require detailed telemetry to ensure reliability.",
        solution:
          "Built a Pico W based controller that records system telemetry and controls relays for generators and load management.",
        features: [
          "Panel current monitoring",
          "Battery state tracking",
          "Generator auto‑start",
          "CSV telemetry logging"
        ],
        tech: "Raspberry Pi Pico W, sensors, telemetry systems"
      }
    },

    {
      id: "printer",
      title: "Ultrasonic Bed Leveling",
      icon: Wrench,
      summary:
        "Experimental automated bed leveling using ultrasonic sensors and mechanical adjustment.",
      details: {
        problem:
          "Manual leveling of 3D printer beds is inconsistent and time consuming.",
        solution:
          "Developed a system that measures multiple bed points using ultrasonic sensors and automatically adjusts the bed using relay‑driven actuators.",
        features: [
          "Multi‑point measurement",
          "Error averaging",
          "Automatic mechanical leveling"
        ],
        tech: "Microcontrollers, sensor systems, automation"
      }
    }
  ];

  const ProjectIcon = ({ icon: Icon }) => <Icon className="mb-3" />;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-5xl font-bold mb-4">Kyle Wharton</h1>

          <p className="text-xl text-gray-300 mb-4">
            Engineering Systems • Embedded Control • Experimental Infrastructure
          </p>

          <p className="text-gray-400 max-w-3xl mb-12">
            I design and build experimental engineering systems combining software,
            electronics, and mechanical infrastructure. My work focuses on
            automation, resilient off‑grid energy systems, remote infrastructure,
            and embedded control platforms.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <h2 className="text-2xl font-semibold mb-6">Engineering Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                className="bg-gray-900 border-gray-800 rounded-2xl shadow-lg cursor-pointer hover:border-gray-700"
                onClick={() => setActiveProject(project)}
              >
                <CardContent className="p-6">
                  <ProjectIcon icon={project.icon} />

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.summary}
                  </p>

                  <div className="flex items-center text-sm text-gray-500">
                    View details
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* PROJECT DETAIL PANEL */}
        {activeProject && (
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-4">
              {activeProject.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Problem</h3>
                  <p className="text-sm text-gray-400">
                    {activeProject.details.problem}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <p className="text-sm text-gray-400">
                    {activeProject.details.solution}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Technology</h3>
                  <p className="text-sm text-gray-400">
                    {activeProject.details.tech}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900 border-gray-800 mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  {activeProject.details.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Button
              className="mt-6"
              variant="secondary"
              onClick={() => setActiveProject(null)}
            >
              Close
            </Button>
          </div>
        )}

        {/* SKILLS */}
        <h2 className="text-2xl font-semibold mb-6">Technical Capabilities</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Software</h3>
              <p className="text-sm text-gray-400">
                Python, C/C++, embedded firmware, automation scripting,
                telemetry systems
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Electronics</h3>
              <p className="text-sm text-gray-400">
                Microcontrollers, sensor interfaces, relay control,
                power monitoring systems
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Mechanical</h3>
              <p className="text-sm text-gray-400">
                Structural prototyping, energy mechanisms, experimental
                infrastructure systems
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CONTACT */}
        <div className="flex gap-4">
          <Button>
            <Github className="mr-2" />
            GitHub
          </Button>

          <Button variant="secondary">
            <FileText className="mr-2" />
            Resume
          </Button>

          <Button variant="secondary">
            <Mail className="mr-2" />
            Contact
          </Button>
        </div>

      </div>
    </div>
  );
}
