import React from "react";

function Memo(){
    return(
        <div>
            <h2>Hi, from React memo</h2>
        </div>
    )
}

export default React.memo(Memo)