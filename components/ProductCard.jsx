import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow duration-300">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price.toFixed(2)} руб.</p>
      <button 
        onClick={() => addToCart(product)} 
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        Заказать
      </button>
    </div>
  );
};

export default ProductCard;
