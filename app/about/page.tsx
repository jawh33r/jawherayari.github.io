'use client'

import { motion } from 'framer-motion'
import { Code, Zap, Database, Cloud, GitBranch } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-2xl opacity-50 animate-pulse"></div>
              <img
                src="/profile.jpg"
                alt="Jawher Ayari"
                className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl object-cover border-3 sm:border-4 border-white dark:border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">About Me</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
            Software Engineer passionate about building innovative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none mb-8 sm:mb-12"
        >
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 px-2">
            I'm Jawher Ayari, a dedicated software engineer and web developer with a passion for 
            creating efficient, scalable solutions. My journey in software development has been 
            driven by curiosity and a commitment to continuous learning.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 px-2">
            With experience in software engineering and web development, I've worked on various 
            projects that showcase my technical skills and problem-solving abilities. You can 
            explore my work on{' '}
            <a
              href="https://github.com/jawh33r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
            , where I share code and contribute to open-source projects.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 px-2">
            One of my key areas of expertise is automation workflows using{' '}
            <a
              href="https://n8n.jawherayari.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              n8n
            </a>
            . I specialize in designing and implementing automation solutions that streamline 
            business processes, integrate various services, and improve overall efficiency. 
            My n8n dashboard demonstrates practical applications of workflow automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 px-2">Skills & Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Code className="text-blue-600 dark:text-blue-400 mb-3" size={32} />
              <h3 className="text-lg font-semibold mb-2">Software Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Building robust applications with modern frameworks and best practices
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Zap className="text-blue-600 dark:text-blue-400 mb-3" size={32} />
              <h3 className="text-base sm:text-lg font-semibold mb-2">Workflow Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Expert in n8n for creating efficient automation workflows
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <GitBranch className="text-blue-600 dark:text-blue-400 mb-3" size={32} />
              <h3 className="text-base sm:text-lg font-semibold mb-2">Version Control</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Proficient in Git and collaborative development workflows
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <Cloud className="text-blue-600 dark:text-blue-400 mb-3" size={32} />
              <h3 className="text-base sm:text-lg font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                Creating responsive, modern web applications
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 sm:p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-3 flex items-center">
            <Zap className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
            n8n Automation Expertise
          </h3>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
            I have extensive experience with n8n, a powerful workflow automation tool. My 
            automation dashboard at{' '}
            <a
              href="https://n8n.jawherayari.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              n8n.jawherayari.me
            </a>{' '}
            showcases various automation workflows I've built to streamline processes, integrate 
            services, and improve productivity.
          </p>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether it's API integrations, data processing, or complex multi-step workflows, 
            I leverage n8n to create efficient automation solutions that save time and reduce 
            manual work.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

