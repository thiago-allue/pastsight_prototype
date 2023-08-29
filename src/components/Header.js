import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="headerContainer">
      <h1>Pastsight</h1>
      <nav>
        <Link to="/input">Input</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/config">Config</Link>
      </nav>
    </div>
  );
}
