import { MenuContext } from '@context/MenuContext';
import { useContext } from 'react';
import styles from './MenuList.module.css';
import { DishType } from '@shared-types';
// import { MenuItemUI } from '@ui';
import { MenuItem } from '../menu-item';

type MenuListProps = {
    onClick: (dish: DishType) => void;

};
export const MenuList = ({onClick}: MenuListProps) => {

    const {filteredDishes} = useContext(MenuContext);

    return (
        <div className={styles.menu_list}>
            {filteredDishes.map((filteredDish) => (
                <MenuItem dish={filteredDish} onClick={() => onClick(filteredDish)} />
            ))}
        </div>
    );
};
