import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag'
import slugify from 'slug'

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      html: string
      id: string
      frontmatter: {
        date: string
        title: string
        tags: string[]
      }
      timeToRead: number
    }
  }
  pageContext: {
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }
}

export default ({ data, pageContext }: BlogPostTemplateProps) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  const { title, date } = post.frontmatter
  const { previous, next } = pageContext
  const readingTime = post.timeToRead
  return (
    <Layout>
      <article className="relative isolate mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
        <div className="px-5 py-8 sm:px-10 sm:py-10">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
              <span>{date}</span>
              {typeof readingTime === 'number' && readingTime > 0 && (
                <span className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-[11px] normal-case dark:border-gray-700">
                  {readingTime} min read
                </span>
              )}
            </div>
            <h1 className="text-[1.85rem] font-semibold leading-tight text-gray-900 dark:text-gray-100 sm:text-[2.25rem]">
              {title}
            </h1>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <Tag
                    className="text-xs"
                    key={tag}
                    label={tag}
                    link={`/tags/${slugify(tag, { lower: true })}`}
                  />
                ))}
              </div>
            )}
          </header>
          <div
            className="mt-8 prose prose-slate max-w-none text-base leading-relaxed dark:prose-invert sm:text-[1.02rem] prose-h1:text-2xl prose-h2:text-xl sm:prose-h2:text-[1.35rem] prose-h3:text-lg prose-h4:text-base prose-headings:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
        </div>
        <footer className="border-t border-gray-200 bg-gray-50/60 px-5 py-6 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900/70 dark:text-gray-300 sm:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {previous ? (
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="group inline-flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400"
              >
                <span aria-hidden="true" className="text-lg">
                  ←
                </span>
                <span className="truncate">
                  {previous.frontmatter.title}
                </span>
              </Link>
            ) : (
              <span className="text-gray-400 dark:text-gray-600">起点</span>
            )}
            {next ? (
              <Link
                to={next.fields.slug}
                rel="next"
                className="group inline-flex items-center gap-2 font-medium hover:text-blue-600 dark:hover:text-blue-400 sm:justify-end"
              >
                <span className="truncate text-right">
                  {next.frontmatter.title}
                </span>
                <span aria-hidden="true" className="text-lg">
                  →
                </span>
              </Link>
            ) : (
              <span className="text-gray-400 dark:text-gray-600 text-right">
                已是最新
              </span>
            )}
          </div>
        </footer>
      </article>
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
      timeToRead
    }
  }
`
