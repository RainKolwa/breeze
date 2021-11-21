import React from 'react'

export default ({ data, onClick }) => {
  return (
    <div class="max-w-2xl mx-auto mb-10">
      <span class="text-sm font-light text-gray-600 dark:text-gray-400">
        {data.frontmatter.date}
      </span>
      <a
        onClick={onClick}
        class="block mt-2 text-xl font-bold text-gray-800 capitalize dark:text-gray-200 sm:text-2xl md:text-3xl hover:underline hover:text-blue-500"
      >
        {data.frontmatter.title}
      </a>
      <p class="mt-2 text-gray-600 dark:text-gray-400">{data.excerpt}</p>
    </div>
  )
}
