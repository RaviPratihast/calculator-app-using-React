import React from "react";
import "./Calculatorscreen.css"

function CalculatorScreen(props){
    return <div className="calculator-screen-container">
           <span>{props.addHistory}</span>
            {props.addCurrent}
            {props.addOperator}
            {props.addPrevious}
           <span> {props.addResult}</span>
     
    </div>
}


export default CalculatorScreen;