import './App.css';
import './components/itemCount.css';
import './components/itemCard.css'
import Navbar from './components/Navbar/navBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  
  return ( 
    <div className="App">
      <Navbar />
      <ItemListContainer titulo='Soy itemListContainer' />
    </div>
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