import "./styles.css";
import homeIcon from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <div className="navbar-left">
          <div className="active-item">Início</div>
          <div>Produtos</div>
          <div>Sobre nós</div>
        </div>
        <div className="navbar-icon">
          <img src={homeIcon} alt="Início" />
        </div>
      </nav>
    </header>
  );
}
