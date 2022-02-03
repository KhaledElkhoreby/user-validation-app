import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={`${styles.overlay}`} onClick={props.onErroHandler} />
      <Card className={`${styles.error}`}>
        <header>
          <h1 className="text-danger">{props.title}</h1>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onErroHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
