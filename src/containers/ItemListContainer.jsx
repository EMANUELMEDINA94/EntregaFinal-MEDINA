import { useEffect, useState } from 'react'
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
        setLoading(true)
        setErrorMsg('')

        getProducts()
            .then((data) => {
                if (categoryId) {
                    const filteredProducts = data.filter((p) => p.category === categoryId)
                    setProducts(filteredProducts)
                } else {
                    setProducts(data)
                }
            })
            .catch(() => {
                setErrorMsg('Ocurrió un error cargando productos.')
                setProducts([])
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <section className="ilc">
            <h1 className="titulo">{greeting}</h1>

            {loading && <p>Cargando productos...</p>}
            {!loading && errorMsg && <p>{errorMsg}</p>}

            {!loading && !errorMsg && categoryId && products.length === 0 && (
                <p>No hay productos para la categoría: "{categoryId}".</p>
            )}

            {!loading && !errorMsg && <ItemList products={products} />}
        </section>
    )
}

export default ItemListContainer