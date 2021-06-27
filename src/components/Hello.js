import React,{useState} from 'react'

export const Hello = () => {
    // var value="Welcome";
 const [value,setvalue]=useState("gunjan");
 let value1=value;

const gunjan=()=>{
// value="doing state";
// console.log(value);
// if(value1==="gunjan")
// {
//     setvalue("gunjan sachdeva");

// }
// else{
// setvalue("gunjan");

// }
value==="gunjan" ? setvalue("gunjan sachdeva"):setvalue("gunjan");
}
console.log(value);
    return (
        <div>
            <h1>Hello All {value}</h1>
            <button onClick={gunjan}>Update State</button>
            
        </div>
    )
}
