import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="mb-5">
        <nav className="d-flex align-items-center">
          <div id="logo">
            <img
              src="assets/netflix_logo.png"
              alt="logo"
              className="mb-3 ps-0"
            />
          </div>
          <ul className="list-unstyled text-white d-flex ms-3">
            <li className="me-3">Home</li>
            <li className="me-3 fw-bold">TV Shows</li>
            <li className="me-3">Movies</li>
            <li className="me-3">Recently Added</li>
            <li className="me-3">My List</li>
          </ul>
          <div
            id="nav-right"
            className="d-flex flex-grow-1 justify-content-end align-items-center text-white"
          >
            <i className="bi bi-search me-3"></i>
            <span className="text-white me-3">KIDS</span>
            <i className="bi bi-bell text-white me-3"></i>
            <img src="assets/avatar.png" alt="avatar" id="avatar" />
            <i className="bi bi-caret-down-fill text-white ms-1 fs-6"></i>
          </div>
        </nav>
        <div id="buttom-nav" className="d-flex align-items-center d-block">
          <div id="b-nav-left" className="d-flex align-items-center">
            <h1 className="d-inline text-white">TV Shows</h1>
            <select
              name="filter"
              id="filter"
              className="text-white ms-5 py-1 px-2"
            >
              <option value="1">Genres</option>
              <option value="2">Filter 2</option>
              <option value="3">Filter 3</option>
            </select>
          </div>
          <div
            id="b-nav-right"
            className="d-flex flex-grow-1 justify-content-end"
          >
            <i className="bi bi-filter-left text-white me-0 border border-1 px-1"></i>
            <i className="bi bi-grid-fill text-white border border-1 px-1 ms-0"></i>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
