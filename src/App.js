import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar/navBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContianer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import './components/Navbar/scroll';
import Api from './components/Api';
import './components/itemCard.css';
import './components/itemCount.css';
import './components/font.css'
import './components/ItemDetail';


function App() {
  
  return ( 
    <BrowserRouter>
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer titulo='Soy itemListContainer' />}/>
        <Route path="/detalle/:Id" element={<ItemDetailContianer />} />

        <Route path="/detalle" element={<ItemDetailContianer />} />
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