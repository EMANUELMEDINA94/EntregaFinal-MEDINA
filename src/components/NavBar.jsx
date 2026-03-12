import { NavLink, Link } from 'react-router-dom'
import '../assets/css/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="navcoffee">
            <Link className="brand" to="/">
                <img
                    className="brand__logo"
                    src="/tempocoffee-logo.webp"
                    alt="Tempo Coffee logo"
                />
            </Link>

            <div className="navcoffee__links">
                <NavLink
                    to="/category/cafe"
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                    Cafés
                </NavLink>

                <NavLink
                    to="/category/accesorios"
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                    Accesorios
                </NavLink>

                <NavLink to="/local">
                    Local
                </NavLink>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar