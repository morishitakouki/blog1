import React, { Fragment, useEffect, useState } from "react";

import fetchPosts from '../apis/blogsAPI.js'

const Index = () => {

  const [posts, setPosts] = useState([]);
  console.log(posts)

  useEffect(()=> {
    fetchPosts()
    .then((data)=>
      setPosts(data)
    )
  }, [])
  return (
    <Fragment>
      {posts.map((post) => (
        <div key={post.id}>{post.title} {post.content}</div>
      ))}
    </Fragment>
  )
}


export default Index;