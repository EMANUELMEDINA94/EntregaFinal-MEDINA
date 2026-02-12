import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/ItemDetail.css'

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

const ItemDetail = ({ product, onAddToCart }) => {
    const { title, description, price, image, stock, category } = product
    const [qty, setQty] = useState(1)

    const inc = () => setQty((q) => clamp(q + 1, 1, stock))
    const dec = () => setQty((q) => clamp(q - 1, 1, stock))

    const handleAdd = () => {
        if (typeof onAddToCart === 'function') onAddToCart(qty)
    }

    return (
        <section className="container py-4">
            <Link to={category ? `/category/${category}` : '/'}>← Volver</Link>

            <div className="row g-4 align-items-start mt-2">
                <div className="col-12 col-md-5">
                    <img className="detail__img" src={image} alt={title} />
                </div>

                <div className="col-12 col-md-7">
                    <small className="text-muted">{category}</small>
                    <h1 className="mt-1">{title}</h1>
                    <p className="lead">${price}</p>
                    <p>{description}</p>
                    <p className="text-muted">Stock: {stock}</p>

                    <div className="detail__count">
                        <button className="btn btn-outline-secondary" onClick={dec}>
                            -
                        </button>
                        <span style={{ minWidth: 32, textAlign: 'center' }}>{qty}</span>
                        <button className="btn btn-outline-secondary" onClick={inc}>
                            +
                        </button>

                        <button className="btn btn-primary ms-2" onClick={handleAdd}>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail