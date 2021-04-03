import React from 'react'

const validation = props => {
    var text;
    if (props.size > 5)
        text = 'Text long enough'
    else
        text = 'Text tooo short'

    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

export default validation;