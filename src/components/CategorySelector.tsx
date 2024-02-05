import React, { useState, ChangeEvent } from 'react';

interface CategorySelectorProps {
  categories: string[];
  onSelect: (selectedCategory: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <div>
      <label htmlFor="category">Select a Category:</label>
      <select
        id="category"
        value={selectedCategory || ''}
        onChange={handleCategoryChange}
      >
        <option value="" disabled>Select...</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <p>Selected Category: {selectedCategory}</p>
    </div>git
  );
};

export default CategorySelector;
