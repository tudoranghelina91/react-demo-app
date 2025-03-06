import React from 'react';
import axios from 'axios';

const addToCart = async (productId) => {
    try {
        console.log(productId);
        const response = await axios.post('http://localhost:3000/cart', { productId });
        console.log('Product added to cart:', response.data);
    } catch (error) {
        console.error('There was a problem with the axios operation:', error);
    }
};

const ListItem = ({ product }) => {
    return (
        product && <div className="list-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => {
                console.log(product);
                addToCart(product.id);
            }}>Add to Cart</button>
        </div>
    );
};

export default ListItem;