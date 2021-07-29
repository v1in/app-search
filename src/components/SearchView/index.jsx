import Item from '../Item';
import styles from './Item.module.css';

const SearchView = ({sortedItems}) => {
  const sortedList = sortedItems.map((user) => (
    <Item key={user.id} data={user} />
  ));

  return <ul className={styles.wrap}>{sortedList}</ul>;
};

export default SearchView;
