'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'
import { useToast } from "@/hooks/use-toast"

export function EmailDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const emails = [
    { address: 'kokorewmaxim@inbox.ru', label: 'Рабочая почта' },
    { address: 'kokorew.maksim@mail.ru', label: 'Личная почта' }
  ]

  const copyToClipboard = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      toast({
        title: "Email Copied!",
        description: `${email} has been copied to your clipboard.`,
        duration: 3000,
      })
    }).catch((err) => {
      console.error('Failed to copy: ', err)
      toast({
        title: "Copy Failed",
        description: "Unable to copy email. Please try again.",
        variant: "destructive",
        duration: 3000,
      })
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="hover:bg-white/10">
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white transition-colors">
          <span className="sr-only">Email</span>
          <Mail/>
        </Button>
      </DialogTrigger>
      <AnimatePresence>
        {isOpen && (
          <DialogContent className="sm:max-w-[425px] bg-black/90 backdrop-blur-lg text-white border border-white/10 p-6 rounded-lg shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">Свяжитесь со мной</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                {emails.map((email, index) => (
                  <motion.button
                    key={index}
                    onClick={() => copyToClipboard(email.address)}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium">{email.label}</span>
                    <span className="text-sm text-gray-400">{email.address}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  )
}

