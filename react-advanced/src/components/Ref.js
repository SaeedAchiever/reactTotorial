import React from "react";
import { Component, createRef } from "react";

class Ref extends Component{

    constructor(props){
        super(props)
        this.inputRef = createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <h2>Hey, from Refs</h2>
                <input ref={this.inputRef}/>
            </div>
        )
    }
}

export default Ref