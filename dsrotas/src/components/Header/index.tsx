import "./styles.css";
import homeIcon from "../../assets/home.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <div className="navbar-left">
          <div className="active-menu-item">
            <Link to="/">Início</Link>
          </div>
          <div>Produtos</div>
          <div>Sobre nós</div>
        </div>
        <div className="navbar-icon">
          <Link to="/">
            {" "}
            <img src={homeIcon} alt="Início" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
