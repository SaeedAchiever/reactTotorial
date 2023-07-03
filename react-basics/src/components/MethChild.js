import React from "react";

function MethChild(props){


    return(
        <div>
            <button onClick={props.getUpdate}>Change</button>
        </div>
    )
}

export default MethChild
