import React from 'react'
import './togleButton.css'

function TogleButton(props){

    return (
        <div>
            <div className="togle-button" onClick={props.click}>
                <div className="togle-div"/>
                <div className="togle-div"/>
                <div className="togle-div"/>
            </div>
        </div>
    )
}

export default TogleButton
