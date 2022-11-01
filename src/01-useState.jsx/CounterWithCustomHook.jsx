import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const {counter,increment,decrement,reset}=useCounter();
  return (
    <>
    <div>Counter: {counter}</div>
    <hr />
    <button onClick={()=>increment(2)}>+1</button>
    <button onClick={reset}>reset</button>
    <button onClick={()=>decrement(2)}>-1</button>
    </>
  )
}
