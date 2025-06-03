import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // const newValue = inputValue.trim();
    if (inputValue.trim().length <= 1) return; // prevee que el input tenga obligatoriamente mas de un caracter

    // setCategories((categories) => [...categories, inputValue]);

    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gif'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
