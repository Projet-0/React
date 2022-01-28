import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        
        <div className='NavBar'>
        
            <div className='NavBarContainer'>
                <p><NavLink to='/'>Accueil</NavLink></p>
            </div>

            <div className='NavBarContainer'>
                <p><NavLink to='/Culture'>Culture</NavLink></p>
            </div>

            <div className='NavBarContainer'>
                <p><NavLink to='/Sport'>Sport</NavLink></p>
            </div>
        
        </div>
    )



}

export default NavBar;