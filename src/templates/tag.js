import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/postList'

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  console.log(data.allMarkdownRemark.edges)
  return (
    <Layout location={location} title={`Posts in tag "${tag}"`}>
      <div className='tag-container'>
        <h1>Tag: {tag}</h1>
        <PostList data={data.allMarkdownRemark.edges} />
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
