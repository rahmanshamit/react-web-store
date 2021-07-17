import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Layout/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';



function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHanlder = () => {
    setShowCart(true);
  };

  const hideCartHanlder = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={hideCartHanlder} />}
      <Header onShowCart={showCartHanlder} />
      <Products />
    </CartProvider>
  );
}

export default App;
