import React from 'react'
import { Post } from '../types'

export default ({
  data,
  onClick,
}: {
  data: Post
  onClick: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group block w-full bg-white dark:bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <time className="text-sm font-medium text-gray-400 dark:text-gray-500">
            {data.frontmatter.date}
          </time>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
          {data.frontmatter.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow text-lg">
          {data.excerpt}
        </p>

        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
          <span>Read Article</span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}


