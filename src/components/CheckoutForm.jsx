import { useState } from 'react'
import '../assets/css/checkout.css'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const cleanName = name.trim()
        const cleanPhone = phone.trim()
        const cleanEmail = email.trim()

        if (!cleanName || !cleanPhone || !cleanEmail) {
            setError('Todos los campos son obligatorios.')
            return
        }

        if (isNaN(cleanPhone)) {
            setError('El teléfono debe contener solo números.')
            return
        }

        if (!cleanEmail.includes('@') || !cleanEmail.includes('.')) {
            setError('Ingresá un email válido.')
            return
        }

        setError('')

        const userData = {
            name: cleanName,
            phone: cleanPhone,
            email: cleanEmail,
        }

        onConfirm(userData)
    }

    return (
        <div className="checkout-card"> 
        <form className="container py-4" onSubmit={handleSubmit}>
            <h1>Checkout</h1>

            {error && <p className="text-danger">{error}</p>}

            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input
                    className="form-control"
                    type="text"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <button className="btn btn-dark checkout-btn">Finalizar compra</button>
        </form>
        </div>
    )
}

export default CheckoutForm