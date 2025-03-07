import React from 'react';

const CartItem = ({ item, onItemRemoved }) => {
    return (
        <div>
            <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button onClick={() => onItemRemoved(item.id)}>X</button>
            </div>
        </div>
    );
};

export default CartItem;