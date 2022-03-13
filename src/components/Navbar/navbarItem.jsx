const NavbarItem = ({nombre, icon}) => {
    return (
        <ul className='nav_ul'><i class={icon}></i><a className='nav_a' alt="#">{nombre}</a></ul>
    )
}



export default NavbarItem

//<i class='bx bxs-home'></i>
//<i class='bx bxs-store-alt'></i>
//<i class='bx bxs-group'></i>