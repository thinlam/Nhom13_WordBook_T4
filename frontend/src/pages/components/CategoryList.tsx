// src/components/CategoryList.tsx
import React from 'react';

const CategoryList = () => {
  const categories = [
    { id: 1, name: 'Danh mục 1' },
    { id: 2, name: 'Danh mục 2' },
    { id: 3, name: 'Danh mục 3' }
  ];

  return (
    <div className="category-list">
      <h2>Danh Mục</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;