import React, { useState } from "react";


const Welcome = React.memo(function Welcome() { 


    
const [view, setView] = useState(true);
const handleclick = () => {
    setView(false);
   
}
    return (<div>{view ? 
        <div className="welcome_div" data-testid="div-tag" >
            <button style={{ color: 'whitesmoke', width: '0px', marginBottom: '5px' }} onClick={handleclick}>x</button>
            <center>
                <h1 style={{ marginBottom: '20px' }}>Welcome Back Editor!!!</h1>
            </center>
        </div> : ' '}
        </div>
        );
    }) 
 
export default Welcome;                        