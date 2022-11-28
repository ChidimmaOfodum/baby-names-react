import "./App.css";
import BabyNames from "./BabyNames";
import babyData from "./data/babyNamesData";
import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [input, setInput] = useState(babyData);
  const [clickFemale, setClickFemale] = useState()

  function handleInput(event) {
    let input = event.target.value.toLowerCase();
    let filteredData = babyData.filter((name) =>
      name.name.toLowerCase().includes(input)
    );
    setInput(filteredData);
  }

  function handleClickFemale(){
    let test = babyData.filter((name) => name.sex === "f")
    setClickFemale(test)
    setInput(test)
  }
  return (
    <div className="App">
      <input type="search" onChange={handleInput} />
      <Button />
      <Button color="girl" onClick = {handleClickFemale}/>
      <Button color="boy" />
      <BabyNames babyNamesData={input} />
    </div>
  );
}

export default App;
