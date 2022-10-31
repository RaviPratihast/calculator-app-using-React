import React from "react";
import Calculatortitle from "./components/CalculatroTitle/CalculatorTitle";
import "./CalculatorApp.css";
import CalculatorScreen from "./components/CaclulatorScreen/CalculatorScreen";
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";

function CalculatorApp(){
    return<div className="calculator-container">
        <Calculatortitle/>
        <CalculatorScreen/>

       <div className="button-container" >
           <div className="button button-row-1">
                <CalculatorButton label={'Clear'}/>
                <CalculatorButton label={'Delete'}/>
                <CalculatorButton label={'='}/>
                <CalculatorButton label={'.'}/>
           </div>
           <div className="button button-row-2">
               
                <CalculatorButton label={'1'}/>
                <CalculatorButton label={'2'}/>
                <CalculatorButton label={'3'}/>
                <CalculatorButton label={'+'}/>
           </div>
           <div className="button button-row-3">
                <CalculatorButton label={'4'}/>
                <CalculatorButton label={'5'}/>
                <CalculatorButton label={'6'}/>
                <CalculatorButton label={'-'}/>

           </div>
           <div className="button button-row-4">
                <CalculatorButton label={'7'}/>
                <CalculatorButton label={'8'}/>
                <CalculatorButton label={'9'}/>
                <CalculatorButton label={'*'}/>
                
           </div>
           <div className="button button-row-5">
                <CalculatorButton label={'0'}/>
                <CalculatorButton label={'/'}/>
           </div>
       </div>
    </div>
}

export default CalculatorApp;