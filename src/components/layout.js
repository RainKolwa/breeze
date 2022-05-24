import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Nav = ({ children, to }) => {
  return (
    <Link key={to} className="ml-4 uppercase hover:text-gray-900" to={to}>
      {children}
    </Link>
  )
}
export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="mx-auto container max-w-3xl">
      <header className="px-4 py-5 border-b dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-wrap flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="text-xl">{data.site.siteMetadata.title}</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Nav to="https://tools.rainlee.fun">Toolkits</Nav>
            <Nav to="/about">About</Nav>
            <Nav to="/tag">Tags</Nav>
            <Nav to="/link">Links</Nav>
          </nav>
        </div>
      </header>
      <div className="px-4">{children}</div>
    </div>
  )
}
