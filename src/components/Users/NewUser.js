import styles from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <li
      className={`gap-5 border border-2 rounded p-3 mx-auto bg-light ${styles.NewUser}`}
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </li>
  );
};
export default NewUser;
