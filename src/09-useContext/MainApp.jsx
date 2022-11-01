import { Link, Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
    <>
    <h1>hola</h1>
    <NavBar />
    <hr/>
        <Outlet /> 
    </>
  )
}
