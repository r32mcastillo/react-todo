import { Link, NavLink } from "react-router-dom"
let activeStyle = {
    textDecoration: "underline",
};
export const NavBar = () => {
    return (
        <ul>
            <li>
            <NavLink
                to="/" end>
                Home
            </NavLink>

            </li>
            <li>
            <NavLink
                to="about">
                about
            </NavLink>

            </li>
            <li>

            <NavLink
                to="login">
                login
            </NavLink>
            </li>
        </ul>
    )
}
