import styles from './Search.module.css';

const SearchInput = () => {
  return (
    <div className={styles.root}>
      <input type='search' placeholder='Search by user name...' />
    </div>
  );
};

export default SearchInput;
