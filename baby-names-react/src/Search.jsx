import React, {useState} from 'react'

function Search() {
    const [input, setInput] = useState("");
    function handleInput() {
        setInput((event)=> event.target.value)
    }
  return (
    <div>
      <input type="search" onChange = {handleInput}/>
    </div>
  )
}

export default Search
