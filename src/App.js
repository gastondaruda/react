import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar/navBar.jsx';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContianer from './components/container/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';
import './components/itemDetail/ItemDetail';
import './components/Navbar/scroll';
import Api from './components/Api/Api';
import './components/item/itemCard.css';
import './components/itemCount/itemCount.css';
import './components/font.css'


function App() {
  
  return ( 
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer titulo='Soy itemListContainer' />}/>

        <Route path="/categoria/:id" element={<ItemListContainer />}/>
        
        <Route path="/detalle/:Id" element={<ItemDetailContianer />} />

        <Route path="/carrito" element={<Carrito/> }  />
        <Route path="/api" element={<Api />} />

        <Route path="/*" element={<Navigate to="/" />} />

        
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Gasty
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/