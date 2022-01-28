import NewUser from "./NewUser";
import Card from "../UI/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
  const users = props.users.map((user) => (
    <NewUser
      key={user.id}
      name={user.name}
      age={user.age}
      onDelete={props.onDelete}
      id={user.id}
    />
  ));
  return (
    <Card>
      <ul
        className={`bg-light mx-auto border border-2 rounded d-grid gap-3 p-3 shadow ${styles.UserList}`}
      >
        {users}
      </ul>
    </Card>
  );
};
export default UserList;
