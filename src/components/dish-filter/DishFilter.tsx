import ButtonUI from '@/shared/ui/ButtonUI/ButtonUI';
import styles from './DishFilter.module.css';
type DishFilterProps = {
  dishTypes: string[];
  onClick: (dishType:string) => void;
  activeFilter: string;
}

const DishFilter = ({ dishTypes, onClick, activeFilter }: DishFilterProps) => {
  return (
    <div className={styles.dish_filter}>
      <ul className={styles.list}>
        {dishTypes.map((dishType,i) => (
          <li key={i} className={activeFilter === dishType ? `${styles.list_item} ${styles.list_item_active}` : styles.list_item}>
            <ButtonUI type='button' onClick={() => onClick(dishType)} className={styles.filter_button}>
              {dishType}
            </ButtonUI>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DishFilter;
