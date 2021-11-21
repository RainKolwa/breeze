import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag'

export default ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  const { title, date } = post.frontmatter
  return (
    <Layout>
      <div className="py-16">
        <div className="mx-auto">
          <p class="text-sm font-light text-gray-600 dark:text-gray-400">
            {date}
          </p>
          <h2 class="mt-2 text-xl font-bold text-gray-800 capitalize dark:text-gray-200 sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <div className="mt-3">
            {tags.map(tag => (
              <Tag label={tag} link={`/tags/${tag.toLowerCase()}`} />
            ))}
          </div>
          <article
            className="mt-8 prose dark:prose-dark prose-teal lg:prose-lg 2xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></article>
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
