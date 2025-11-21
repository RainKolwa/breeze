import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag'

interface TagPageProps {
  data: {
    allMarkdownRemark: {
      distinct: string[]
    }
  }
}

const TagPage = ({ data }: TagPageProps) => {
  const { distinct: tags } = data.allMarkdownRemark
  return (
    <Layout>
      <section>
        <div className="flex flex-wrap py-4">
          {tags.map(tag => {
            const styleTag = tag.toLowerCase()
            return (
              <div className="mr-4 my-1">
                <Tag key={tag} label={styleTag} link={`/tags/${styleTag}`} />
              </div>
            )
          })}
        </div>
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
