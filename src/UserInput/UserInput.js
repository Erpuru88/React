import React from 'react';

const UserInput = (props) => {
    return(
        <div className="inputFields">
            <input name="userName" type="text" placeholder="Enter your name.."></input><br/>
            <input name="userAge" type="number" placeholder="Enter your age.."></input>
        </div>
    )
}

export default UserInput;