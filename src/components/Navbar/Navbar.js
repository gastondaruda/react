import Title from '../Title/Title'
import { NavLink} from 'react-router-dom'
import {useState} from 'react'
import NavbarItem from './navbarItem'
import Category from './Category'
import CartWidget from '../widget/cartWidget'
import "./navbar2.css"
import logo from '../../assets/imagenes/logo.png' 

const Navbar2 = () => {
    const [isActive, setActive] = useState("false");

const handleToggle = () => {
    setActive(!isActive);
}
    return(
        <>
            <nav class="navbar">
                <NavLink to="/react">
                    <img src={logo} className="nav_logo" alt="logo" />
                </NavLink>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
                
                <Title title="Momento Dolce Pastelería"/>
                
                <input type="checkbox" id="toggler"></input>
                <label for="toggler"><i class='bx bx-menu'></i></label>
                <div class="menu">
                    <ul class="list">
                        <div className='div_prod'>
                        <NavLink to="/">
                                <NavbarItem name='Productos' /*onClick={handleToggle}*//>
                        </NavLink>
                        <button className="arrow_btn" onClick={handleToggle}><i class='bx bxs-down-arrow-circle'></i></button>
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
                        
                        <NavLink to="cart">
                            <NavbarItem name='Carrito'/>
                        </NavLink>
                        <NavLink to="/payment">
                            <NavbarItem name='Forma de pago'/>
                        </NavLink>
                    </ul>
                </div>
            </nav> 
        </>
    )
}

export default Navbar2