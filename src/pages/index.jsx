import postData from "../post.json";
import Search from "../components/search";
import Article from "../components/article";
import { useState, useEffect } from "react";

function HomePage() {
  const [filteredPosts, setFilteredPosts] = useState(postData); // State untuk data yang difilter
  const [totalPost, setTotalpost] = useState(0);
  const [externalApi, setExternalApi] = useState([]);
  const filtering = (value) => {
    const filteringValue = postData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPosts(filteringValue);
    setTotalpost(filteringValue.length);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json().then((json) => setExternalApi(json))
    );
  }, []);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search filtering={filtering} totalPost={totalPost} />
      <div>
        {filteredPosts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </div>
      <hr />
      <h2>External API</h2>
      {externalApi.map((item, index) => (
        <div key={index}>- {item.title}</div>
      ))}
    </>
  );
}

export default HomePage;
