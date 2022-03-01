import React from 'react'
import './navbar.css'
import logo from '../assets/imagenes/logo.png'
import NavbarItem from './navbarItem' 
import CartWidget from './cartWidget'



const Navbar = () => {
    const style = {backgroundColor: 'rgb(248, 246, 246)'}
    

    return (
        <nav className='nav' style={style}>
            <img src={logo} className="nav_logo" alt="logo" />
            <CartWidget />
            <h2 className='nav_title'>Momento Dolce Pastelería</h2>
            <li className='nav_li'>
                <NavbarItem nombre='Landing Page' />
                <NavbarItem nombre='Productos' />
                <NavbarItem nombre='¿Quiénes somos?' />
            </li>
        </nav>
    )
}

export default Navbar



/*
<ul className='nav_ul'>
                    <a className='nav_a' href='#' onClick={Landing}>Landing</a>
                </ul>
                <ul className='nav_ul'>
                    <a className='nav_a' href='#'>Productos</a>
                </ul>
                <ul className='nav_ul'>
                    <a className='nav_a' href='#'>¿Quiénes Somos?</a>
                </ul>
*/