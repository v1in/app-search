import {useState} from 'react';
import SearchView from '../SearchView';
import clsx from 'clsx';
import styles from './Search.module.css';

const Search = ({searchData, placeholder, classes}) => {
  const [search, setSearch] = useState('');
  const [showResult, setShowResult] = useState(false);

  const sortedUsers = searchData.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value === '') {
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={styles.root}>
      <input
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        className={clsx(styles.input, classes)}
      />
      {showResult && <SearchView sortedItems={sortedUsers} />}
    </div>
  );
};

export default Search;
