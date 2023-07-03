import React from 'react'

function Destructuring() {
    let fruits =[
      {
         name: "Mango",
        color: "Yellow",
        type: "Succulent",
        shape:"Oval"
      },
      {
        name: "Coconut",
        color: "Green",
        type: "Not Succulent",
        shape:"Round"
      },
      {
        name: "Apple",
        color: "Lightgreen",
        type: "Succulent",
        shape:"Round"
      }
    ]
    
    
  return (
    <div style={{border:"2px solid #000"}}>
        <h1>Hey, from Destructuring</h1>
        {fruits.map(({ name, color, type, shape}) => (
            <div key={name}>
                <h3>{name}</h3>
                <p>Color: {color}</p>
                <p>Type: {type}</p>
                <p>Shape: {shape}</p>
            </div>
        ))}
    </div>
  )
}

export default Destructuring