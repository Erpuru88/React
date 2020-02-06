import React from 'react';

const UserOutput = (props) => {
    return(
        <div className="userDetails" >
            <p>My name is <strong>{props.name}</strong> </p>
            <p>My age is <strong>{props.age}</strong> </p>
        </div>
    )

}
export default UserOutput;