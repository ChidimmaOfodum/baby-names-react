import React from 'react'
import babyNames from './data/babyNamesData'

function BabyNames() {
  return (
    <div className='container'>
    { babyNames.map((name) => {
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
