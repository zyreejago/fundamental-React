import postData from "../post.json";
import Search from "../components/search";
import Article from "../components/article";
import { useState, useEffect } from "react";

function HomePage() {
  const [filteredPosts, setFilteredPosts] = useState(postData); // State untuk data yang difilter
  const [totalPost, setTotalpost] = useState(0);

  const filtering = (value) => {
    const filteringValue = postData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPosts(filteringValue);
    setTotalpost(filteringValue.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search filtering={filtering} totalPost={totalPost} />
      <div>
        {filteredPosts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
