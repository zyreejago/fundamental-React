import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}
export default Blog;
