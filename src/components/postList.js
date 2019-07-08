import React from 'react'
import PostItem from './postItem'
import { navigate } from 'gatsby'
import styles from '../styles/postitem.module.css'

const PostList = ({ data }) => {
  return (
    <ul className={styles.container}>
      {data.map(({ node: post }) => (
        <PostItem
          key={post.id}
          data={post}
          onClick={() => navigate(post.fields.slug)}
        />
      ))}
    </ul>
  )
}

export default PostList
