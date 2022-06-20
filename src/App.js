import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import  CartContextProvider  from './Context/CartContext'
import Navbar from './components/Navbar/navBar.jsx';
import Navbar2 from './components/Navbar/Navbar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContianer from './components/container/ItemDetailContainer';
import ShopCart from './components/Cart/ShopCart';
import './components/itemDetail/ItemDetail';
import Payment from './components/Form/Payment';
import Footer from './components/footer/Footer';
import './components/item/itemCard.css';
import './components/font.css'



function App() {
  
  return ( 
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          
          <Navbar2 />
            <Routes>
              <Route path="/cart" element={<ShopCart/> }  />
              <Route path="/react" element={<ItemListContainer titulo='Soy itemListContainer' />}/>
              <Route path="/category/:id" element={<ItemListContainer />}/>              
              <Route path="/detail/:id" element={<ItemDetailContianer />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/*" element={<Navigate to="/react" />} />
            </Routes>
          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}
export default App;
