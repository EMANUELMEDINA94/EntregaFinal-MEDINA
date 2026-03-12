import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../assets/css/ItemDetail.css'
import ItemCount from './ItemCount'
import { useCart } from '../context/CartContext.jsx'

const ItemDetail = ({ product }) => {
    const { title, description, price, image, stock, category } = product
    const { addItem } = useCart()
    const [added, setAdded] = useState(false)

    const handleAdd = (quantity) => {
        addItem(product, quantity)
        setAdded(true)
    }

    return (
        <section className="container py-4">
            <Link to={category ? `/category/${category}` : '/'}>
                ← Volver
            </Link>

            <div className="row g-4 align-items-start mt-2">
                <div className="col-12 col-md-5">
                    <img className="detail__img" src={image} alt={title} />
                </div>

                <div className="col-12 col-md-7">
                    <small className="text-muted">{category}</small>
                    <h1 className="mt-1">{title}</h1>
                    <p className="lead">${price},00</p>
                    <p>{description}</p>
                    <p className="text-muted">Stock: {stock}</p>

                    {!added ? (
                        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
                    ) : (
                        <div className="mt-3 d-flex gap-2 flex-wrap">
                            <Link to="/cart" className="btn btn-primary">
                                Ir al carrito
                            </Link>

                            <Link to="/" className="btn btn-outline-secondary">
                                Seguir comprando
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ItemDetail