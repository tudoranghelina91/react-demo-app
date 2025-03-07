import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ products, onAddedToCart }) => {
    return (
        products && 
        <ul>
            {products.map(product => <ListItem key={product.id} product={product} onAddedToCart={onAddedToCart} />)}
        </ul>
    );
};

export default ListItems;