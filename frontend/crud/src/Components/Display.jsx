import React, { useEffect } from "react";
import axios from "axios";

function Display() {
  const getPost = async () => {
    const { success, existingPosts } = await axios.get(
      "http://localhost:8000/posts"
    );

    console.log({ success, existingPosts });
  };

  useEffect(() => {
    getPost();
    console.log("test")
  }, []);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}

export default Display;
