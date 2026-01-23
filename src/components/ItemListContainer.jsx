import '../assets/css/ItemListContainer.css'

const ItemListContainer = (props)=> {
    return (
        <div>
            <h1 className='titulo'> {props.mensaje} </h1>
        </div>
    )
}

export default ItemListContainer 