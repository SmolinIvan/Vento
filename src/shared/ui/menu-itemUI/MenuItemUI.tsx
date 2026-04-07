import styles from './MenuItemUI.module.css';
import { DishType } from '@shared-types';

type MenuItemUIProps = {
  dish: DishType;
  onClick: (dish:DishType) => void;
}

export const MenuItemUI = ({ dish, onClick }: MenuItemUIProps) => {
    return (
        <div className={styles.menu_item} onClick={() => onClick(dish)}>
            <img className={styles.menu_item_img} src={dish.imageRef} alt={dish.name} />
            <div className={styles.menu_item_description_block}>
                <span className={styles.menu_item_title}>{dish.name}</span>
                <span className={styles.menu_item_description}>{dish.description}</span>
                <span className={styles.menu_item_price}>{dish.price} рублей</span>
            </div>
        </div>
    );
};
