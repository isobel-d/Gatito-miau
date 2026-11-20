<<<<<<< HEAD
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="sidebar">
      <h2>MichiApp 🐾</h2>
      <nav>
        <ul className="nav-list">
          {/* Usamos los nombres de tu ejemplo adaptados a tu app */}
          <li>
            <NavLink to="/" className="nav-link">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/galeria" className="nav-link">Galería</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">Acerca</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
=======
import {Link} from 'react-router'

const Header =() => {
    return (
        <div className="top-nav">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            </div>
    );
}


export default Header;