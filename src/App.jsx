import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje='Bienvenidos a Tempo Coffee'/>
    </>
  )
}

export default App
