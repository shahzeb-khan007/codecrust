import React, { useState } from 'react'

function Controlled() {///so the point is not actually to make a form and capturee its data no.the point is we are capturing data but actually with help of a paradigm and that paradigm is called state 

    const[formData,setFormData]=useState({
        name:"",
        email:"",
        phone: "",
        password:"",
    })
    const [condition,setCondition]=useState(false)
    function handleSubmit(e){
        e.preventDefault()
        setCondition(true)
    
//  setFormData((prev)=>({...prev,email:""}))
  
    }
    function handleChange(e){
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value} ))
    }
  return (
    <div>
        <form onSubmit= {handleSubmit}>
            <input type='text' value={formData.name}  name= 'name'
            onChange={handleChange} /> <br></br>
              <input type='email' value={formData.email} name='email'
              onChange={handleChange}/> <br></br>
                <input type='number' value={formData.number} name='number'
                onChange={handleChange}/> <br></br>
                  <input type='password' value={formData.password} name='password'
                  onChange={handleChange}/> <br></br>
                    <input type='submit' value="submit"/>
                   {condition && (
                    <h1> {formData.name} {formData.email}</h1>
                   )}
        </form>
      
    </div>
  )
}

export default Controlled

///how am i going to handlechnge of all input fields using a single function ?
///lets ist describe the problem statement so i have four input fields over there i want this function handler to detect change in each input field and only update the same input field at that instance nd i have four onchange events atttached to each of them

//so i am saying whenever i am typing in name input field the function which is responsible in updating name is handlechange only
///now how am i going to recieve it in that function?
//we all know that when we create an event something is created that something is called as an event object that gives the present function information what that event is about
