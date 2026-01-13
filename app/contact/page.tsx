'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, User, Zap } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'student' as 'student' | 'for work' | 'other',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Store request in localStorage
      const request = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        purpose: formData.purpose,
        timestamp: new Date().toISOString(),
      }

      // Get existing requests
      const existingRequests = localStorage.getItem('n8n_access_requests')
      const requests = existingRequests ? JSON.parse(existingRequests) : []
      
      // Add new request
      requests.push(request)
      
      // Save to localStorage
      localStorage.setItem('n8n_access_requests', JSON.stringify(requests))
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setStatus('success')
      setFormData({ name: '', email: '', purpose: 'student' })
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2 flex items-center justify-center gap-2">
            <Zap className="text-blue-600 dark:text-blue-400" size={32} />
            Request n8n Access
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
            Request access to the n8n automation platform
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User className="inline mr-2" size={16} />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-[44px]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Mail className="inline mr-2" size={16} />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-[44px]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Zap className="inline mr-2" size={16} />
                Purpose
              </label>
              <select
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-base min-h-[44px]"
              >
                <option value="student">Student</option>
                <option value="for work">For Work</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3.5 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium flex items-center justify-center text-base min-h-[44px] touch-manipulation"
            >
              {status === 'sending' ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Submitting...
                </>
              ) : status === 'success' ? (
                <>
                  <span className="mr-2">✓</span>
                  Request Submitted!
                </>
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Submit Request
                </>
              )}
            </button>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
              >
                Failed to submit request. Please try again or reach out via{' '}
                <a
                  href="https://www.linkedin.com/in/jawherayarii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  LinkedIn
                </a>
                .
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400"
              >
                Thank you! Your n8n access request has been submitted successfully. You will receive access via email.
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold mb-3">Other Ways to Reach Me</h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/jawher-ayari-859ba1283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                jawher-ayari-859ba1283
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/jawh33r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                @jawh33r
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

