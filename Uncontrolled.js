import React, { useRef, useState } from 'react'

function Uncontrolled() {
    const[condition,setCondition]= useState(false)
    const nameRef=useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    function handleSubmit(e){
        e.preventDefault()
        setCondition(true)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type='text'  ref={nameRef}></input>
      <input type='email' ref={emailRef}></input>
       <input type='password' ref={passRef}></input>
        <input type='submit' value= "submit"></input>
         </form>
         {condition && (<h1>{nameRef.current.value} {emailRef.current.value} {passRef.current.value}</h1>

         )
 
         }

    </div>
   
  )
}

export default Uncontrolled
