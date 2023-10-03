import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/Dominical'>Dominical</Link>
        <Link to='/Jaco'>Jaco</Link>
        <Link to='/LaFortuna'>La Fortuna</Link>
    </div>
  )
}

export default Layout