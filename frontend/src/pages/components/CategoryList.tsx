// src/components/CategoryList.tsx
import React from 'react';

const CategoryList = () => {
  const categories = [
    { id: 1, name: 'Thu nhập' },
    { id: 2, name: 'Chi phí ăn uống' },
    { id: 3, name: 'Chi phí nhà ở' },
    { id: 4, name: 'Chi phí đi lại' }
  ];

  return (
    <div className="category-list">
      <h2>Danh Mục Chi Tiêu Cá Nhân</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;