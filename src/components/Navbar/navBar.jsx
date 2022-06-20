import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {useState} from 'react'
import CartWidget from '../widget/cartWidget'
import NavbarItem from './navbarItem'
import Category from './Category'
import Title from '../Title/Title'
import logo from '../../assets/imagenes/logo.png'
import './navbar.css'

const Navbar = () => {   
const [isActive, setActive] = useState("false");

const handleToggle = () => {
    setActive(!isActive);
}

    return (
        <nav className='nav'>
            <div className='flex row'>
                <NavLink to="/react">
                <img src={logo} className="nav_logo" alt="logo" />
                </NavLink>
                    
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink> 
            </div>
            
            <Title title="Momento Dolce pastelería" />
            
            <input type="checkbox" id="toggler"></input>
            <label for="toggler"><i class='bx bx-menu'></i></label>
            <div className='menu'>
                <div className='product-div'>
                        <NavLink to="/">
                            <NavbarItem name='Productos' onClick={handleToggle}/>
                        </NavLink>
                            <button onClick={handleToggle}><i class='bx bxs-down-arrow-circle'></i></button>
                            <div className={`divCategoria ${isActive ? "" : "active" }`} >
                                <NavLink to="category/Tortas">
                                    <Category category="Tortas" />
                                </NavLink>
                                <NavLink to="category/Tartas">
                                    <Category category="Tartas" />
                                </NavLink>
                                <NavLink to="category/Muffins">
                                    <Category category="Muffins" />
                                </NavLink>
                                <NavLink to="category/Alfajores">
                                    <Category category="Alfajores" />
                                </NavLink>
                                <NavLink to="category/Desayunos">
                                    <Category category="Desayunos" />
                                </NavLink>
                            </div>
                        </div>

                    <Link to="cart">
                        <NavbarItem name='Carrito'/>
                    </Link>

                    <Link to="/payment">
                        <NavbarItem name='Forma de pago'/>
                    </Link>
            </div>
            
        </nav>
    )
}

export default Navbar
