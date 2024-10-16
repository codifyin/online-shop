import React from 'react';
import ProductCard from './ProductCard';

const ProductCategory = ({ title, products, addToCart }) => {
  const categoryId = `category-${title.toLowerCase()}`; // Форматирование ID

  return (
    <div id={categoryId} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
