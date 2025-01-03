const ConditionalRendering = () => {
  return <span>-- Ini Baru!!</span>;
};
function Article(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <div>
        Umur: {props.age}, Pacar: {props.pacar.join(", ")},{" "}
        {props.isNew && <ConditionalRendering />}
      </div>
    </>
  );
}
export default Article;
