import React, { Component } from 'react'

class SetState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hi from SetState"
      }
    }
    handleSetState = ()=>{
        this.setState({
            message: "Content is changed with setState method"
        })
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleSetState}>Click Me</button>
      </div>
    )
  }
}

export default SetState