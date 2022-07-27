/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import './style.main.css'

const Navbar = () => {

    const[toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const navItems = [
        'Destinations',
        'Activities',
        'About Us',
        'Contact'
    ]

  return (
    <div className='navbar'>
        <div className='nav'>
            <div className='logo'>
                <img src={process.env.PUBLIC_URL + './images/logo_1.png'} alt="" />
                <img src={process.env.PUBLIC_URL + './images/logo_2.png'} alt="" />
            </div>
            <div className='nav-list'>
                {navItems.map((navItem, index) => {
                    return(
                        <li key={index}><a href="#">{navItem}</a></li>
                    )
                })}
            </div>
            <div className='hamburger' onClick={handleToggle}>
                <div className='ham'></div>
            </div>
        </div>
        <Sidebar toggle={toggle} setToggle={setToggle}/>
    </div>
  )
}

export default Navbar