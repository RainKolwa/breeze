import React from 'react'
import { Link } from 'gatsby'

const Tag = ({
  label,
  link,
  ...props
}: {
  label: string
  link: string
  [key: string]: any
}) => {
  return (
    <div
      {...props}
      key={label}
      className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border ${props.className ??
        ''}`}
    >
      <Link to={link}>{label}</Link>
    </div>
  )
}

export default Tag
