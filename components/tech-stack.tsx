'use client'

import { motion } from 'framer-motion'

interface TechStackProps {
  technologies: string[]
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="flex flex-wrap gap-2"
    >
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 text-sm bg-white/10 rounded-full font-mono font-semibold"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  )
}

