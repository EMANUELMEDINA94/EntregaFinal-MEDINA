import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <section style={{ padding: 16 }}>
            <h1>404</h1>
            <p>La ruta no existe o está mal escrita.</p>
            <Link to="/">Volver al inicio</Link>
        </section>
    )
}

export default NotFound