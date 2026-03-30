import './App.css'
import Navbar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'
import ContadorContainer from './ejemplos/ContadorContainer.jsx'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter,Routes, Route } from 'react-router'
import { CartProvider } from './Context/CartContext.jsx'


function App() {

  const bienvenido = () => {
    alert("Hola en que podemos ayudarlo" );
  }


  return (
    
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer bienvenida={"Bienvenidos a la inmobiliaria!"} despedida={"Gracias por su visita!"} bienvenido={bienvenido}/>} />
          <Route path='/category/:category' element={<ItemListContainer bienvenida={"Bienvenidos a la inmobiliaria!"} despedida={"Gracias por su visita!"} bienvenido={bienvenido}/>} />
          <Route path= '/detail/:productid' element={<ItemDetailContainer/>} />

          <Route path='*' element = {<div>404 Not Found</div>}/>
        </Routes>

      </CartProvider>    
    </BrowserRouter>
    
  )
}

export default App
