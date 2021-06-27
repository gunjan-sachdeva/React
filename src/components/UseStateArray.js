import React,{useState} from 'react'

export const UseStateArray = () => {
    const array=[
{
    id:0,name:"gunjan",age:28
},
{
    id:1,name:"Juhie",age:26
},
{
    id:2,name:"Siddharth",age:29 
}
    ]
    const [myArray, setmyArray] = useState(array)
// console.log(array);
const gunjan=()=>{
    setmyArray([]);
}

    return (
        <div>

            {/* <h1>Name-Gunjan & Age-28</h1> */}
            {
                myArray.map((res)=>{
                 return   <h1 key={res.id}>Name {res.name} Age{res.age}</h1>
                })
            }
            <button onClick={gunjan}>Clear</button>
            
        </div>
    )
}
