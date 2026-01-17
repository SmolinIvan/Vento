import { CountingUI } from '@ui';
import styles from './MenuItem.module.css';
import { DishType } from '@shared-types';
import { BasketContext } from '@context/*';
import { useContext } from 'react';

type MenuItemProps = {
  dish: DishType;
  onClick: (dish:DishType) => void;
}

export const MenuItem = ({ dish, onClick }: MenuItemProps) => {

    const {addDish, removeDish} = useContext(BasketContext);
    const {addedDishes} = useContext(BasketContext);
    const addedDish = addedDishes.find((addedDish) => addedDish.id === dish.id);

    return (
        <div className={styles.menu_item} onClick={() => onClick(dish)}>
            <img className={styles.menu_item_img} src={dish.imageRef} alt={dish.name} />
            <div className={styles.menu_item_description_block}>
                <span className={styles.menu_item_title}>{dish.name}</span>
                <span className={styles.menu_item_description}>{dish.description}</span>
            </div>
            <div className={styles.menu_item_buy_block}>
                <span className={styles.menu_item_price}>{dish.price} рублей</span>
                <CountingUI currentDish={dish} basketDish={addedDish} onAdd={addDish} onRemove={removeDish}/>
            </div>

        </div>
    );
};
