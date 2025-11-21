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
    <div className="mx-auto mb-10">
      <p className="text-sm font-light text-gray-600 dark:text-gray-400">
        {data.frontmatter.date}
      </p>
      <button
        onClick={onClick}
        className="block text-left mt-2 text-xl font-bold text-gray-800 dark:text-gray-200 sm:text-2xl md:text-3xl hover:underline hover:text-blue-500"
      >
        {data.frontmatter.title}
      </button>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{data.excerpt}</p>
    </div>
  )
}


