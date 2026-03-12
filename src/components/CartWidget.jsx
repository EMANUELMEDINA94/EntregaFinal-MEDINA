import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const CartWidget = () => {
    const { getTotalQuantity } = useCart()

    const totalQuantity = getTotalQuantity()

    return (
        <Link
            to="/cart"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                textDecoration: 'none',
                color: 'inherit',
            }}
        >
            <span role="img" aria-label="carrito">
                🛒
            </span>

            <span>{totalQuantity}</span>
        </Link>
    )
}

export default CartWidget