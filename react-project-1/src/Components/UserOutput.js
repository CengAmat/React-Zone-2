import React from 'react'

const userOutput = (props) => {
    return (
        <div className = "User">
            <p>{props.children}</p>
            <p>{props.username}</p>
        </div>
    );
};

export default userOutput;