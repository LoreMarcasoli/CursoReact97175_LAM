import './App.css'
import Navbar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import ContadorContainer from './ejemplos/ContadorContainer.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter,Routes, Route } from 'react-router'


function App() {

  const bienvenido = () => {
    alert("Hola en que podemos ayudarlo" );
  }


  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer bienvenida={"Bienvenidos a la inmobiliaria!"} despedida={"Gracias por su visita!"} bienvenido={bienvenido}/>} />
        <Route path='/category/:id' element={<ItemListContainer bienvenida={"Bienvenidos a la inmobiliaria!"} despedida={"Gracias por su visita!"} bienvenido={bienvenido}/>} />

      </Routes>

      
    </BrowserRouter>

  )
}

export default App
