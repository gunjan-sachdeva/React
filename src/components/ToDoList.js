import React from 'react'

export const ToDoList = () => {
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
            const [myArray, setmyArray] = React.useState(array)
        // console.log(array);
        const gunjan=()=>{
            setmyArray([]);
        }

        const remove=(id)=>{
// alert(id);
const newArray=myArray.filter((res)=>{
    return res.id!==id;
})
setmyArray(newArray);
        }

    return (
        <div>


{
                myArray.map((res)=>{
                 return(<h1 key={res.id}>Name {res.name} Age{res.age}
                 <button className="ss" onClick={()=> remove(res.id)}>remove</button>
                 </h1>
                 );
                })
            }
            <button onClick={gunjan}>Clear</button>
            

        </div>
    )
}
