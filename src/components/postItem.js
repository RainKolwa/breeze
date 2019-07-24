import React from 'react'
import styles from '../styles/postitem.module.styl'

export default ({ data, onClick }) => {
  return (
    <li className={styles.item} onClick={onClick}>
      <h3>{data.frontmatter.title}</h3>
      <p>{data.excerpt}</p>
      <div>{data.frontmatter.date}</div>
    </li>
  )
}
