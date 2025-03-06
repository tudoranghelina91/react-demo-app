import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItems from './ListItems';
import CartItems from './CartItems';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));

      axios.get('http://localhost:3000/cart')
        .then(response => {
          console.log(response.data);
          setCartItems(response.data);
        })
        .catch(error => console.error('Error fetching cart items:', error));

  }, []);

  return (<>
    <ListItems products={products} />
    <CartItems items={cartItems} />
  </>);
}

export default App;
