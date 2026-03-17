"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Cpu, Zap, Wifi, Sun, Wrench } from "lucide-react"

/**
 * Map string → icon component
 * (Fixes Next.js server/client boundary issue)
 */
const iconMap: Record<string, any> = {
  cpu: Cpu,
  zap: Zap,
  wifi: Wifi,
  sun: Sun,
  wrench: Wrench,
}

type Project = {
  slug: string
  title: string
  summary: string
  image: string
  icon: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = iconMap[project.icon] || Cpu

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 hover:border-cyan-500 transition cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover"
        />

        {/* subtle glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* ICON */}
        <Icon className="mb-3 text-cyan-400" size={28} />

        {/* TITLE */}
        <h3 className="text-lg font-semibold mb-2">
          {project.title}
        </h3>

        {/* SUMMARY */}
        <p className="text-gray-400 text-sm mb-4">
          {project.summary}
        </p>

        {/* LINK */}
        <a
          href={`/projects/${project.slug}`}
          className="text-cyan-400 text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
        >
          View System →
        </a>

      </div>
    </motion.div>
  )
}