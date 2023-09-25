
import React from 'react';
import CandyForm from './components/CandyForm';
import CandyList from './components/CandyList';
import Cart from './components/Cart';
import { CandyProvider } from './components/CandyContext';
import { CartProvider } from './components/CartContext';


function App() {
  return (
    <CandyProvider>
      <CartProvider>
        <div className="App">
          <CandyForm />
          <CandyList />
          <Cart />
        </div>
      </CartProvider>
    </CandyProvider>
  );
}

export default App;
