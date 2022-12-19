import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import Logo from "../../Assets/images/logo.png";
export default function NavBar({ userData, logOut }) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top`}
    >
      <div className="container">
        <Link
          className={`${styles.navbar_logo} text-decoration-none text-white`}
          to="/"
        >
          <img src={Logo} />
          Game Over
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/all">
                All
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Platforms
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/pc">
                    pc
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/browser">
                    browser
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                sort-by
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/release-date">
                    release-date
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/popularity">
                    popularity
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/alphabetical">
                    alphabetical
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/relevance">
                    relevance
                  </Link>
                </li>
              </ul>
            </li>

            {/*  */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/Racing">
                    Racing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Social">
                    Social
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Shooter">
                    Shooter
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/open-world">
                    open-world
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/zombie">
                    Zombie
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="actions">
            {userData ? (
              <div>
                <Link onClick={logOut} className={`${styles.btn_outline_ftg}`}>
                  LogOut
                </Link>
              </div>
            ) : (
              <div className="d-flex align-items-center gap-3">
                <Link to="/Login" className={`${styles.btn_outline_ftg}`}>
                  LogIn
                </Link>
                <Link to="/signUp" className={`${styles.btn_outline_ftg}`}>
                  Join Free
                </Link>
              </div>
            )}
            {/* <button className={`${styles.btn_outline_ftg}`}>LogOut</button> */}
            {/* <button className={`${styles.btn_outline_ftg}`}>LogIn</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
