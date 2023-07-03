import React, { Component } from 'react'

class ClassComponents extends Component {
  render() {
    return (
      <div>
            {
                /*
                    Class components also uses the Javascript
                    class syntex.
                    Class Components however have slight differnce
                    from the Functional Components.
                    1. Imports Reacts Components instead
                       of just React
                    2. Extents the Components
                    3. The return method must be in a render
                    method to work as expected
                */
            }
            <h3>Hi, from Class Component</h3>
      </div>
    )
  }
}

export default ClassComponents