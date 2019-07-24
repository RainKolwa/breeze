import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styles from '../styles/post.module.styl'

const TagPage = ({ data }) => {
  const { distinct: tags } = data.allMarkdownRemark
  console.log(tags)
  return (
    <Layout>
      <section style={{ padding: '0 15px' }}>
        <ul className={styles.tags}>
          {tags.map(tag => {
            const styleTag = tag.toLowerCase()
            return <li key={tag}><Link to={`/tags/${styleTag}`}>{styleTag}</Link></li>
          })}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      distinct(field: frontmatter___tags)
    }
  }
`

export default TagPage
