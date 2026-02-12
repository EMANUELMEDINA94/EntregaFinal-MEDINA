const CartWidget = ({ count = 0 }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span role="img" aria-label="carrito">
                🛒
            </span>
            <span>{count}</span>
        </div>
    )
}

export default CartWidget



