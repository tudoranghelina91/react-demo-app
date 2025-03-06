import React from 'react';
import ListItem from './ListItem';

const ListItems = ({ products }) => {
    return (
        products && 
        <ul>
            {products.map(product => <ListItem key={product.id} product={product} />)}
        </ul>
    );
};

export default ListItems;