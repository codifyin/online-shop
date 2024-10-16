import React from 'react';

const FilterBar = ({ categories, selectedCategory, setSelectedCategory }) => {
  const handleChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    
    // Перемещение к нужной категории
    if (category) {
      const categoryId = `category-${category}`;
      const categoryElement = document.getElementById(categoryId);
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  

  return (
    <div className="mb-4">
      <select 
        value={selectedCategory} 
        onChange={handleChange} 
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Все категории</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
