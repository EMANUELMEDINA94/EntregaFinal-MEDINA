import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

export const getProducts = async () => {
    const productsRef = collection(db, 'productos')
    const snapshot = await getDocs(productsRef)

    const products = snapshot.docs.map((docItem) => {
        return {
            id: docItem.id,
            ...docItem.data(),
        }
    })

    const categoryOrder = {
        cafe: 1,
        accesorios: 2,
    }

    const orderedProducts = products.sort((a, b) => {
        return categoryOrder[a.category] - categoryOrder[b.category]
    })

    return orderedProducts
}

export const getProductById = async (id) => {
    const productRef = doc(db, 'productos', id)
    const snapshot = await getDoc(productRef)

    if (!snapshot.exists()) {
        return null
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    }
}