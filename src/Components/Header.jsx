import React from 'react'
import { Link } from 'react-router-dom'
import '../Header.css'
export const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>e-Learning</div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link className='adminheader' to='/admin'></Link>
            <Link to='/login'>Login</Link>

        </nav>
    </header>
  )
}
