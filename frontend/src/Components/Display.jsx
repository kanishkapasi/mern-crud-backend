import React, { useEffect, useState } from "react";
import axios from "axios";

function Display() {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    const { data } = await axios.get("http://localhost:8000/posts");

    console.log(data.success);
    if (data.success) {
      console.log(data.posts);
      setPosts(data.posts);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>{post.topic}</h1>
            <h2>{post.description}</h2>
            <h3>{post.postCatogery}</h3>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Display;
