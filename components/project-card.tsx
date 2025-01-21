'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  desktopImage: string
  mobileImage: string
  link: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  desktopImage,
  mobileImage,
  link
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative grid gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={desktopImage}
          alt={`${title} desktop preview`}
          width={1200}
          height={675}
          className="object-cover"
        />
        <div className="absolute top-6 right-4 w-20 h-42 overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={mobileImage}
            alt={`${title} mobile preview`}
            width={393}
            height={852}
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/10 rounded-full font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">View project</span>
      </a>
    </motion.article>
  )
}

