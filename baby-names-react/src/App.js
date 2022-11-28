import "./App.css";
import BabyNames from "./BabyNames";
import babyData from "./data/babyNamesData";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState(babyData);

  function handleInput(event) {
    let input = event.target.value.toLowerCase();
    let filteredData = babyData.filter((name) =>
      name.name.toLowerCase().includes(input)
    );
    setInput(filteredData);
  }
  return (
    <div className="App">
      <input type="search" onChange={handleInput} />
      <BabyNames babyNamesData={input} />
    </div>
  );
}

export default App;
