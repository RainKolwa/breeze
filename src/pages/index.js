import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/postList'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Helmet>
        <title>YU's blog</title>
        <meta name='description' content='雨的博客' />
      </Helmet>
      <PostList data={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      pageInfo {
        hasNextPage
        currentPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
      }
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
            date(formatString: "YYYY/MM/DD HH:mm")
            id
          }
          id
        }
      }
    }
  }
`
