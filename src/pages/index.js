import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "../styles/postitem.module.css"

const PostItem = ({ data }) => {
  return (
    <li className={styles.item}>
      <h3>{data.frontmatter.title}</h3>
      <p>{data.excerpt}</p>
      <div>{data.frontmatter.date}</div>
    </li>
  )
}

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <ul className={styles.container}>
        {data.allMarkdownRemark.nodes.map(post => (
          <PostItem key={post.id} data={post}></PostItem>
        ))}
      </ul>
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
      nodes {
        excerpt(truncate: true, pruneLength: 100)
        id
        frontmatter {
          title
          date(formatString: "YY/MM/DD HH:mm")
        }
      }
    }
  }
`
