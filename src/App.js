import Adduser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

// const arr = [
//   { name: "Khaled", age: 22, id: Math.random() },
//   { name: "Khaled", age: 22, id: Math.random() },
//   { name: "Khaled", age: 22, id: Math.random() },
// ];
function App() {
  const [userArray, setUserArray] = useState([]);

  const saveUser = (username, age) => {
    const newUser = { name: username, age: age, id: Math.random() };
    setUserArray((prevous) => {
      const users = [newUser, ...prevous];
      return users;
    });
  };

  const deleteUserHandler = (userId) => {
    const filteredUsers = userArray.filter((el) => el.id !== userId);
    setUserArray(filteredUsers);
  };
  return (
    <div>
      <Adduser OnSaveUser={saveUser} />
      {userArray.length !== 0 && (
        <UserList users={userArray} onDelete={deleteUserHandler} />
      )}
    </div>
  );
}

export default App;
