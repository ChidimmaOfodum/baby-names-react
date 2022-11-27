import React from 'react'
import babyNames from './data/babyNamesData'

function BabyNames() {
  return (
    <div>
    { babyNames.map((name) => {
        return <p>{name.name}</p>
    })}
    </div>
  )
}

export default BabyNames
