import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { useCart } from '../context/CartContext.jsx'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice } = useCart()

    if (cart.length === 0) {
        return (
            <section className="container py-4">
                <h1>Carrito</h1>
                <p>Tu carrito está vacío.</p>

                <Link to="/" className="btn btn-primary">
                    Ver productos
                </Link>
            </section>
        )
    }

    return (
        <section className="container py-4"  style={{ width: '40%' }}>
            <h1>Carrito</h1>

            {cart.map((item) => (
                <CartItem key={item.id} item={item} removeItem={removeItem} />
            ))}

            <h2>Total: ${getTotalPrice()}</h2>

            <div className="d-flex gap-2 flex-wrap mt-3">
                <button className="btn btn-outline-danger" onClick={clearCart}>
                    Vaciar carrito
                </button>

                <Link to="/checkout" className="btn btn-primary">
                    Finalizar compra
                </Link>
            </div>
        </section>
    )
}

export default Cart