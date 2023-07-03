import React from 'react'

function Props(props) {
  return (
    <div>
        {
            /*
              Short form for properties, is use to get
              values from parents components to children
              components.
              Just pass props as a paramenter in the child
              component and use it anywhere in the child
              component.
              NOTE ! ! ! => props are used only in functional
              components.
            */
        }
        <h2>Hey, from {props.name}</h2>
    </div>
  )
}

export default Props