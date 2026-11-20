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

export default Header;