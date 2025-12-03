import { MenuContext } from '@context/MenuContext';
import { useContext } from 'react';
import styles from './MenuList.module.css';
import { DishType } from '@shared-types';
import { MenuItemUI } from '@ui/*';

type MenuListProps = {
    onClick: (dish: DishType) => void;

};
export const MenuList = ({onClick}: MenuListProps) => {

    const {filteredDishes} = useContext(MenuContext);

    return (
        <div className={styles.menu_list}>
            {filteredDishes.map((filteredDish) => (
                <MenuItemUI dish={filteredDish} onClick={() => onClick(filteredDish)} />
            ))}
        </div>
    );
};
