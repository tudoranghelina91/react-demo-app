import React from 'react';
import axios from 'axios';

const addToCart = async (productId) => {
    try {
        await axios.post('http://localhost:3000/cart', { productId });
    } catch (error) {
        // Handle error appropriately
        console.error('Error adding product to cart:', error);
    }
};

const ListItem = ({ product, onAddedToCart }) => {
    return (
        product && <div className="list-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => {
                addToCart(product.id);
                onAddedToCart(product);
            }}>Add to Cart</button>
        </div>
    );
};

export default ListItem;
