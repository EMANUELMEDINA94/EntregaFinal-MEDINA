import { useState } from 'react'

const clamp = (n, min, max) => Math.max(min, Math.min(max, n))

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const safeInitial = clamp(initial, 1, Math.max(stock, 1))
    const [qty, setQty] = useState(safeInitial)

    const inc = () => setQty((q) => clamp(q + 1, 1, stock))
    const dec = () => setQty((q) => clamp(q - 1, 1, stock))

    const handleAdd = () => {
        if (stock <= 0) return
        if (typeof onAdd === 'function') onAdd(qty)
    }

    return (
        <div className="detail__count">
            <button className="btn btn-outline-secondary" onClick={dec} disabled={qty <= 1}>
                -
            </button>

            <span style={{ minWidth: 32, textAlign: 'center' }}>{qty}</span>

            <button className="btn btn-outline-secondary" onClick={inc} disabled={qty >= stock}>
                +
            </button>

            <button className="btn btn-dark checkout-btn" onClick={handleAdd} disabled={stock <= 0}>
                Agregar
            </button>
        </div>
    )
}

export default ItemCount