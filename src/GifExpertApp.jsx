import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// const apikey = '8XwIBrvDu4zDNfPjiCBYytXnjTq7EtFk';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Kimetsu no Yaiba']);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);

    // if (categories.includes(newCategory)) return;
    const cats = categories.some((category) => {
      return category.toLowerCase() === newCategory.toLowerCase();
    });
    if (!cats) setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
