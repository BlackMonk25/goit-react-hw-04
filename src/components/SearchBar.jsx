import { useState } from 'react';
import styles from './SearchBar.module.css'; // Переконайся, що цей шлях правильний

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={styles.headerForm}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;





