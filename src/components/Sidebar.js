import React from 'react'

export const Sidebar = ({ toggle, setToggle }) => {

const navItems = [
    'Destinations',
    'Activities',
    'About Us',
    'Contact'
]

  return (
    <div className={ toggle ? 'sidebar active' : 'sidebar' }>
        <div className='crossbar' onClick={() => setToggle(false)}>
            <div className='cross'></div>
        </div>
        <div className='side-items'>
            {navItems.map((navItem, index) => {
                return(
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <li key={index} onClick={() => setToggle(false)}><a href="#">{navItem}</a></li>
                )
            })}
        </div>
    </div>
  )
}
