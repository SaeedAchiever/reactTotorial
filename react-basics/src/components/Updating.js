import React, { Component } from "react"

class Updating extends Component{

    constructor(props){

        setTimeout(() => {
          console.log(`constructor from update`)
        }, 3000);
        super(props)

        this.state = ({
            message:"Not Updated"
        })
    }

    handleUpdate = () =>{
        this.setState({
            message:"Updated"
        })
    }

    componentDidUpdate(){
        console.log(`Component updated from update`)
    }

    render(){
        setTimeout(() => {
            console.log(`render from update`)
          }, 3000);
        return(

            <div>
                <h2>Hey from Updating Component</h2>
                <p>Check dev tools for full concept <span>{this.state.message}</span></p>
                <button onClick={this.handleUpdate}>update</button>
            </div>
        )
    }
}

export default Updating;