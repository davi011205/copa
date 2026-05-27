import "./Navbar.css";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  async function logOutUser() {
    await logout();
    navigate("/");
  }

  const handleNavigate = () => {
    navigate(`/home/meu-album`);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        <a style={{ textDecoration: "none" }} href="/home">
          World Album
        </a>
      </h1>

      <ul className="nav-links">
        <li onClick={handleNavigate}>Meu Álbum</li>
        <li onClick={logOutUser}>Sair</li>
      </ul>
    </nav>
  );
};

export default Navbar;