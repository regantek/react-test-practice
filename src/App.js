import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className="App">
      <h1>React testing library</h1>
      <Input showDiv={showDiv} />
      <hr />
      <Button />
    </div>
  );
}

export default App;
