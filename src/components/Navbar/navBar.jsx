import React from 'react'
import {useState} from 'react'
import './navbar.css'
import logo from '../../assets/imagenes/logo.png'
import NavbarItem from './navbarItem' 
import CartWidget from '../cartWidget'
import { NavLink, Link } from 'react-router-dom'
import Carrito from '../Carrito'

const Navbar = () => {   
    
const [isActive, setActive] = useState("false");

const handleToggle = () => {
    setActive(!isActive);
}

    return (
        <nav className='nav' id="navbar">
            <img src={logo} className="nav_logo" alt="logo" />
            <CartWidget />
            
            <h2 className='nav_title questrial' id='title'>Momento Dolce Pastelería</h2>
            <li className='nav_li lato'>
                <Link to="/">
                    <NavbarItem icon="bx bxs-home" nombre='Productos' className="productos"/>
                    
                    <button onClick={handleToggle}>+</button>
                    
                    <div className={`divCategoria ${isActive ? "active" : " " }`} >
                        <NavLink to="categoria/Tortas" className="subCategory-a">Tortas</NavLink>
                        <NavLink to="categoria/Tartas" className="subCategory-a">Tartas</NavLink>
                        <NavLink to="categoria/Muffins" className="subCategory-a">Muffins</NavLink>
                        <NavLink to="categoria/Alfajores" className="subCategory-a">Alfajores</NavLink>
                        <NavLink to="categoria/Desayunos" className="subCategory-a">Desayunos</NavLink>
                    </div>
                    
                    
                

                </Link>

                
                <Link to="Carrito">
                    <NavbarItem icon="bx bxs-store-alt" nombre='Carrito' className="Lato"/>
                </Link>

                <Link to="api">
                    <NavbarItem icon="bx bxs-group" nombre='Api resetas'className="Lato"/>
                </Link>
            </li>
        </nav>
    )
}

export default Navbar



/*
`divCategoria ${isActive ? "active" : " " }`
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