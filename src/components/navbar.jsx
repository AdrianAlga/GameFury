import Logo from "../assets/images/logo.png";
import "../assets/css/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <img src={Logo} alt="img" height={60} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex search position-relative w-50" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn position-absolute ic-search border-0" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <button className="btn border">Daftar</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
