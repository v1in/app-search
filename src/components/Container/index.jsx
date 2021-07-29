import Search from '../Search';
import styles from './Container.module.css';
import useFetch from '../../hooks/useFetch';
import clsx from 'clsx';

const Container = () => {
  const {data, error} = useFetch('https://jsonplaceholder.typicode.com/users');

  if (!data) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.textCenter}>Users list</h1>

      <Search
        searchData={data}
        placeholder='Search by user name...'
        classes={clsx({[styles.error]: error})}
      />

      {error && <pre>{error}</pre>}
    </div>
  );
};

export default Container;
