import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div className="container py-3">
            <div className="row g-3">
                {products.map((product) => (
                    <div className="col-12 col-sm-6 col-md-4" key={product.id}>
                        <Item product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList