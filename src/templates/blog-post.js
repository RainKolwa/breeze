import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  const { title, date } = post.frontmatter
  const { previous, next } = pageContext
  return (
    <Layout>
      <div className="py-8">
        <div className="mx-auto">
          <p className="text-sm font-light text-gray-600 dark:text-gray-400">
            {date}
          </p>
          <h2 className="mt-2 text-xl font-bold text-gray-800 dark:text-gray-200 sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <div className="mt-3">
            {tags.map(tag => (
              <Tag
                className="mr-2"
                key={tag}
                label={tag}
                link={`/tags/${tag.toLowerCase()}`}
              />
            ))}
          </div>
          <article
            className="mt-8 prose dark:prose-dark prose-teal lg:prose-lg 2xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></article>
          <ul class="mt-4 flex flex-wrap justify-between list-none p-0">
            <li>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  className="hover:underline hover:text-blue-500"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  className="hover:underline hover:text-blue-500"
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
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
