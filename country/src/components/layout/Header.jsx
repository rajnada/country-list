import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a href="/" className="navbar-brand">
            Where in the world?
          </a>
          <div class="ms-auto">
            <button class="btn">
              <i class="fa fa-moon-o me-2" aria-hidden="true"></i>
              <span class="fw-bold">Dark Mode</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
