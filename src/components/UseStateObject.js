import React,{useState} from 'react'

export const UseStateObject = () => {
    const [name, setname] = useState({
        myName:"gunjan" ,age:28,city:"noida"
    })

   const change=()=>
    {
        setname({...name,myName:"Juhie"})
    }
    return (
        <div>
            <h1>Welcome Object {name.myName} {name.age} {name.city}</h1>
            <button onClick={change}>Update</button>
        </div>
    )
}
