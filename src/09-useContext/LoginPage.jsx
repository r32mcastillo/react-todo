import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContexe } from "./context/UserContext"

export const LoginPage = () => {
  const {user}=useContext(UserContexe);

  return (
    <>
      <div>LoginPage</div>
      <hr />

      <NavLink
        to="/">
        home
      </NavLink>
      <br/>
      <br/>
      <pre>
        {JSON.stringify(user,null,3)}
      </pre>
    </>
  )
}
