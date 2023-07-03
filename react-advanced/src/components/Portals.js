import React from "react";
import ReactDOM from "react-dom";

function Portals(){
    let portal_root = document.getElementById('portal_root')

    return ReactDOM.createPortal (
        <div>
            <h1>Hey from React Portals</h1>
            <div className="portal_container" style={{
                    maxWidth:'250px',
                    margin:'0 auto',
                    border: '1.5px dotted gold',
                    padding:'10px',
                    position:'relative'
                }}>
                <div className="shown" style={{
                    lineHeight:'30px',
                    backgroundColor:'lightblue',
                    padding:'20px'
                }}>
                    Hey from react portals,  Here
                    we created a new root and 
                    mounted the portal component on it.
                </div>
                

            </div>
        </div>,
        portal_root
    )
}

export default Portals