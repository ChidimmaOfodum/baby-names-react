import "./App.css";
import BabyNames from "./BabyNames";
import babyData from "./data/babyNamesData";
import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [gender, setGender] = useState(babyData)
 

   function handleGender(event) {
    if(event.currentTarget.className === "boy") setGender(babyData.filter((name) => name.sex === "m"));
    else if(event.currentTarget.className === "girl") setGender(babyData.filter((name) => name.sex === "f"));
    else (setGender(babyData))
   }

 

  return (
    <div className="App">
      <input type="search" />
      <Button onClick = {handleGender}/>
      <Button color="girl" onClick = {handleGender}/>
      <Button color="boy" onClick = {handleGender} />
      <BabyNames namesDisplay={gender} />
    </div>
  );
}

export default App;
