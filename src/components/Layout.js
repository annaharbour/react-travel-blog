// import React from 'react'
// import { Link } from 'react-router-dom'

// function Layout() {
//   return (
//     <div className='navbar'>
//         <Link to='/'>Home</Link>
//         <Link to='/Dominical'>Dominical</Link>
//         <Link to='/Jaco'>Jaco</Link>
//         <Link to='/LaFortuna'>La Fortuna</Link>
//     </div>
//   )
// }

// export default Layout

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
        {showDropdown && (
          <div className="dropdown-content">
            <Link to="/Dominical">Dominical</Link>
            <Link to="/Jaco">Jaco</Link>
            <Link to="/LaFortuna">La Fortuna</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Layout;
