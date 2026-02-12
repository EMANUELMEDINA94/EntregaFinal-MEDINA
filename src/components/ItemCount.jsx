import { useState } from "react"

export default function ItemCount({ stock = 0, initial = 1 }) {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1) setCount(count - 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span> {count} </span>
            <button onClick={increment}>+</button>

            <button disabled={stock === 0}>Agregar al carrito</button>
        </div>
    )
}