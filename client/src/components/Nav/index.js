import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {

  const location = useLocation();

  
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
      setIsNavCollapsed(!isNavCollapsed);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to={"/"} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        <span className="navbar-brand" href="/" onClick={handleNavCollapse}>
          Google Book Search
        </span>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown text-light">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </li>
            <li className="nav-item dropdown">
                <Link to="/books" className={location.pathname === "/books" ? "nav-link active" : "nav-link"}>
                    Saved
                </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
