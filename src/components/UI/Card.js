import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={`mt-4 border border-2 rounded p-3 shadow mx-auto bg-light ${styles.card} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Card;
