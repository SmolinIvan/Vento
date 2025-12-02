import styles from './DishFilter.module.css';
import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { MenuContext } from '@/context/MenuContext';
import { useContext } from 'react';
import { ButtonUI } from '@/shared/ui';
import { translateFoodType } from '@/shared/helpers/translateDishType';
type DishFilterProps = {
  onClick: (dishType:string) => void;
  activeFilter: string;
}

export const DishFilter = ({ onClick, activeFilter }: DishFilterProps) => {

    const {dishes} = useContext(MenuContext);

    const dishFilterTypes:string[] = dishes.reduce((acc:string[], dish:Dish) => {
        if (!acc.includes(dish.type)) {
            acc.push(dish.type);
        }
        return acc;
    }, ['Все блюда']);

  	return (
    	<div className={styles.dish_filter}>
            <ul className={styles.list}>
                {dishFilterTypes.map((dishFilterType,i) => (
                    <li key={i} className={activeFilter === dishFilterType ? `${styles.list_item} ${styles.list_item_active}` : styles.list_item}>
                        <ButtonUI type='button' onClick={() => onClick(dishFilterType)} className={styles.filter_button}>
				        {translateFoodType(dishFilterType)}
				        </ButtonUI>
                    </li>
                ))}
            </ul>
        </div>
    );
};
