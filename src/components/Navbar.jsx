import React from 'react'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className='nav'>
      <img className='nav-logo' src={Logo} alt='logo' />
    </nav>
  )
}

export default Navbar;