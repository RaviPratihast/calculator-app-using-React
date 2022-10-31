import React from "react";
import "./CalculatorButton.css"

function CalculatorButton(props){
    return <input className="button-input" type="button" value={props.label}/>
}

export default CalculatorButton;


