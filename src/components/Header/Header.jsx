import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex gap-6 justify-center'>
        <NavLink to="/" className='btn border border-green-600 p-2 rounded-xl' >Home</NavLink>
        <NavLink to="/Login" className='btn border border-green-600 p-2 rounded-xl'>Login</NavLink>
    </div>
  )
}

export default Header