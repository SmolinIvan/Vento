import { CountingUI } from '../countingUI/CountingUI';
import { Dish } from '../menu-itemUI/MenuItemUI';
import styles from './BasketItemUI.module.css';
import { BasketDish } from '@/context/BasketContext';

type BasketItemUIProps = {
  dish: BasketDish ;
  onAdd: (dish: Dish) => void;
  onRemove: (id: number) => void;
}

export const BasketItemUI = ({ dish, onAdd, onRemove }: BasketItemUIProps) => {
    return (

        <div className={styles.basket_item_info}>
            <p>{dish.name}</p>
            <p className={styles.basket_dish_price}>{dish.price}</p>
            <CountingUI className={styles.basket_counting} currentDish={dish} basketDish={dish} onAdd={onAdd} onRemove={onRemove}/>

        </div>

    );
};
