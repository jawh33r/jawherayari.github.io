'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Loader2 } from 'lucide-react'

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  updated_at: string
}

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/jawh33r/repos?sort=updated&per_page=20')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()
        // Filter out forks and sort by stars/updated
        const filteredRepos = data
          .filter((repo: GitHubRepo) => !repo.name.includes('fork') && repo.description)
          .slice(0, 12)
        setRepos(filteredRepos)
      } catch (err) {
        setError('Unable to load projects. Please check back later.')
        console.error('Error fetching repos:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">Projects</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
            Explore my work on{' '}
            <a
              href="https://github.com/jawh33r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-blue-600" size={40} />
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">{error}</p>
            <a
              href="https://github.com/jawh33r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        ) : repos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No projects found. Check out my GitHub profile for more.
            </p>
            <a
              href="https://github.com/jawh33r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View on GitHub <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="block p-4 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-1 pr-2">
                    {repo.name}
                  </h3>
                  <Github className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" size={18} />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {repo.description || 'No description available'}
                </p>
                <div className="flex items-center justify-between text-xs sm:text-sm flex-wrap gap-2">
                  {repo.language && (
                    <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs">
                      {repo.language}
                    </span>
                  )}
                  <span className="text-gray-500 dark:text-gray-500 text-xs">
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/jawh33r"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 sm:py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 active:bg-gray-700 dark:active:bg-gray-300 transition-colors font-medium text-base min-h-[44px] touch-manipulation w-full sm:w-auto"
          >
            <Github className="mr-2" size={20} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  )
}

