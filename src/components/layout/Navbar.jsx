import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <h3>Raul Sanchez</h3>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="https://medium.com/@raulsanchez1024" className="nav-a">Blog</a>
              </li>
              <li className="nav-item">
                <a href="mailto:hi@raauul.com" className="nav-a">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
