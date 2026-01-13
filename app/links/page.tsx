'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Zap, ExternalLink } from 'lucide-react'

const links = [
  {
    name: 'GitHub',
    url: 'https://github.com/jawh33r',
    icon: Github,
    description: 'View my code repositories and contributions',
    color: 'from-gray-900 to-gray-700',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jawherayarii/',
    icon: Linkedin,
    description: 'Connect with me on LinkedIn',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'n8n Automation Dashboard',
    url: 'https://n8n.jawherayari.me',
    icon: Zap,
    description: 'Explore my automation workflows',
    color: 'from-purple-600 to-purple-800',
  },
]

export default function Links() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">Links</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
            Connect with me and explore my work
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="block group touch-manipulation"
              >
                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all active:scale-[0.98]">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-2.5 sm:p-3 rounded-lg bg-gradient-to-br ${link.color} text-white flex-shrink-0`}>
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </h3>
                        <ExternalLink className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" size={18} />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                        {link.description}
                      </p>
                      <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 break-all">
                        {link.url}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
            <Zap className="mr-2 text-blue-600 dark:text-blue-400" size={18} />
            n8n Automation
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Check out my{' '}
            <a
              href="https://n8n.jawherayari.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              n8n automation dashboard
            </a>{' '}
            to see live examples of workflow automation solutions I&apos;ve built. These workflows 
            demonstrate integrations, data processing, and automated task management.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

