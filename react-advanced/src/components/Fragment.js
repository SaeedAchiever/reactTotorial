import React from "react";

function Fragment(){
        // Fragment is a better way of rendering
        // multiple jsx without wrapping it in a 
        // div tag. It can also be an empty tags
        // (<>...</>)

    return(
        <React.Fragment>
            <h1>Hello From Fragment</h1>
        </React.Fragment>
    )
}

export default Fragment