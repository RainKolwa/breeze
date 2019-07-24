import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styles from '../styles/post.module.styl'

export default ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  return (
    <Layout>
      <div style={{ padding: `0 15px` }}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <ul className={styles.tags}>
          {tags.map(tag => <li key={tag}><Link to={`/tags/${tag.toLowerCase()}`}>{tag}</Link></li>)}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        date(formatString: "YYYY/MM/DD HH:mm")
        title
        tags
      }
    }
  }
`
