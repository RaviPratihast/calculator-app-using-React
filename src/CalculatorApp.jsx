import React, {useState}from "react";
import Calculatortitle from "./components/CalculatroTitle/CalculatorTitle";
import "./CalculatorApp.css";
import CalculatorScreen from "./components/CaclulatorScreen/CalculatorScreen";
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";

function CalculatorApp(){

     const [current,setCurrent]=useState("")
     

     function showOnTheScreen(value){
          // console.log(value);
          setCurrent(current+value);
     }
    return<div className="calculator-container">
        <Calculatortitle />
        <CalculatorScreen addResult={current}/>
        {/* <CalculatorScreen /> */}

       <div className="button-container" >
           <div className="button button-row-1">
                <CalculatorButton addOnScreen={showOnTheScreen} label={'Clear'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'Delete'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'='}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'.'}/>
           </div>
           <div className="button button-row-2">
               
                <CalculatorButton addOnScreen={showOnTheScreen} label={'1'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'2'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'3'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'+'}/>
           </div>
           <div className="button button-row-3">
                <CalculatorButton addOnScreen={showOnTheScreen} label={'4'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'5'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'6'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'-'}/>

           </div>
           <div className="button button-row-4">
                <CalculatorButton addOnScreen={showOnTheScreen} label={'7'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'8'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'9'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'*'}/>
                
           </div>
           <div className="button button-row-5">
                <CalculatorButton addOnScreen={showOnTheScreen} label={'0'}/>
                <CalculatorButton addOnScreen={showOnTheScreen} label={'/'}/>
           </div>
       </div>
    </div>
}

export default CalculatorApp;