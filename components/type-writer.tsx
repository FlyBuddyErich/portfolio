'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface TypeWriterProps {
  text: string
  className?: string
  delay?: number
}

export function TypeWriter({ text, className = '', delay = 0 }: TypeWriterProps) {
  const controls = useAnimation()

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0 }
      })
      
      for (let i = 0; i <= text.length; i++) {
        await controls.start({
          width: `${i}ch`,
          transition: { duration: 0.1 }
        })
      }
    }

    setTimeout(() => animate(), delay)
  }, [controls, text, delay])

  return (
    <div className={`inline-block ${className}`}>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={controls}
        className="overflow-hidden whitespace-nowrap font-mono"
      >
        {text}
      </motion.div>
    </div>
  )
}

