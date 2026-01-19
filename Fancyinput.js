import { forwardRef, useImperativeHandle, useRef } from "react";

const Fancyinput = forwardRef((props,ref)=>{
const fancyRef = useRef(null)
useImperativeHandle(ref,()=>({
    focus:()=>{
        fancyRef.current.focus()
    },
disable:()=>{
    fancyRef.current.disabled = true
},
enable:()=>{
    fancyRef.current.disabled= false
}

}))
return <input ref={fancyRef}/>
}
    
)
export default Fancyinput


///here if you ll see i have used a hook useimperativehandle basically what it does is it customises the instance value  that is exposed to parent component when using ref
///that means when we talk about forward ref forward ref means expose any node from the child to the parent
///i could have done ref = {ref} which means expose entire input field to the parent
//but sometimes if that is not what your requierement is you do not want to expose your entire node to the parent but you want some function alities of it
//which means the parent ref that i have actually forwarded to this element to that parent i am telling it actually attach some functionalities  of the ref which is part of child