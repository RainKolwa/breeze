import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/postList'
import { Post } from '../types'

interface CategoryTemplateProps {
  pageContext: {
    tag: string
  }
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: { node: Post }[]
    }
  }
}

const CategoryTemplate = ({ pageContext, data }: CategoryTemplateProps) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="py-12">
        <header className="mb-12 text-center">
          <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wide uppercase text-sm">
            Topic
          </span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            #{tag}
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            A collection of {totalCount} {totalCount === 1 ? 'post' : 'posts'}
          </p>
        </header>

        <PostList data={posts} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { fields: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tags
          }
          excerpt
          timeToRead
          frontmatter {
            title
            date
            id
          }
          id
        }
      }
    }
  }
`

export default CategoryTemplate
