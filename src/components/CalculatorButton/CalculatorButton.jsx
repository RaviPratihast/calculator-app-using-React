// import React,{useState}from "react";
import React from "react";
import "./CalculatorButton.css"




function CalculatorButton(props){

    // const [calcInput,setCalcInput]=useState({value:""});
    // const [calcInput,setCalcInput]=useState("");
    // calcInput="";
    function handleClick(event){
        const newValue=event.target.value;
      
        // setCalcInput((pre)=>{
        //     return {
        //        ...pre,value:newValue
        //     }
        props.addOnScreen(newValue);
        }
        // cannot console it here because usestate's nature is more like async it is not upadting immediately, that is why i am consoling it outside of this scope.
        // console.log(calcInput.value);
    
    // console.log(calcInput.value);

    return <input onClick={handleClick} className="button-input" type="button" value={props.label}/>

}

export default CalculatorButton;


