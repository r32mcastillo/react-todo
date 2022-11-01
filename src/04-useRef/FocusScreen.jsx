import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const onClick=()=>{
        inputRef.current.select();
    }
  return (
    <>
    <div>FocusScreen</div>
    <hr/>
    <input 
        ref={inputRef}
        type="text" 
        name="" />
    <button onClick={onClick}>algo</button>
    </>
  )
}
