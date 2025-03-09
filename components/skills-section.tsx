"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Hard Skills",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Zustand",
      "MobX",
      "Unit-тестирование",
      "Vite",
      "GitHub",
      "AI",
    ],
  },
  {
    title: "Soft Skills",
    skills: [      
        "Командная работа",
        "Ведение проектов",
        "Адаптивность",
        "Решение проблем",
        "Критическое мышление",
        "Коммуникабельность",
        "Тайм-менеджмент",
        "Обучаемость",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function SkillsSection() {
  return (
    <section className="max-w-4xl mx-auto mt-32 pb-10 sm: pl-4 pr-4">
      <h2 className="text-2xl font-bold mb-8">Мои навыки</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <motion.ul className="grid grid-cols-2 gap-2">
              {category.skills.map((skill) => (
                <motion.li key={skill} variants={itemVariants} className="bg-white/5 rounded-lg p-2 text-sm">
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

