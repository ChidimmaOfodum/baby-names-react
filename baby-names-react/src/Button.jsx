import React from 'react'

const Button = (prop) => {
  return (
    <button className= {prop.color} onClick = {prop.onClick}>
        <i class="fa-solid fa-baby"></i>
      </button>
  );
}

export default Button
