import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center navLogo">
            <NavLink className="nav-link" to="/login">
              KITTAMET MONTHEANKUL
            </NavLink>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item navItemStyle">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item navItemStyle">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item navItemStyle">
              <NavLink className="nav-link" to="/project">
                Project
              </NavLink>
            </li>
            <li className="nav-item navItemStyle">
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item navItemStyle">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
