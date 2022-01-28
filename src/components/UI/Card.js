import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = (props) => {
  return (
    <div className={`p-3 border-2 rounded mt-4 ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Card;
