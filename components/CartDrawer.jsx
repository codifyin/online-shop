import React from 'react';

const CartDrawer = ({ isOpen, closeCart, cartItems }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end">
      <div className="bg-white w-72 p-4 shadow-lg">
        <button onClick={closeCart} className="text-lg font-bold mb-4">Close</button>
        <h2 className="text-xl font-semibold mb-2">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price.toFixed(2)} руб.</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
