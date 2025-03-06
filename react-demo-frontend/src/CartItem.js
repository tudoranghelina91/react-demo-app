import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div>
            <img src={item.image} alt={item.name} />
            <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
            </div>
        </div>
    );
};

export default CartItem;