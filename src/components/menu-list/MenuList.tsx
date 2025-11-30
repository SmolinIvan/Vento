import styles from './MenuList.module.css';
import { MenuContext } from '@/context/MenuContext';
import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { MenuItemUI } from '@/shared/ui';
import { useContext } from 'react';

type MenuListProps = {
    onClick: (dish: Dish) => void;

};
const MenuList = ({onClick}: MenuListProps) => {

    const {filteredDishes} = useContext(MenuContext);

    return (
        <div className={styles.menu_list}>
            {filteredDishes.map((filteredDish) => (
                <MenuItemUI dish={filteredDish} onClick={() => onClick(filteredDish)} />
            ))}
        </div>
    );
};

export default MenuList;
