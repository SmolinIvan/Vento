import { useContext } from 'react';
import { MenuContext } from '@context/MenuContext';
import styles from './DishFilter.module.css';
import { DishType } from '@shared-types';
import { ButtonUI } from '@ui';
import { translateDishCategory } from '@helpers';

type DishFilterProps = {
  onClick: (dishType:string) => void;
  activeFilter: string;
}

export const DishFilter = ({ onClick, activeFilter }: DishFilterProps) => {

    const {dishes} = useContext(MenuContext);

    const dishFilterTypes:string[] = dishes.reduce((acc:string[], dish:DishType) => {
        if (!acc.includes(dish.type)) {
            acc.push(dish.type);
        }
        return acc;
    }, ['all']);

  	return (
    	<div className={styles.dish_filter}>
            <ul className={styles.list}>
                {dishFilterTypes.map((dishFilterType,i) => (
                    <li key={i} className={activeFilter === dishFilterType ? `${styles.list_item} ${styles.list_item_active}` : styles.list_item}>
                        <ButtonUI type='button' onClick={() => onClick(dishFilterType)} className={styles.filter_button}>
				        {translateDishCategory(dishFilterType)}
				        </ButtonUI>
                    </li>
                ))}
            </ul>
        </div>
    );
};
