import { CountingUI } from '../countingUI/CountingUI';
import { Dish } from '../menu-itemUI/MenuItemUI';
import styles from './BasketItemUI.module.css';
import { BasketDish } from '@/context/BasketContext';

type BasketItemUIProps = {
  dish: BasketDish ;
  onAdd: (dish: Dish) => void;
  onRemove: (id: number) => void;
}

const BasketItemUI = ({ dish, onAdd, onRemove }: BasketItemUIProps) => {
    return (

        <div className={styles.basket_item_info}>
            <p>{dish.name}</p>
            <p>{dish.price}</p>
            <CountingUI currentDish={dish} basketDish={dish} onAdd={onAdd} onRemove={onRemove}/>

        </div>

    );
};

export default BasketItemUI;
