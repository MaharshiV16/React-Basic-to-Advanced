import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // We dont setUsers here without any dependency array as it will cause re-render and therefore useEffect will run which will again call this function and it will be a infinite loop to avoid this and use setUsers here we add an empty dependency array to useEffect
  }
  useEffect(() => {
    // We cant make the callback function inside useEffect as asaync await but we can make a function inside to be async await
    getUsers();
  }, []);
  return (
    <>
      <h2>fetch data</h2>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
