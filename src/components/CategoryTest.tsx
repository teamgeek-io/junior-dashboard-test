import React from 'react';
import CategorySelector from './CategorySelector';
import jsonData from '../data.json';

const CatTest: React.FC = () => {
  const categoryID = jsonData.categories.map(item => item.id);
  const categoryName = jsonData.categories.map(item => item.name);

  const handleCategorySelect = (selectedCategory: string) => {
    console.log(`Selected category: ${selectedCategory}`);
    //logic for handling the selected category
};
console.log("Cat: ",jsonData.categories);
console.log("Cat: ",categoryID);
console.log("Cat: ",categoryName);
  return (
    <div>
      <h1>Category Selector Example</h1>
      <CategorySelector categories={categoryName} onSelect={handleCategorySelect} />
    </div>
  );
};

export default CatTest;
