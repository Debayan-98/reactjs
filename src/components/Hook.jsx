import React ,{useState} from 'react';

 export function Hook () {
 const[name,setName]= useState("Debayan");

 const handler=() =>{
    setName=("Rahul")
 }

  return (
    <div>
       <h1>{name}</h1>

       <button type='button'onClick={handler}>Click Me</button>
    </div>
  )
}
