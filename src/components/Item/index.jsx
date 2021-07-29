import styles from './Item.module.css';

const Item = ({data}) => (
  <li className={styles.item}>
    <strong>{data.name}</strong>
    <span>@{data.username}</span>
  </li>
);

export default Item;
