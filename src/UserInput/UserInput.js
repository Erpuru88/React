import React from 'react';

const userInput = (props) => {
    return(
        <div className="inputFields">
            <input name="userName" type="text" value={props.name} onChange={props.change}></input><br/>
            <input name="userAge" type="number" placeholder="Enter your age.."></input>
        </div>
    )
}

export default userInput;