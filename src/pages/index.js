import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>{data.site.siteMetadata.title}</h1>
    <div>Hello world? </div>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
