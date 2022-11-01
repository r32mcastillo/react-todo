import { Link } from "react-router-dom"

export const HomePage = () => {
  return (
    <>
    <div>HomePage</div>
    <Link to={`about`}>Your Name</Link>
    </>
  )
}
