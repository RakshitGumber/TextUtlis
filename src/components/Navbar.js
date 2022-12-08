import React from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {
  title: PropTypes.string,
};

const defaultProps = { title: "Name" };

/**
 *
 */
const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} my-nav-${props.mode}`}
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            {props.title}
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label text-light"
                for="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;
