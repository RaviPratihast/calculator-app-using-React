import React, {useState}from "react";
import Calculatortitle from "./components/CalculatroTitle/CalculatorTitle";
import "./CalculatorApp.css";
import CalculatorScreen from "./components/CaclulatorScreen/CalculatorScreen";
import CalculatorButton from "./components/CalculatorButton/CalculatorButton";


function CalculatorApp(){

     const [current,setCurrent]=useState("");
     const [previous, setPrevious]=useState("");
     const [operator,setOperator]=useState("");
     const [result,setResult]=useState("");
     const operators=["+","-","/","*","."];
     const numberArr=['1','2','3','4','5','6','7','8','9','0'];

     function operationFunc(curr,pre,oper){
          // console.log("current:",curr);
          // console.log("previous:",pre);
          // console.log("operator:",oper);
          const newCurr=Number(curr);
          const newPre=Number(pre);
          // console.log("newCurr:",newCurr);
          // console.log("newPre:",newPre);

          if(oper==="+"){
               return newCurr+newPre;
          }else if(oper==="-"){
               return newCurr - newPre;
          }else if(oper==="*"){
               return newCurr * newPre;
          }else if(oper==="/"){
              return  newCurr / newPre;
          }
     }

   
     function showOnTheScreen(value){
         
          if( value==="Clear"){
               
               setCurrent("");
               setPrevious("");
               setOperator("");
               setResult("");

          }else if(value==="Delete"){
               return null;
          }else if(numberArr.includes(value)){
               if(operator===""){
                    setCurrent(current+value);
               }else if(operator!==""){
                    setPrevious(previous+value);
               }
              
          }else if(operators.includes(value)){
               setOperator(operator+value);
              
          } else if(value==="="){
               // setResult(result+(operationFunc(current,previous,operator)));
               // setResult(pre=>{
               //      if(operationFunc(current,previous,operator)==="undefined"){
               //           return "Malformed Expression";
               //      }else{
               //           operationFunc(current,previous,operator)
               //      }
               // })

               const totalValue=operationFunc(current,previous,operator);
               if(totalValue===undefined){
                    setResult(result+"Malformed Expression");
               }else{
                    setResult(result+totalValue);
               }
          }
          
     }

    
    
    return<div className="calculator-container">
        <Calculatortitle />
        <CalculatorScreen addCurrent={current} addPrevious={previous} addOperator={operator} addResult={result}/>
      

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