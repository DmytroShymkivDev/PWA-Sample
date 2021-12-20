import React, { useState, useEffect } from "react";
import "./App.css";
import { IPost } from "./interfaces/Post";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts && (
        <div className="posts-container">
          {posts.map((post) => (
            <Post post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
