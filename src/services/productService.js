import { PRODUCTS } from '../data/products'

const simulateNetworkDelay = (ms = 600) =>
    new Promise((resolve) => setTimeout(resolve, ms))

export const getProducts = async () => {
    await simulateNetworkDelay()
    return PRODUCTS
}

export const getProductById = async (id) => {
    await simulateNetworkDelay()
    const product = PRODUCTS.find((p) => p.id === id)
    return product ?? null
}