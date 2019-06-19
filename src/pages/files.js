import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../styles/fileitem.module.css"

const FileItem = ({ data }) => {
  return (
    <tr>
      <td>{`${data.name}.${data.extension}`}</td>
      <td>{data.prettySize}</td>
      <td>{data.birthTime}</td>
      <td>
        <Link to={data.publicURL}>View</Link>
      </td>
    </tr>
  )
}

export default ({ data }) => {
  return (
    <Layout>
      <table className={styles.container}>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>
              <b>Filename</b>
            </th>
            <th>
              <b>Size</b>
            </th>
            <th style={{ width: "30%" }}>
              <b>Created At</b>
            </th>
            <th>
              <b>Link</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.allFile &&
            data.allFile.edges.map((edge, index) => (
              <FileItem key={index} data={edge.node} />
            ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          prettySize
          extension
          birthTime(fromNow: true)
          name
          publicURL
        }
      }
    }
  }
`
