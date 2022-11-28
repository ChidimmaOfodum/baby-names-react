import React from 'react'
import babyNames from './data/babyNamesData'

function BabyNames(prop) {
  return (
    <div className='container'>
    { prop.namesDisplay.map((name) => {
        return (
          <div className='babyCtn'>
            <p className={name.sex === "f" ? "girl" : "boy"}>{name.name}</p>
          </div>
        );
    })}
    </div>
  )
}

export default BabyNames
