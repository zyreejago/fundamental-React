import { useContext } from "react";
import { GlobalContext } from "../context";

const ConditionalRendering = () => {
  return <span>-- Ini Baru!!</span>;
};
function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.name}</h3>
      <div>
        Umur: {props.age}, Pacar: {props.pacar.join(", ")},{" "}
        {props.isNew && <ConditionalRendering />}
      </div>
      <div>
        <small>Dibuat oleh {user.nama}</small>
      </div>
    </>
  );
}
export default Article;
