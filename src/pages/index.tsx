import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import PostList from '../components/postList'
import { Post } from '../types'

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: { node: Post }[]
    }
  }
}

export default ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <Helmet>
        <title>Rainkolwa's Blog</title>
        <meta name="description" content="Rainkolwa's Blog" />
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

