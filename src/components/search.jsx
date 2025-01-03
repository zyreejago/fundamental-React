import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");
  const valueSearch = (event) => {
    setSearch(event.target.value);
    props.filtering(event.target.value);
  };
  return (
    <>
      <div>
        Cari nama kamu : <input onChange={valueSearch}></input>
      </div>
      <small>
        Ditemukan {props.totalPost} data dengan pencarian {search}
      </small>
    </>
  );
}
export default Search;
