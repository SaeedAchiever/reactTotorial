import React from "react";
import MethChild from './MethChild'
import { Component } from "react";

class MethParent extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            message: 'Hey from Meth as Props'
        }
    }

    handleStateChange = () => {
        this.setState({
            message: 'My state was updated using a method passed from the parent Compo to the child'
        })

        this.handleStateChange = this.handleStateChange.bind(this)
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
    
                <MethChild getUpdate={this.handleStateChange}/>
            </div>
        )
    }
    
}

export default MethParent