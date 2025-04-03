// import { useState } from 'react';
// import styles from './SearchBar.module.css'; // Переконайся, що цей шлях правильний

// const SearchBar = ({ onSubmit }) => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit(inputValue);
//     setInputValue('');
//   };

//   return (
//     <header>
//       <form onSubmit={handleSubmit} className={styles.headerForm}>
//         <input
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//           value={inputValue}
//           onChange={handleInputChange}
//           className={styles.input}
//         />
//         <button type="submit" className={styles.button}>Search</button>
//       </form>
//     </header>
//   );
// };

// export default SearchBar;


import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Введіть текст для пошуку!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className={styles.input}
            placeholder="Image search..."
          />
          <button type="submit" className={styles.button}>🔍</button>
        </div>
      </form>
    </header>
  );
}

export default SearchBar;




