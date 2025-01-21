import Link from 'next/link'
import { Github } from 'lucide-react'
import { EmailDialog } from '@/components/email-dialog'

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Maxim Kokorev. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Созданно с помощью TypeScript и Next.js
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/FlyBuddyErich" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5 mt-2.5" />
            </Link>
            <Link href="https://t.me/hopelesshex" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Telegram</span>
              <svg className="h-5 w-5 mt-2.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </Link>
            <EmailDialog />
          </div>
        </div>
      </div>
    </footer>
  )
}

