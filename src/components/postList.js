import React from 'react'
import PostItem from './postItem'
import { navigate } from 'gatsby'

const PostList = ({ data }) => {
  return (
    <div className="py-8 mx-auto">
      {data.map(({ node: post }) => (
        <PostItem
          key={post.id}
          data={post}
          onClick={() => navigate(post.fields.slug)}
        />
      ))}
      <div className="my-8"></div>
    </div>
  )
}

export default PostList
