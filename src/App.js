import './App.css';
import './components/itemCount.css';
import Navbar from './components/navBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  
  return ( 
    <div className="App">
      <Navbar />
      <ItemListContainer titulo='Landing Page' />
      <ItemCount />
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