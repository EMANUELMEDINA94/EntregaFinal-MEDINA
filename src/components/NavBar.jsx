import '../assets/css/Navbar.css'
import CartWidget from './CartWidget'
const NavBar = ()=> {
    return (
        <nav className="navcoffee">
            <a href="">Tempo Coffee</a>
            <a href="">Cafés</a>
            <a href="">Accesorios</a>
            <a href="">Locales</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar