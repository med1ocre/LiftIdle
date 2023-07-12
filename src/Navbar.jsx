import React from 'react';


const Navbar = ({ handleClick, activeContent }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark">
      <div className="d-flex align-items-center">
        <div className="flex-grow-1 gameLogo">
          <a href="/" className="navbar-brand">liftidle | v0.0.1</a>
        </div>
      </div>
      <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse justify-content-center align-items-center" id="collapsingNavbar">
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <a
              className={activeContent === 'home' ? 'nav-link active' : 'nav-link'}
              href="#"
              onClick={() => handleClick('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activeContent === 'business' ? 'nav-link active' : 'nav-link'}
              href="#"
              onClick={() => handleClick('business')}
            >
              Business
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ display: 'none' }}>TBD</a>
          </li>
        </ul>
        <div style={{ width: '8rem' }}>
          <p></p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
