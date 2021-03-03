import react, { useState, useEffect } from "react";
import "./main.scss";
import { getList } from "../Api/users";
import Contact from "../Contact/Contact";

interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
}

const Main = () => {
  const [users, setUsers] = useState<Array<Users>>([]);
  const [filteredUsers, setFilteredUsers] = useState<Array<Users>>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getList().then((list) => {
      let sort = list;
      sort.sort((a: Users, b: Users) => {
        return (a.first_name as any) > (b.first_name as any) ? 1 : -1;
      });

      setUsers(sort);
    });
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.first_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const searchHandler = (event: any) => {
    let found = users.find((element) => {
      return element.first_name.includes(event) ||
        element.last_name.includes(event)
        ? console.log(element)
        : null;
    });
  };

  return (
    <main className="main">
      <input
        type="text"
        className="main__search"
        placeholder="Search"
        onChange={(event) => setSearch(event.target.value)}
      />
      {users.length !== 0 ? (
        filteredUsers.map(({ id, first_name, last_name, email, avatar }) => {
          return (
            <Contact
              key={id}
              id={id}
              first_name={first_name}
              last_name={last_name}
              email={email}
              avatar={avatar}
            />
          );
        })
      ) : (
        <p className="main__loading">Loading...</p>
      )}
    </main>
  );
};

export default Main;
