import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");
  const valueSearch = () => {
    props.filtering(search);
  };
  const setKeyDown = (e) => {
    if (e.key === "Enter") {
      valueSearch();
    }
  };
  return (
    <>
      <div>
        Cari nama kamu :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={setKeyDown}
        ></input>
        <button onClick={valueSearch}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPost} data dengan pencarian {search}
      </small>
    </>
  );
}
export default Search;
