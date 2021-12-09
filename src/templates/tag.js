import React from 'react'
import { graphql } from 'gatsby'
import Tag from '../components/tag'
import Layout from '../components/layout'
import PostList from '../components/postList'

const CategoryTemplate = ({ location, pageContext, data }) => {
  const { tag } = pageContext
  console.log(data.allMarkdownRemark.edges)
  return (
    <Layout location={location} title={`Posts in tag "${tag}"`}>
      <div className='tag-container'>
        <div className='flex flex-wrap pt-6'>标签：<Tag label={tag} /></div>
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
