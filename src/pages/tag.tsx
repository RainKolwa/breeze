import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag'

interface TagPageProps {
  data: {
    allMarkdownRemark: {
      distinct: string[]
    }
  }
}

const TagPage = ({ data }: TagPageProps) => {
  const { distinct: tags } = data.allMarkdownRemark
  const normalizedTags = Array.from(
    new Set(tags.map(tag => tag.trim().toLowerCase()))
  ).sort()
  return (
    <Layout>
      <div className="py-12 max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Tags
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Browse all {normalizedTags.length} topics
          </p>
        </header>

        <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-3 justify-center">
            {normalizedTags.map(tag => {
              const styleTag = tag
              return (
                <Tag
                  key={tag}
                  label={styleTag}
                  link={`/tags/${styleTag}`}
                  className="text-base px-4 py-2"
                />
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      distinct(field: { frontmatter: { tags: SELECT } })
    }
  }
`

export default TagPage
