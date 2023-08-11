import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { getUsers, createUser } from "./userService";

function App() {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const usersData = await getUsers();
      setUsers(usersData);
    }
    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    if (newUserName) {
      const newUser = await createUser({ name: newUserName });
      setUsers([...users, newUser]);
      setNewUserName("");
    }
  };

  return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
              <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <div>
          <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Enter new user name"
          />
          <button onClick={handleCreateUser}>Create User</button>
        </div>
      </div>
  );
}

export default App;
