import MenuItemUI, { Dish } from '@/ui/menuItemUI/menu-itemUI';
import styles from './menu-list.module.css';

type MenuListProps = {
    dishes: Dish[]
    onClick: (dish: Dish) => void;

};
const MenuList = ({dishes, onClick}: MenuListProps) => {
    return (
        <div className={styles.menu_list}>
            {dishes.map((dish) => (
                <MenuItemUI dish={dish} onClick={() => onClick(dish)} />
            ))}
        </div>
    );
};

export default MenuList;
