import React from 'react'
import { Link } from 'gatsby'

const Tag = ({
  label,
  link,
  className,
  ...props
}: {
  label: string
  link: string
  className?: string
  [key: string]: any
}) => {
  return (
    <Link
      to={link}
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700
        dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900 dark:hover:text-blue-300
        transition-colors duration-200 ease-in-out
        ${className ?? ''}
      `}
      {...props}
    >
      # {label}
    </Link>
  )
}

export default Tag
