import React from 'react'

const FunctionalComponents = () => {
  return (
    <div>
        {
            /*
                Just as the name hints, these types of components
                uses the javascript function syntex as components.
                Functional components can either be normal 
                Javascript Functions or the ES6 arrow function.
                To use the ES6 arrow function, the function must be
                initialised and declared as a variable otherwise
                react wil not recognize it.
            */
        }
        <h3>Hey, from Functional Component</h3>
    </div>
  )
}

export default FunctionalComponents