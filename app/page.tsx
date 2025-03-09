'use client'

import { motion } from 'framer-motion'
import { TypeWriter } from '@/components/type-writer'
import { TechStack } from '@/components/tech-stack'
import { ProjectCard } from '@/components/project-card'
import { Header } from '@/components/header'
import { BackgroundLines } from '@/components/background-lines'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { CodeBackground } from '@/components/code-background'
import { projectImages } from '@/lib/imageImports'
import { SkillsSection } from '@/components/skills-section'

const handleScroll = () => {
  const halfPageHeight = document.documentElement.scrollHeight / 4;
  window.scrollTo({
    top: halfPageHeight,
    behavior: 'smooth',
  });
};

const technologies = [
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  'Zustand',
  'MobX',
]

const projects = [
  {
    title: 'Lemprise',
    description: 'Full-stack веб-приложение для хранения файлов, а также возможностью делится ими с другими пользователями',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vite', 'Framer Motion', 'Shadcn/ui'],
    desktopImage: projectImages.Lemprise.computer,
    mobileImage: projectImages.Lemprise.mobile,
    link: 'https://lemprise-app.vercel.app/'
  },
  {
    title: 'Store Here',
    description: 'Full-stack веб-приложение для хранения файлов, а также возможностью делится ими с другими пользователями',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Appwrite'],
    desktopImage: projectImages.storeHere.computer,
    mobileImage: projectImages.storeHere.mobile,
    link: 'https://store-here.vercel.app/sign-in'
  },
  {
    title: 'LitQuest',
    description: 'Веб-приложение, использующее API Google Books для поиска и чтения книг',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'API'],
    desktopImage: projectImages.litquest.computer,
    mobileImage: projectImages.litquest.mobile,
    link: 'https://flybuddyerich.github.io/book-app/'
  },
  {
    title: 'ReelMagic',
    description: 'Веб-сайт визитка для киностудии с использованием анимаций из библиотеки GSAP и встроенным веб-плеером для проигрывания видео',
    technologies: ['React', 'JavaScript', 'CSS', 'GSAP'],
    desktopImage: projectImages.reelmagic.computer,
    mobileImage: projectImages.reelmagic.mobile,
    link: 'https://flybuddyerich.github.io/movieProject/'
  },
  {
    title: 'BITEBLISS',
    description: 'Веб-приложение для заказа еды, сортировки меню и добавления в корзину товаров',
    technologies: ['React', 'JavaScript', 'CSS'],
    desktopImage: projectImages.bitebliss.computer,
    mobileImage: projectImages.bitebliss.mobile,
    link: 'https://flybuddyerich.github.io/bitebliss/'
  },
]

export default function Home() {
  return (
    <>
          <BackgroundLines />
      <CodeBackground />
      <Header />
      <main className="min-h-screen px-4 py-20 md:px-6 lg:px-8">
        <section className="max-w-4xl mx-auto space-y-8 pt-16">
          <div className="space-y-4">
            <div className="space-y-1">
              <TypeWriter text="Привет." delay={0} />
              <TypeWriter text="Меня зовут Максим." delay={500} />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="max-w-2xl text-gray-400"
            >
              Я молодой фронтенд-разработчик, специализируюсь на создании современных веб-приложений с использованием передовых технологий. Меня захватывает процесс разработки и возможность создавать удобные и полезные продукты. Я открыт к предложениям на позицию frontend-разработчика, где могу внести свой вклад и развиваться вместе с компанией.
            </motion.p>
            
            <TechStack technologies={technologies} />
            
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="inline-block px-6 py-2 border border-white/20 rounded-full font-mono hover:bg-white/10 transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={handleScroll}
            >
              проекты
            </motion.a>
          </div>
        </section>


        <section className="max-w-4xl mx-auto mt-32">
          <h2 className="text-2xl font-bold mb-8">Мои проекты</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

      </main>
      <SkillsSection />
      <Footer />
      <ScrollToTop />
    </>
  )
}