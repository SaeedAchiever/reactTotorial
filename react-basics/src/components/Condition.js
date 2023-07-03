import React from 'react'

function Condition() {

    // There are several ways of rendering
    // Conditions in react, in this example
    // we'll look at if/else, Element variables,
    // Ternary Operator and Short circuit Operator.

    let age = document.getElementById("age");

    function handleCondition(){
        if(age < 18){
            alert(`User is ${age} years old and is not old enough to visit this site`)
        }
        else{
            alert(`User is ${age} years old and is old enough to visit this site`)

        }
    }

return(
    <div>
        <h2>Hi from Condition</h2>
        <input type="number" id='age' placeholder="Please Enter You Age"/>
        <button onClick={handleCondition}>Enter  This Site</button>

{/*age  > 17 ? <h3>User Matured Enough</h3>: <h3>Not Matured</h3>*/}

    </div>


)
}

export default Condition