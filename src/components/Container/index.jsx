import Search from '../Search';
import styles from './Container.module.css';
import useFetch from '../../hooks/useFetch';
import clsx from 'clsx';
import Loader from '../Loader';

const Container = () => {
  const {data, error, loading} = useFetch(`${process.env.REACT_APP_USERS_URL}`);

  if (!data) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.textCenter}>Users list</h1>

      {!loading && (
        <Search
          searchData={data}
          placeholder='Search by user name...'
          classes={clsx({[styles.error]: error})}
        />
      )}

      {loading && <Loader />}

      {error && <pre>{error}</pre>}
    </div>
  );
};

export default Container;
