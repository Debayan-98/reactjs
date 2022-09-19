import React ,{ useState} from 'react'

function Hook () {
 var  [name,setName]= useState("Debayan");

   const  handlerClick=()=>{
      setName=("Rahul");
    };
  
  return (
    <div>
    <h1>{name}</h1>
     <h1>WELCOME</h1>
       <button type='button'onClick ={handlerClick} >Click Me</button>
    </div>
  )  
}
export default Hook