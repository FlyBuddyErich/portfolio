'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.1 },
}

const codeSnippet = `
interface Developer {
  name: string;
  skills: string[];
}

const maxim: Developer = {
  name: "Maxim",
  skills: ["TypeScript", "React", "Next.js"],
};

function createPortfolio(dev: Developer): void {
  console.log(\`Creating portfolio for \${dev.name}\`);
  dev.skills.forEach(skill => {
    console.log(\`Showcasing \${skill}\`);
  });
}

createPortfolio(maxim);
`.trim()

export function CodeBackground() {
  const [text, setText] = useState('')
  const controls = useAnimation()

  useEffect(() => {
    const startTyping = async () => {
      await new Promise(resolve => setTimeout(resolve, 800))

      for (let i = 0; i < codeSnippet.length; i++) {
        setText(codeSnippet.slice(0, i + 1))
        await new Promise(resolve => setTimeout(resolve, Math.random() * 50 + 20))
      }

      controls.start("visible")
    }

    startTyping()
  }, [controls])

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none z-[-20]"
      initial="hidden"
      animate={controls}
      variants={typewriterVariants}
      transition={{ duration: 0.8 }}
    >
      <pre
        className="text-[0.7rem] md:text-sm lg:text-base text-gray-300 whitespace-pre font-mono leading-tight p-4"
        style={{
          textShadow: '0 0 10px rgba(255,255,255,0.15)',
          fontFamily: 'JetBrains Mono, monospace',
        }}
      >
        {text}
      </pre>
    </motion.div>
  )
}

