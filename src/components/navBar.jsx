import React from 'react'
import './navbar.css'
import logo from './././logo.png'; /*me toma el png desde la carpeta de Components y no desde la carpeta de imagenes*/  

const Navbar = () => {
    return (
        <nav className='nav'>
            <img src={logo} className="nav_logo" alt="logo" />
            <h2 className='nav_title'>Momento Dolce Pastelería</h2>
            <li className='nav_li'>
                <ul className='nav_ul'><a className='nav_a' href='#'>Landing</a></ul>
                <ul className='nav_ul'><a className='nav_a' href='#'>Productos</a></ul>
                <ul className='nav_ul'><a className='nav_a' href='#'>¿Quienes Somos?</a></ul>
            </li>
        </nav>
    )
}

export default Navbar