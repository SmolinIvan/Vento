import ButtonUI from '@/shared/ui/buttonUI/ButtonUI';
import styles from './DishFilter.module.css';
import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { MenuContext } from '@/context/MenuContext';
import { useContext } from 'react';
type DishFilterProps = {
  onClick: (dishType:string) => void;
  activeFilter: string;
}

export const DishFilter = ({ onClick, activeFilter }: DishFilterProps) => {

    const {dishes} = useContext(MenuContext);

    const dishFilterNames:string[] = dishes.reduce((acc:string[], dish:Dish) => {
        if (!acc.includes(dish.type)) {
            acc.push(dish.type);
        }
        return acc;
    }, ['all']);

  	return (
    	<div className={styles.dish_filter}>
            <ul className={styles.list}>
                {dishFilterNames.map((dishFilterName,i) => (
                    <li key={i} className={activeFilter === dishFilterName ? `${styles.list_item} ${styles.list_item_active}` : styles.list_item}>
                        <ButtonUI type='button' onClick={() => onClick(dishFilterName)} className={styles.filter_button}>
				        {dishFilterName}
				        </ButtonUI>
                    </li>
                ))}
            </ul>
        </div>
    );
};
