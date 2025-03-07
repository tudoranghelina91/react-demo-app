import React from 'react';
import CartItem from './CartItem';
import './CartItems.css';

const CartItems = ({ items, onItemRemoved }) => {
  const triggerFireworks = (event) => {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const container = document.createElement('div');
    container.className = 'fireworks-container';
    container.style.position = 'absolute';
    container.style.left = `${rect.left + window.scrollX}px`;
    container.style.top = `${rect.top + window.scrollY}px`;
    document.body.appendChild(container);

    const numFireworks = 5;
    const numDots = 10;
    const radius = 50;

    for (let i = 0; i < numFireworks; i++) {
      for (let j = 0; j < numDots; j++) {
        const angle = (2 * Math.PI * j) / numDots;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        container.appendChild(firework);
      }
    }

    // Remove the fireworks after the animation is complete
    setTimeout(() => {
      document.body.removeChild(container);
    }, 1000);
  };

return (
    <div>
        <h2>Cart Items</h2>
        <ul>
            {items.map((item, index) => (
                <CartItem 
                    key={index} 
                    item={item} 
                    onItemRemoved={onItemRemoved} 
                />
            ))}
        </ul>
        <button id="placeOrderBtn" onClick={triggerFireworks}>Place Order</button>
    </div>
);
};

export default CartItems;