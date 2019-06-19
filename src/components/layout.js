import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Nav = props => {
  return (
    <li style={{ display: "inline-block", marginLeft: "1rem" }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}
export default ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header>
        <Link to="/">Logo</Link>
        <ul style={{ listStyle: "none", float: "right", overflow: "hidden" }}>
          <Nav to="/">Home</Nav>
          <Nav to="/about">About</Nav>
          <Nav to="/files">Files</Nav>
        </ul>
      </header>
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {data.site.siteMetadata.title}
      </div>
      {children}
    </div>
  )
}
