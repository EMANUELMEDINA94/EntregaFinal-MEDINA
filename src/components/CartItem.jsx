import '../assets/css/checkout.css'

const CartItem = ({ item, removeItem }) => {
    const subtotal = item.price * item.quantity

    return (
        <div className="card mb-3 p-3">
            <h3>{item.title}</h3>
            <p>Categoría: {item.category}</p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${subtotal}</p>

            <button
                className="btn btn-outline-danger"
                onClick={() => removeItem(item.id)}
            >
                Eliminar
            </button>
        </div>
    )
}

export default CartItem