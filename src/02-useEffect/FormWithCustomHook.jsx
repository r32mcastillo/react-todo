import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange,onResetForm,username,email, password } = useForm({
    username: 'admin',
    email: 'admin@email.com',
    password: 'admin'
  });
  //const {username,email, password}=formState;
  useEffect(() => {
    console.log('useEfect');
  }, [formState, username])

  return (
    <>
      <div>FormWithCustomHook</div>
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
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <br/>
      <br/>
      <button onClick={onResetForm}>Borrar</button>
    </>
  )
}
