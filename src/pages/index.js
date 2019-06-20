import React from "react"
import { Helmet } from "react-helmet"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
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
      <Helmet>
        <title>Monte Cristo</title>
        <meta name="description" content="基督山伯爵" />
      </Helmet>
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
