import { Dish } from '@/ui/menu-itemUI/MenuItemUI';
import styles from './BasketItemUI.module.css';

type BasketItemUIProps = {
  dish: Dish;
  onRemove: (id: number) => void;
}

const BasketItemUI = ({ dish, onRemove }: BasketItemUIProps) => {
    return (
        <div className={styles.basket_item_info}>
            <p>{dish.name}</p>
            <p>{dish.price}</p>
            <button onClick={() => onRemove(dish.id)}>Убрать из корзины</button>
        </div>
    );
};

export default BasketItemUI;
