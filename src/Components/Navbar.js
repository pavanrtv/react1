import React, { useState } from "react";
import PropType from "prop-types";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [myStlye, setMyStyle] = useState({
    color: "black",
  });
  const toggleStyle = () => {
    if (myStlye.color === "black") {
      setMyStyle({
        color: "white",
      });
    } else {
      setMyStyle({
        color: "black",
      });
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/home"}>
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about">
                <a
                  className="nav-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  About
                </a>
              </NavLink>
            </li>
          </ul>
          <i className="fa-solid fa-sun me-2" style={myStlye}></i>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleMode();
                toggleStyle();
              }}
            />
            <i className="fa-solid fa-moon me-2" style={myStlye}></i>
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
