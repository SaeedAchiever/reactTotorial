import React, { Component } from 'react'

class BindingEventHandlers extends Component {
    
    // Its possible Event Binding is solved
    // in the current versions of React

    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hi Please subscribe"
      }
    }
     handleSubscribe = () =>{
        this.setState({
            message:"Thanks for Subscribing"
        })
     }

  render() {
    return (
      <div>
        <h2>Hello, from Binding Event Handlers</h2>
        <h4>{this.state.message}</h4>
        <button onClick={this.handleSubscribe}>Subscribe</button>
      </div>
    )
  }
}

export default BindingEventHandlers