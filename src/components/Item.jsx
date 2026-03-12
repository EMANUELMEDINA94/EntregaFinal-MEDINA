import { Link } from 'react-router-dom'
import '../assets/css/Item.css'

const Item = ({ product }) => {
    const { id, title, price, image, category } = product

    return (
        <div className="card h-100 item-card">
            <img src={image} className="card-img-top item-card__img" alt={title} />

            <div className="card-body">
                <small className="text-muted">{category}</small>
                <h5 className="card-title mt-1">{title}</h5>
                <p className="card-text">${price}</p>

                <Link className="btn btn-dark checkout-btn" to={`/item/${id}`}>
                    Ver detalle
                </Link>
            </div>
        </div>
    )
}

export default Item