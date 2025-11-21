import React from 'react'
import Layout from '../components/layout'

const SocialLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group"
  >
    <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
      {icon}
    </div>
    <span className="ml-4 font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {label}
    </span>
    <svg
      className="ml-auto w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </a>
)

export default () => (
  <Layout>
    <div className="max-w-3xl mx-auto py-12">
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
           Welcome to my digital garden. I share my thoughts, learnings, and projects here.
        </p>
      </header>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-lg p-2 mr-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
          </span>
          Connect / 你还可以在这里找到我
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SocialLink 
              href="https://github.com/rainkolwa" 
              label="GitHub" 
              icon={(
                  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-1.05-.01-1.92-2.55.55-3.09-1.24-3.09-1.24-.45-1.15-1.11-1.46-1.11-1.46-.83-.57.06-.56.06-.56.92.06 1.4 .95 1.4 .95.82 1.4 2.15 1.0 2.67.76.08-.59.32-1.0.58-1.23-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.04 1.7.11 2.5.31 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.33.29.63.86.63 1.73 0 1.24-.01 2.25-.01 2.55 0 .26.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"></path>
                  </svg>
              )}
          />
          <SocialLink 
              href="https://twitter.com/Rainkolwa" 
              label="Twitter" 
              icon={(
                  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
              )}
          />
        </div>
      </section>
    </div>
  </Layout>
)