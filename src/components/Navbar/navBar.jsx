import React from 'react'
import {useState} from 'react'
import './navbar.css'
import logo from '../../assets/imagenes/logo.png'
import NavbarItem from './navbarItem' 
import CartWidget from '../widget/cartWidget'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {   
    
const [isActive, setActive] = useState("false");

const handleToggle = () => {
    setActive(!isActive);
}

    return (
        <nav className='nav' id="navbar">
            <NavLink to="/">
                <img src={logo} className="nav_logo" alt="logo" />
            </NavLink>
            
            <NavLink to="/Carrito">
                <CartWidget />
            </NavLink> 
            
            <h2 className='nav_title questrial' id='title'>Momento Dolce Pastelería</h2>
            <li className='nav_li lato'>
                <div className='producto-div'>
                <NavLink to="/">
                    <NavbarItem icon="bx bxs-home" nombre='Productos' className="productos" onClick={handleToggle}/>
                </NavLink>
                    
                    <button onClick={handleToggle}><i class='bx bxs-down-arrow-circle' ></i></button>
                    
                    <div className={`divCategoria ${isActive ? "active" : " " }`} >
                        <NavLink to="categoria/Tortas" className="subCategory-a">Tortas</NavLink>
                        <NavLink to="categoria/Tartas" className="subCategory-a">Tartas</NavLink>
                        <NavLink to="categoria/Muffins" className="subCategory-a">Muffins</NavLink>
                        <NavLink to="categoria/Alfajores" className="subCategory-a">Alfajores</NavLink>
                        <NavLink to="categoria/Desayunos" className="subCategory-a">Desayunos</NavLink>
                    </div>
                    </div>
                <Link to="Carrito">
                    <NavbarItem icon="bx bxs-store-alt" nombre='Carrito' className="Lato"/>
                </Link>

                <Link to="api">
                    <NavbarItem icon="bx bxs-group" nombre='Api resetas'className="Lato"/>
                </Link>
            </li>
            <i class='bx bx-menu'></i>
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