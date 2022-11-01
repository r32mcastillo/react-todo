import { useState } from "react"
import { UserContexe } from "./UserContext"
export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        id:123,
        name:'Miguel Castillo Cortes',
        email:'email@correo.com'
    } )
  return (
    <UserContexe.Provider value={{hola:'Mundo',user:user}}>
        {children}
    </UserContexe.Provider>
  )
}
