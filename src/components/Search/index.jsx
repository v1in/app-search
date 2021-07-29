import {useState} from 'react';
import SearchView from '../SearchView';
import styles from './Search.module.css';

const Search = ({searchData, placeholder}) => {
  const [data, setData] = useState('');
  const [showResult, setShowResult] = useState(false);

  const sortedUsers = searchData.filter((user) => {
    return user.name.toLowerCase().includes(data.toLowerCase());
  });

  const handleChange = (e) => {
    setData(e.target.value);

    if (e.target.value === '') {
      setShowResult(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={styles.root}>
      <input type='search' placeholder={placeholder} onChange={handleChange} />

      {showResult && <SearchView sortedItems={sortedUsers} />}
    </div>
  );
};

export default Search;
