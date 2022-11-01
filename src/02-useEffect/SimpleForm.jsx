import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'admin',
        email:'admin@email.com'
    });
    const {username,email}=formState;
    const onInputChange=({target})=>{
        const {name,value}=target;
        setFormState({
            ...formState,
            [name]:value
        })
    }
    useEffect(() => {
      console.log('useEfect');
    },[formState ,username])
    
  return (
    <>
    <div>SimpleForm</div>
    <hr />
    <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        />
    <input
        type="email"
        placeholder="Username@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
    />
    {(username=='admina')&&<Message/>}
    </>
  )
}
