import { NavLink } from "react-router-dom"


const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});


export function Header(){

    return <div>
        <div className="menu-list d-flex m-2 bg-tertiary">
          <nav className="sticky-top">
            <NavLink to={"/home"} className="px-2" style={navLinkStyles}>Home</NavLink>
            <NavLink to={"/about"} className="px-2" style={navLinkStyles}>About</NavLink>
            <NavLink to={"/dashboard"} className="px-2" style={navLinkStyles}>Dashboard</NavLink>
            <NavLink to={"/blog"} className="px-2" style={navLinkStyles}>Blog</NavLink>
            <NavLink to={"/contact"} className="px-2" style={navLinkStyles}>Contact</NavLink>
          </nav>
        </div>
    </div>
}