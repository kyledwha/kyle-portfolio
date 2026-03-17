"use client"

import { useEffect, useState } from "react"

type DataPoint = {
  voltage: number
  current: number
  power: number
}

export default function TelemetryPanel() {

  const [data, setData] = useState<DataPoint[]>([])

  // simulate live system data
  useEffect(() => {

    const interval = setInterval(() => {

      setData(prev => {
        const next = [
          ...prev,
          {
            voltage: 12 + Math.random() * 2,
            current: 4 + Math.random() * 2,
            power: 60 + Math.random() * 40
          }
        ]

        if (next.length > 30) next.shift()
        return next
      })

    }, 800)

    return () => clearInterval(interval)

  }, [])

  const latest = data[data.length - 1]

  return (

    <div className="mt-16">

      <h2 className="text-xl mb-6 text-cyan-400">
        System Telemetry
      </h2>

      {/* METRICS */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <Metric label="Voltage" value={latest?.voltage} unit="V" />
        <Metric label="Current" value={latest?.current} unit="A" />
        <Metric label="Power" value={latest?.power} unit="W" />

      </div>

      {/* GRAPH */}
      <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">

        <div className="text-sm text-gray-400 mb-2">
          Live Output
        </div>

        <div className="flex items-end gap-1 h-40">

          {data.map((d, i) => (
            <div
              key={i}
              className="bg-cyan-400/80 w-2"
              style={{
                height: `${d.power}px`
              }}
            />
          ))}

        </div>

      </div>

    </div>

  )

}

function Metric({
  label,
  value,
  unit
}: {
  label: string
  value?: number
  unit: string
}) {

  return (

    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg">

      <div className="text-gray-400 text-sm">
        {label}
      </div>

      <div className="text-2xl font-semibold text-cyan-400">
        {value ? value.toFixed(2) : "--"} {unit}
      </div>

    </div>

  )

}