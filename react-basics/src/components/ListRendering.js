import React from 'react'

function ListRendering() {

    // Array 

    let proglangs = ["Javascript", "Python", "Kotlin", "Java", "Rust"];
    const [Javascript, Python, Kotlin, Java, Rust] = proglangs;

  return (
    <div>
      <h1>Hey, from List Rendering</h1>
            <h4>{Javascript}</h4>
            <h4>{Python}</h4>
            <h4>{Kotlin}</h4>
            <h4>{Java}</h4>
            <h4>{Rust}</h4>

            
          
          {
            
            // Map Method

            proglangs.map((names) =>(
              <h5 key={names}>{names}</h5>
            ))
          }

    </div>
  )
}

export default ListRendering