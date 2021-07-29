import Item from '../Item';
import styles from './Item.module.css';

const SearchView = ({sortedItems}) => {
  const sortedList = sortedItems.map((user) => (
    <Item key={user.id} data={user} />
  ));

  return (
    <div className={styles.wrap}>
      {sortedList.length > 0 ? <ul>{sortedList}</ul> : <small>No result</small>}
    </div>
  );
};

export default SearchView;
