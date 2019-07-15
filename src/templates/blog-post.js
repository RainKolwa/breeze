import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styles from '../styles/post.module.css'

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  console.log('tags', tags)
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ul className={styles.tags}>
        {tags.map(tag => <li key={tag}><Link to={`/tags/${tag.toLowerCase()}`}>{tag}</Link></li>)}
      </ul>
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
