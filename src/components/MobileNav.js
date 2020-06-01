import React from "react";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <nav className="navbar mobile is-fixed-bottom">
      <div className="tabs is-centered">
        <ul>
          <li>
            <Link to="/app">Budget</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNav;
