import React from 'react'
import Layout from '../components/layout'

const links = []

export default () => (
  <Layout>
    <div className="container mx-auto pt-4">
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center">
        {links.map(link => (
          <li key={link.href} className="flex">
            <a
              className="relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm hover:shadow-md w-full flex flex-col justify-center items-center pt-6 pb-6 px-6"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)
