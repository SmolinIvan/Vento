import MenuItemUI, { Dish } from '@/ui/menu-itemUI/MenuItemUI';
import styles from './MenuList.module.css';

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
