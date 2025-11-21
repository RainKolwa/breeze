import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <section className="py-4">
      <h1>你还可以在这里找到我</h1>
      <ul>
        <li className="my-4">
          <a
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rainkolwa"
          >
            Github
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Rainkolwa"
          >
            Twitter
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)
