import React from "react"
import Layout from "../components/layout"
import { graphql, navigate } from "gatsby"
import styles from "../styles/postitem.module.css"

const PostItem = ({ data, onClick }) => {
  return (
    <li className={styles.item} onClick={onClick}>
      <h3>{data.frontmatter.title}</h3>
      <p>{data.excerpt}</p>
      <div>{data.frontmatter.date}</div>
    </li>
  )
}

export default ({ data }) => {
  return (
    <Layout>
      <ul className={styles.container}>
        {data.allMarkdownRemark.nodes.map(post => (
          <PostItem
            key={post.id}
            data={post}
            onClick={() => navigate(post.fields.slug)}
          ></PostItem>
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
        fields {
          slug
        }
      }
    }
  }
`
