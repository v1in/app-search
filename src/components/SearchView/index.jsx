import Item from '../Item';
import styles from './Item.module.css';

const SearchView = ({sortedItems}) => {
  const sortedList = sortedItems.map((user) => (
    <Item key={user.id} data={user} />
  ));

  return (
    <div className={styles.wrap}>
      {sortedList.length > 0 ? (
        <ul className={styles.list}>{sortedList}</ul>
      ) : (
        <small>🤷‍♂️ no result :(</small>
      )}
    </div>
  );
};

export default SearchView;
