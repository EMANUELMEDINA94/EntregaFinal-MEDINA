import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/productService'
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = ({ onAddToCart }) => {
    const { itemId } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        let alive = true

        setLoading(true)
        setErrorMsg('')
        setProduct(null)

        getProductById(itemId)
            .then((data) => {
                if (!alive) return
                setProduct(data)
            })
            .catch(() => {
                if (!alive) return
                setErrorMsg('Ocurrió un error cargando el detalle.')
            })
            .finally(() => {
                if (!alive) return
                setLoading(false)
            })

        return () => {
            alive = false
        }
    }, [itemId])

    if (loading) return <p style={{ padding: 16 }}>Cargando detalle...</p>
    if (errorMsg) return <p style={{ padding: 16 }}>{errorMsg}</p>
    if (!product) return <p style={{ padding: 16 }}>Producto no encontrado.</p>

    return <ItemDetail product={product} onAddToCart={onAddToCart} />
}

export default ItemDetailContainer