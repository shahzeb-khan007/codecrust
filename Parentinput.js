import React, { useRef } from 'react'

function Parentinput() {
    const inputRef = useRef(null)
  return (
    <div>
      <Fancyinput ref= {inputRef}/>
      <button onClick={()=>inputRef.current.focus()}>focus</button>
       <button onClick={()=>inputRef.current.disable()}>disable</button>
        <button onClick={()=>inputRef.current.enable()}>enable</button>
    </div>
  )
}

export default Parentinput

