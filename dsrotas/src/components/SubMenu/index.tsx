import { NavLink } from "react-router-dom";
import "./styles.css";

export default function SubMenu() {
  return (
    <header className="header-submenu">
      <nav className="container submenu-nav">
        <div>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-menu-item " : "")}
          >
            Computadores
          </NavLink>
        </div>
        <div>Produtos</div>
        <div>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-menu-item " : "")}
          >
            Eletrônicos
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-menu-item " : "")}
          >
            Livros
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
