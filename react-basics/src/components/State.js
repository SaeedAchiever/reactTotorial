import React, { Component } from 'react'

class State extends Component {
    /*
        Prop is to functional components as state
        is to class component.
    */
    constructor(props) {
      super(props)
    
      this.state = {
         name: "State",
      }
    }
  render() {
    return (
      <div>
        <h3>Hello, from {this.state.name}</h3>
      </div>
    )
  }
}

export default State