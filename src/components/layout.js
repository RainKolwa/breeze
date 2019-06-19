import React from "react"
import { Link } from "gatsby"

const Nav = props => {
  return (
    <li style={{ display: "inline-block", marginLeft: "1rem" }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}
export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header>
      <Link to="/">Logo</Link>
      <ul style={{ listStyle: "none", float: "right", overflow: "hidden" }}>
        <Nav to="/">Home</Nav>
        <Nav to="/about">About</Nav>
      </ul>
    </header>
    {children}
  </div>
)
