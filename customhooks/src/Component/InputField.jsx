import React, { useState } from "react";
import useLocalStorage from "./useStorage";
import "../App.css"

const InputField =()=>{

    // let [inputFieldValue, setInputFieldValue] = useState("")
    let [value, updateValue] = useLocalStorage("inputData")

    function savingInputValues(e){
        let data = e.target.value;
        updateValue(data)
    }

    console.log("value", value)


    return (
        <>
        <div className="parent">
            <input type="text"
            placeholder="Enter the data to be stored..."
            onChange={savingInputValues}
            id="input"

            />
            <h3 id="text">data that is getting stored : {value}</h3>
        </div>
        </>
    )
}


export default InputField;