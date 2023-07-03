import React, { Component } from 'react'

class Mounting extends Component {

    componentDidMount(){

        setTimeout(() => {
            console.log("Component did Mount")
            }, 3000);
        
    }
    
    constructor(props){
        super(props)

        this.state = ({

        })

        setTimeout(() => {
        console.log('Constructor mounting ')
        }, 3000);
    }

 

  render() {
    setTimeout(() => {
        console.log('Render method is mounted')
        }, 3000);
    return (
      <div>
            
            <h1>Hi, from Mounting Component</h1>
            <p>Here, check dev tools console for all info</p>
      </div>
    )
  }
}

export default Mounting