import { Component } from "react";
import React from "react";


class Counter extends Component{

    constructor(props){
        super(props)

        this.state = {
            counter:0
        }
    }

    handleCounter = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        return(
            <div>
                <h1>Hi, from counter</h1>
                <h4>{`Button is clicked ${this.state.counter} times`}</h4>
              <button onClick={this.handleCounter}>Click</button>
            </div>
        )
    }
}

export default Counter