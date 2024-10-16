import React, { useState, useEffect } from 'react';
import ProductCategory from '../components/ProductCategory';
import CartDrawer from '../components/CartDrawer';
import FilterBar from '../components/FilterBar';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const closeCart = () => setCartOpen(false);

  // Получаем уникальные категории из продуктов
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <button 
          onClick={() => setCartOpen(true)} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Open Cart ({cartItems.length})
        </button>
      </div>
      
      {/* Синяя линия */}
      <div className="header-line mb-4"></div>

      <FilterBar 
        categories={categories} 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Разделение товаров по категориям */}
      {categories.map(category => (
  <ProductCategory 
    key={category} 
    title={category === 'boys' ? 'Одежда для мальчиков' : 'Одежда для девочек'} 
    products={products.filter(product => product.category === category)} 
    addToCart={addToCart} 
  />
))}


      <CartDrawer 
        isOpen={isCartOpen} 
        closeCart={closeCart} 
        cartItems={cartItems} 
      />
    </div>
  );
};

export default HomePage;
