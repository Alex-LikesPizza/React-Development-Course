
import './App.css';
import Cart from './compoents/Cart/Cart';
import Header from './compoents/Layout/Header'
import Products from './compoents/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const isCartVisible = useSelector(state => state.isCartVisible);

  return (
    <div>
      <Header/>
      {isCartVisible && <Cart />}
      <Cart />
      <Products/>
    </div>
  );
}

export default App;
