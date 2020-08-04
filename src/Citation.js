import React from 'react';
import './scss/Citation.scss'

function Citation(props) {
    return (
        <div className="citation">
            {props.children}
        </div>
    )
}

export default Citation;