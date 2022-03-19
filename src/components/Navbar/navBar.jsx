import React from 'react'
import './navbar.css'
import logo from '../../assets/imagenes/logo.png'
import NavbarItem from './navbarItem' 
import CartWidget from '../cartWidget'
import { NavLink, Link } from 'react-router-dom'
import Carrito from '../Carrito'




const Navbar = () => {
    

    return (
        <nav className='nav' id="navbar">
            <img src={logo} className="nav_logo" alt="logo" />
            <CartWidget />
            <h2 className='nav_title questrial' id='title'>Momento Dolce Pastelería</h2>
            <li className='nav_li lato'>
                <Link to="/">
                    <NavbarItem icon="bx bxs-home" nombre='Landing Page' />
                </Link>
                <Link to="carrito">
                    <NavbarItem icon="bx bxs-store-alt" nombre='Carrito' />

                </Link>
                <Link to="api">
                    <NavbarItem icon="bx bxs-group" nombre='Api resetas' />
                </Link>
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