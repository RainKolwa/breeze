import React from 'react'
import { Link } from 'gatsby'

const Tag = ({ label, link }) => {
  return (
    <div
      key={label}
      className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
    >
      <Link to={link}>{label}</Link>
    </div>
  )
}

export default Tag
