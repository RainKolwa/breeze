import React from 'react'
import PostItem from './postItem'
import { navigate } from 'gatsby'

const PostList = ({ data }) => {
  return (
    <div class="container px-6 py-16 mx-auto">
      {data.map(({ node: post }) => (
        <PostItem
          key={post.id}
          data={post}
          onClick={() => navigate(post.fields.slug)}
        />
      ))}
      <div class="my-8"></div>
    </div>
  )
}

export default PostList
