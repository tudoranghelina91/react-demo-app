import React from 'react';
import CartItem from './CartItem';

const CartItems = ({ items }) => {
    return (
        <div>
            <h2>Cart Items</h2>
            <ul>
                {items.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default CartItems;