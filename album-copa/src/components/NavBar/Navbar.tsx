import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo"><a style={{textDecoration: 'none'}} href="/">World Album</a></h1>

      <ul className="nav-links">
        <li>Meu Álbum</li>
      </ul>
    </nav>
  );
};

export default Navbar;