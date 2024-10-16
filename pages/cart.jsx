import React from 'react';

const CartPage = ({ cartItems, closeCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x {item.price.toFixed(2)} руб.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
