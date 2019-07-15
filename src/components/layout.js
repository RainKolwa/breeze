import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Nav = props => {
  return (
    <li style={{ display: 'inline-block', marginLeft: '1rem' }}>
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
        <Link to='/'>{data.site.siteMetadata.title}</Link>
        <ul style={{ listStyle: 'none', float: 'right', overflow: 'hidden' }}>
          <Nav to='/'>主页</Nav>
          <Nav to='/about'>关于我</Nav>
          <Nav to='/tags'>标签</Nav>
        </ul>
      </header>
      <br />
      {children}
    </div>
  )
}
