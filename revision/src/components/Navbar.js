import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <ul className="nav bg-light py-3 ps-5">
      <li className="nav-item">
        <Link to="/" className="nav-link active">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/redux" className="nav-link">Redux</Link>
      </li>
    </ul>  
  )
}

export default Navbar