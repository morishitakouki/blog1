import React, { Fragment, useEffect, useState } from "react";

import fetchPosts from '../apis/blogsAPI.js'

const Index = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetchPosts()
    .then((data)=>
      setPosts(data)
    )
  }, [])
  return (
    <Fragment>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </Fragment>
  )
}


export default Index;