import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const Adduser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValidName(true);
    }
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValidAge(true);
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 && age.length === 0) {
      setIsValidName(false);
      setIsValidAge(false);
      return;
    } else if (username.trim().length === 0) {
      return setIsValidName(false);
    } else if (age.length === 0) {
      return setIsValidAge(false);
    }
    props.OnSaveUser(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <Card>
      <form
        className={`d-grid gap-3 border border-2 rounded p-3 shadow mx-auto bg-light ${styles.form}`}
        onSubmit={submitHandler}
      >
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
        <Button className="btn btn-primary shadow" type="submit">
          Add User
        </Button>
      </form>
    </Card>
  );
};
export default Adduser;
