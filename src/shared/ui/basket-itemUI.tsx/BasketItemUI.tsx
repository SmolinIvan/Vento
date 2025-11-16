import styles from './BasketItemUI.module.css';
import { BasketDish } from '@/context/BasketContext';

type BasketItemUIProps = {
  dish: BasketDish;
  onRemove: (id: number) => void;
}

const BasketItemUI = ({ dish, onRemove }: BasketItemUIProps) => {
    return (
        <div className={styles.basket_item_info}>
            <p>{dish.name}</p>
            <p>{dish.price}</p>
            <button onClick={() => onRemove(dish.id)}>Убрать из корзины</button>
            <p>{dish.count}</p>
        </div>
    );
};

export default BasketItemUI;
