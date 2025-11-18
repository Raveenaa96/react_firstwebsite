import { Link } from "react-router-dom"

export function Header(){

    return <div>
        <div className="menu-list d-flex m-2 bg-tertiary">
          <nav className="sticky-top">
            <Link to="/home" className="px-2">Home</Link>
            <Link to="/about" className="px-2">About</Link>
            <Link to="/dashboard" className="px-2">Dashboard</Link>
            <Link to="/blog" className="px-2">Home</Link>
            <Link to="/contact" className="px-2">Contact</Link>
          </nav>
        </div>
    </div>
}