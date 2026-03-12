import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
        const productInCart = cart.find((item) => item.id === product.id)

        if (productInCart) {
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            )

            setCart(updatedCart)
        } else {
            const newItem = {
                ...product,
                quantity: quantity,
            }

            setCart([...cart, newItem])
        }
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id)
        setCart(updatedCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                getTotalQuantity,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}