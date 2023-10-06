import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <Link to="/CostaRica">Costa Rica</Link>
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
          <Link to="/Dominical">Dominical</Link>
          <Link to="/Jaco">Jaco</Link>
          <Link to="/LaFortuna">La Fortuna</Link>
        </div>
      </div>
      {/* Mexico Navigation */}
      <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <Link to="/Mexico">Mexico</Link>
        <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
          <Link to="/Zihuatanejo">Zihuatanejo</Link>
        </div>
      </div>
    </div>
  );
}

export default Layout;
