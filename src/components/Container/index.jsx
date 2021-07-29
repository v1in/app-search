import Search from '../Search';
import styles from './Container.module.css';
import data from '../../data/users';

const Container = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.textCenter}>Users list</h1>

      <Search searchData={data} placeholder='Search by user name...' />
    </div>
  );
};

export default Container;
