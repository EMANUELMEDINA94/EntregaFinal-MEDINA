import { useState } from 'react'
import { Link } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import CheckoutForm from './CheckoutForm'
import { useCart } from '../context/CartContext.jsx'
import { db } from '../service/firebase'
import '../assets/css/checkout.css'

const Checkout = () => {
    const { cart, getTotalPrice, clearCart } = useCart()
    const [orderId, setOrderId] = useState('')

    const handleConfirm = async (userData) => {
        const order = {
            buyer: userData,
            items: cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: getTotalPrice(),
            date: serverTimestamp(),
        }

        const ordersRef = collection(db, 'orders')
        const docAdded = await addDoc(ordersRef, order)

        setOrderId(docAdded.id)
        clearCart()
    }

    if (orderId) {
        return (
            <section className="container py-4">
                <h1>Compra realizada</h1>
                <p>Tu orden fue generada correctamente.</p>
                <p>ID de la orden: <strong>{orderId}</strong></p>

                <Link to="/" className="btn btn-primary">
                    Volver al inicio
                </Link>
            </section>
        )
    }

    if (cart.length === 0) {
        return (
            <section className="container py-4">
                <h1>Checkout</h1>
                <p>No hay productos en el carrito.</p>

                <Link to="/" className="btn btn-primary">
                    Ver productos
                </Link>
            </section>
        )
    }

    return (
        <section className="checkout-page container py-4">
            <div className="checkout-card container pt-4">
                <h1>Resumen de compra</h1>

                {cart.map((item) => (
                    <div key={item.id} className="card mb-3 p-3">
                        <h3>{item.title}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                    </div>
                ))}

                <h2>Total: ${getTotalPrice()}</h2>
            </div>

            <CheckoutForm onConfirm={handleConfirm} />
        </section>
    )
}

export default Checkout