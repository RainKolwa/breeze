import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import useTheme from '../hooks/useTheme'
import useSnowEffect from '../hooks/useSnowEffect'
import SnowEffect from './SnowEffect'

const Nav = ({ children, to }: { children: React.ReactNode; to: string }) => {
  const isExternal = to.startsWith('http')
  const className =
    'ml-6 font-medium text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors uppercase tracking-wide'

  if (isExternal) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme()
  const { snowEnabled } = useSnowEffect()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = data.site.siteMetadata.title

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {snowEnabled && <SnowEffect windX={1} windY={0} />}
      <header className="sticky top-0 z-50 w-full backdrop-filter backdrop-blur-md bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 dark:text-gray-100 tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {title}
          </Link>
          <nav className="flex items-center">
            <div className="hidden md:flex items-center">
              <Nav to="/about">About</Nav>
              <Nav to="/tag">Tags</Nav>
              <Nav to="https://tools.rainlee.fun">Toolkits</Nav>
              {/* <Nav to="/link">Links</Nav> */}
            </div>
            <button
              onClick={toggleTheme}
              className="ml-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {title}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="flex md:hidden space-x-4">
              <Nav to="/about">About</Nav>
              <Nav to="/tag">Tags</Nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
