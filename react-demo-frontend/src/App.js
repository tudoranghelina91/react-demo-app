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
          setCartItems(response.data);
        })
        .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const onAddedToCartHandler = (product) => {
      setCartItems([...cartItems, product]);
  }

  const onItemRemovedHandler = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  }

  return (<>
    <ListItems products={products} onAddedToCart={onAddedToCartHandler} />
    <CartItems items={cartItems} onItemRemoved={onItemRemovedHandler}/>
  </>);
}

export default App;
