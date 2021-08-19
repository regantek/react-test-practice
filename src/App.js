import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Users from "./components/Users";

function App() {
  const [showDiv, setShowDiv] = useState(true);
  const users = [
    { id: 1, name: "john", age: 15 },
    { id: 2, name: "kelly", age: 20 },
  ];
  return (
    <div className="App">
      <h1>React testing library</h1>
      <Input showDiv={showDiv} />
      <hr />
      <Button />

      {users.map((user) => (
        <Users key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
