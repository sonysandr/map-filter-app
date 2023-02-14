import React from "react";
import { useState, useEffect } from "react";

export const UserList = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredList = users.filter((item) => {
    return (
      item.name.toLowerCase().includes(search) || item.email.includes(search)
      
    );
  });

  const mappedUserList = filteredList.map((user) => {
    return (
      <li key={user.id}>
        <h3> Name : {user.name}</h3>
        <p>Email : {user.email}</p>
        <p>City : {user.address.city}</p>
        <p>Street : {user.address.street}</p>
      </li>
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onChangeHandler}
      />
      <ul>{mappedUserList}</ul>
    </div>
  );
};

// To fetch data we need two hooks useEffect and useState
// useState([ ]) initial value set to empty array
// Here the side Effect of useEffect is the API request
