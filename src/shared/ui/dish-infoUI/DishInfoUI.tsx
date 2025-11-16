import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { FC } from 'react';
import styles from './DishInfoUI.module.css';
import { CountingUI } from '../countingUI/CountingUI';
import { BasketDish } from '@/context/BasketContext';

type DishInfoUIProps = {
  currentDish: Dish;
  basketDish: BasketDish | undefined;
  onAdd: (dish: Dish) => void;
  onRemove: (id: number) => void;
};

const DishInfoUI:FC<DishInfoUIProps> = ({ currentDish, basketDish, onAdd, onRemove }) => {
    return (
        <div className={styles.dish_info}>
            {/* <img src={dish?.imageRef} alt={dish?.name} /> */}
            <h2>{currentDish.name}</h2>
            <p>{currentDish.description}</p>
            <p>{currentDish.price} рублей</p>
            <div className={styles.shop_buttons}>
                <CountingUI currentDish={currentDish} basketDish={basketDish} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    );
};

export default DishInfoUI;
