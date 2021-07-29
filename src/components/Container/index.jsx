import SearchInput from '../Search';
import styles from './Container.module.css';

const Container = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.textCenter}>Users list</h1>

      <SearchInput />
    </div>
  );
};

export default Container;
