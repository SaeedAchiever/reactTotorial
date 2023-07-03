import React from 'react'

function Styling() {
    let styles = {fontSize:"30px", color:"red", fontFamily:"New cursive"}
  return (
    <div>
        <h2 style={styles}>Hi, from Styling</h2>
        <button style={{textTransform:"uppercase",
                        border:"none",
                        outline:"none",
                        background:"pink",
                        fontWeight:"500",
                        fontSize:"20px",
                        padding:"5px 15px"
                        }}>Styling</button>
    </div>
  )
}

export default Styling