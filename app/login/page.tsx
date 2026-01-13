'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, Briefcase, GraduationCap, MoreHorizontal } from 'lucide-react'

interface AccessRequest {
  id: string
  name: string
  email: string
  purpose: 'student' | 'for work' | 'other'
  timestamp: string
}

const purposeLabels = {
  student: 'Student',
  'for work': 'For Work',
  other: 'Other',
}

const purposeIcons = {
  student: GraduationCap,
  'for work': Briefcase,
  other: MoreHorizontal,
}

export default function Login() {
  const [requests, setRequests] = useState<AccessRequest[]>([])

  useEffect(() => {
    // Load requests from localStorage
    const storedRequests = localStorage.getItem('n8n_access_requests')
    if (storedRequests) {
      try {
        const parsed = JSON.parse(storedRequests)
        setRequests(parsed)
      } catch (e) {
        console.error('Error parsing requests:', e)
      }
    }
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            n8n Access Requests
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">
            Manage access requests for n8n automation platform
          </p>
        </motion.div>

        {requests.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center py-12 sm:py-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Mail className="text-gray-400" size={32} />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No access requests yet
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
              Requests will appear here once submitted
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="overflow-x-auto"
          >
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Purpose
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Requested
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                    {requests.map((request, index) => {
                      const Icon = purposeIcons[request.purpose]
                      return (
                        <motion.tr
                          key={request.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                            <div className="flex items-center">
                              <User className="mr-2 text-gray-400" size={16} />
                              {request.name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                              <Mail className="mr-2 text-gray-400" size={16} />
                              <a
                                href={`mailto:${request.email}`}
                                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              >
                                {request.email}
                              </a>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                              <Icon className="mr-1" size={14} />
                              {purposeLabels[request.purpose]}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                            {formatDate(request.timestamp)}
                          </td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Total requests: <span className="font-semibold">{requests.length}</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

