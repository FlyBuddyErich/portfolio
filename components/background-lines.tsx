"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export function BackgroundLines() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = (clientX / window.innerWidth - 0.5) * 20
      const moveY = (clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x: moveX, y: moveY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  useEffect(() => {
    mouseX.set(mousePosition.x)
    mouseY.set(mousePosition.y)
  }, [mousePosition, mouseX, mouseY])

  const x1 = useTransform(mouseX, (value) => value * 0.5)
  const y1 = useTransform(mouseY, (value) => value * 0.5)
  const x2 = useTransform(mouseX, (value) => value * -0.5)
  const y2 = useTransform(mouseY, (value) => value * -0.5)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Original diagonal lines */}
        <motion.line
          x1={x1}
          y1={y1}
          x2={100}
          y2={0}
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1={20}
          y1={100}
          x2={useTransform(x2, (value) => value + 100)}
          y2={useTransform(y2, (value) => value + 20)}
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        />

        {/* New diagonal lines */}
        <motion.line
          x1={useTransform(x1, (value) => value + 50)}
          y1={0}
          x2={useTransform(x2, (value) => value + 50)}
          y2={100}
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
        />
        <motion.line
          x1={0}
          y1={useTransform(y1, (value) => value + 30)}
          x2={100}
          y2={useTransform(y2, (value) => value + 70)}
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.1 }}
        />

        {/* Original curved lines */}
        <motion.path
          d={`M${x1} 80 Q 40 40 80 ${y1}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.3 }}
        />
        <motion.path
          d={`M20 ${y2} Q 60 60 ${useTransform(x2, (value) => value + 100)} 20`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />

        {/* New curved lines */}
        <motion.path
          d={`M0 ${useTransform(y1, (value) => value + 20)} Q 50 ${useTransform(y2, (value) => value + 50)} 100 ${useTransform(y1, (value) => value + 80)}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.7 }}
        />
        <motion.path
          d={`M${useTransform(x1, (value) => value + 30)} 0 Q ${useTransform(x2, (value) => value + 70)} 50 ${useTransform(x1, (value) => value + 70)} 100`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.9 }}
        />
      </motion.svg>
    </div>
  )
}

