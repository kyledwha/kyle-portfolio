"use client"

import { useEffect, useState } from "react"

type Status = "ONLINE" | "WARNING" | "FAULT"

export default function ScadaPanel() {

  const [status, setStatus] = useState<Status>("ONLINE")
  const [log, setLog] = useState<string[]>([])
  const [metrics, setMetrics] = useState({
    temp: 40,
    load: 65,
    signal: 90
  })

  // simulate system behavior
  useEffect(() => {

    const interval = setInterval(() => {

      const temp = 35 + Math.random() * 15
      const load = 50 + Math.random() * 40
      const signal = 70 + Math.random() * 30

      setMetrics({ temp, load, signal })

      let newStatus: Status = "ONLINE"

      if (temp > 48 || load > 85) newStatus = "WARNING"
      if (temp > 55 || signal < 60) newStatus = "FAULT"

      setStatus(newStatus)

      const message = `[${new Date().toLocaleTimeString()}] ${newStatus} | Temp:${temp.toFixed(
        1
      )}C Load:${load.toFixed(0)}% Signal:${signal.toFixed(0)}%`

      setLog(prev => {
        const updated = [message, ...prev]
        return updated.slice(0, 8)
      })

    }, 1200)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="mt-20">

      <h2 className="text-xl text-cyan-400 mb-6">
        System Control Panel
      </h2>

      {/* STATUS BAR */}
      <div className="flex items-center gap-4 mb-8">

        <div className={`px-4 py-2 rounded font-semibold text-sm ${
          status === "ONLINE"
            ? "bg-green-600/20 text-green-400 border border-green-500"
            : status === "WARNING"
            ? "bg-yellow-600/20 text-yellow-400 border border-yellow-500"
            : "bg-red-600/20 text-red-400 border border-red-500"
        }`}>
          {status}
        </div>

        <div className="text-gray-400 text-sm">
          SYSTEM STATUS
        </div>

      </div>

      {/* METRICS */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <Metric label="Temperature" value={metrics.temp} unit="°C" />
        <Metric label="Load" value={metrics.load} unit="%" />
        <Metric label="Signal" value={metrics.signal} unit="%" />

      </div>

      {/* SUBSYSTEMS */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <Subsystem name="Power System" />
        <Subsystem name="Control Unit" />
        <Subsystem name="Network Link" />

      </div>

      {/* EVENT LOG */}
      <div className="bg-black border border-neutral-800 p-4 rounded-lg font-mono text-sm">

        <div className="text-cyan-400 mb-2">
          Event Log
        </div>

        <div className="space-y-1 text-green-400">

          {log.map((entry, i) => (
            <div key={i}>
              {entry}
            </div>
          ))}

        </div>

      </div>

    </div>

  )

}

/* ---------------- COMPONENTS ---------------- */

function Metric({
  label,
  value,
  unit
}: {
  label: string
  value: number
  unit: string
}) {

  return (

    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">

      <div className="text-gray-400 text-sm">
        {label}
      </div>

      <div className="text-2xl font-semibold text-cyan-400">
        {value.toFixed(1)} {unit}
      </div>

    </div>

  )

}

function Subsystem({ name }: { name: string }) {

  const healthy = Math.random() > 0.1

  return (

    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">

      <div className="text-gray-400 text-sm mb-2">
        {name}
      </div>

      <div className={`text-sm font-semibold ${
        healthy ? "text-green-400" : "text-red-400"
      }`}>
        {healthy ? "OPERATIONAL" : "FAULT"}
      </div>

    </div>

  )

}