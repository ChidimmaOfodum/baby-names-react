import "./App.css";
import BabyNames from "./BabyNames";
import babyData from "./data/babyNamesData";
import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [gender, setGender] = useState(babyData);
  let [data, setData] = useState()

  function handleGender(event) {
    if (event.currentTarget.className === "boy") {
      setGender(babyData.filter((name) => name.sex === "m"));
     setData("Male");
    } else if (event.currentTarget.className === "girl") {
      setGender(babyData.filter((name) => name.sex === "f"));
      setData("Female");
    } else {
      setGender(babyData)
      setData("All")
    }
  }

  function handleInput(event) {
    if (data === "Male") {
      let Male = babyData.filter((name) => name.sex === "m");
      let test = Male.filter((name) => name.name.includes(event.target.value))
      setGender(test)
    }

     else if (data === "Female") {
       let Female = babyData.filter((name) => name.sex === "f");
       let test = Female.filter((name) => name.name.includes(event.target.value));
       setGender(test);
     }

      else {
        let test = babyData.filter((name) =>
          name.name.includes(event.target.value)
        );
        setGender(test);
      }
    
  }

  return (
    <div className="App">
      <input type="search"  onChange={handleInput}/>
      <Button onClick={handleGender} />
      <Button color="girl" onClick={handleGender} />
      <Button color="boy" onClick={handleGender} />
      <BabyNames namesDisplay={gender} />
    </div>
  );
}

export default App;
