import React from "react";
import "./Calculatorscreen.css"

function CalculatorScreen(props){
    return <div className="calculator-screen-container">
     {props.addResult}
    </div>
}


export default CalculatorScreen;