import React from "react";
import Calculatortitle from "./components/CalculatroTitle/CalculatorTitle";
import "./CalculatorApp.css";
import CalculatorScreen from "./components/CaclulatorScreen/CalculatorScreen";
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";

function CalculatorApp(){

     function showOnTheScree(value){
          console.log(value);
     }
    return<div className="calculator-container">
        <Calculatortitle/>
        <CalculatorScreen/>

       <div className="button-container" >
           <div className="button button-row-1">
                <CalculatorButton addOnScreen={showOnTheScree} label={'Clear'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'Delete'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'='}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'.'}/>
           </div>
           <div className="button button-row-2">
               
                <CalculatorButton addOnScreen={showOnTheScree} label={'1'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'2'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'3'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'+'}/>
           </div>
           <div className="button button-row-3">
                <CalculatorButton addOnScreen={showOnTheScree} label={'4'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'5'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'6'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'-'}/>

           </div>
           <div className="button button-row-4">
                <CalculatorButton addOnScreen={showOnTheScree} label={'7'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'8'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'9'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'*'}/>
                
           </div>
           <div className="button button-row-5">
                <CalculatorButton addOnScreen={showOnTheScree} label={'0'}/>
                <CalculatorButton addOnScreen={showOnTheScree} label={'/'}/>
           </div>
       </div>
    </div>
}

export default CalculatorApp;