import { PureComponent } from "react";
import React from "react";


class PureComp extends PureComponent{

    constructor(props){
        super(props)

        this.state = {
            message: "An unupdated message from Pure Components"
        }
    }

    
    componentDidMount(){

        setInterval(() => {
            this.setState({
                message: "An updated message from Pure Components"
            })
        }, 3000);
       
            
    }

    render(){
        console.log('Pure Component')
        return(
            <div>
                <h1>Hey, Pure Component</h1>
                <span>{this.state.message}</span>
            </div>
        )
    }
}

export default PureComp;