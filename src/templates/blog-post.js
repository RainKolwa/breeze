import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  const { title, date } = post.frontmatter
  return (
    <Layout>
      <div className="container px-4 py-6 mx-auto">
        <div className="max-w-3xl mx-auto lg:px-4">
          <p class="text-sm font-light text-gray-600 dark:text-gray-400">
            {date}
          </p>
          <h2 class="mt-2 text-xl font-bold text-gray-800 capitalize dark:text-gray-200 sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <article
            className="mt-8 prose dark:prose-dark prose-teal lg:prose-lg 2xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></article>
          <ul>
            {tags.map(tag => (
              <li key={tag}>
                <Link to={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
              </li>
            ))}
          </ul>
        </div>
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
