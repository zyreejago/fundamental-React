import { useState, useEffect } from "react";

function Blog() {
  const [filteringPost, setFilteredPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setFilteredPosts(json));
  }, []);

  return (
    <>
      <h2>My Blog</h2>
      {filteringPost.map((item, index) => (
        <div key={index}>
          <small>- {item.title}</small>
        </div>
      ))}
    </>
  );
}
export default Blog;
