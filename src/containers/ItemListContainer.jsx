import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/productService'
import ItemList from '../components/ItemList'
import '../assets/css/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        let alive = true

        setLoading(true)
        setErrorMsg('')

        getProducts()
            .then((data) => {
                if (!alive) return
                setProducts(data)
            })
            .catch(() => {
                if (!alive) return
                setErrorMsg('Ocurrió un error cargando productos.')
            })
            .finally(() => {
                if (!alive) return
                setLoading(false)
            })

        return () => {
            alive = false
        }
    }, [])

    const filtered = useMemo(() => {
        if (!categoryId) return products
        return products.filter((p) => p.category === categoryId)
    }, [products, categoryId])

    return (
        <section className="ilc">
            <h1 className="titulo">{greeting}</h1>

            {loading && <p>Cargando productos...</p>}
            {!loading && errorMsg && <p>{errorMsg}</p>}

            {!loading && !errorMsg && categoryId && filtered.length === 0 && (
                <p>No hay productos para la categoría: "{categoryId}".</p>
            )}

            {!loading && !errorMsg && <ItemList products={filtered} />}
        </section>
    )
}

export default ItemListContainer