
export const ShowIncrement = ({increment}) => {
  return (
    <button
    onClick={()=>{increment(5);}}    
    >Increment</button>
  )
}
