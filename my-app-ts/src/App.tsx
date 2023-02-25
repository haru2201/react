import { useEffect, useState } from 'react';
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);
  
  // 画面表示時にユーザー情報取得
  useEffect(() => {
    // axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then(res => {
      // console.log(res);
      setUsers(res.data);
      // console.log(res.data);
    })
  }, []);
  console.log("users:" + users);
  
  // console.log("users: " + users);
  return (
    <div>
      {users.map((user) => (
        // <ListItem id={user.id} name={user.name} email={user.email} personalColor={user.personalColor} />
        <ListItem 
          id={user.id}
          name={user.name}
          email={user.email}
          personalColor={user.personalColor}
          company={user.company}
        />
      ))}
    </div>
  );
};


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
