import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const Adduser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValidName(true);
      setError(false);
    }
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValidAge(true);
      setError(false);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 && age.length === 0) {
      setIsValidName(false);
      setIsValidAge(false);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    } else if (username.trim().length === 0) {
      setError({
        title: "Invalid name",
        message: "Please enter a valid name.",
      });
      return setIsValidName(false);
    } else if (age.length === 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return setIsValidAge(false);
    }
    props.OnSaveUser(username, age);
    setUsername("");
    setAge("");
  };
  const onErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErroHandler={onErrorHandler}
        />
      )}
      <Card>
        <form className={`d-grid gap-3`} onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              className={`form-control mb-3 ${styles.input} ${
                !isValidName ? styles.notValid : ""
              }`}
              id="username"
              type="text"
              value={username}
              onChange={usernameChangeHandler}
            />
            <label className="form-label" htmlFor="age">
              Age (Years)
            </label>
            <input
              className={`form-control ${styles.input} ${
                !isValidAge ? styles.notValid : ""
              }`}
              id="age"
              type="number"
              min="18"
              value={age}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default Adduser;
