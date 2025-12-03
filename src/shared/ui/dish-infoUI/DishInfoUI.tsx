import { BasketDish } from '@context/BasketContext';
import { FC } from 'react';
import styles from './DishInfoUI.module.css';
import { DishType } from '@shared-types';
import { CountingUI } from '..';

type DishInfoUIProps = {
  currentDish: DishType;
  basketDish: BasketDish | undefined;
  onAdd: (dish: DishType) => void;
  onRemove: (id: number) => void;
};

export const DishInfoUI:FC<DishInfoUIProps> = ({ currentDish, basketDish, onAdd, onRemove }) => {
    return (
        <div className={styles.dish_info}>
            {/* <img src={dish?.imageRef} alt={dish?.name} /> */}
            <h2>{currentDish.name}</h2>
            <p className={styles.dish_description}>{currentDish.description}</p>
            <div className={styles.dish_macros}>
                <span className={styles.dish_macro}>{currentDish.energy.protein} белков</span>
                <span className={styles.dish_macro}>{currentDish.energy.fat} жиров</span>
                <span className={styles.dish_macro}>{currentDish.energy.carbs} углеводов</span>
                <span className={styles.dish_macro}>{currentDish.energy.kcal} ккал</span>
            </div>
            <p className={styles.dish_price}>{currentDish.price} рублей</p>
            <div className={styles.shop_buttons}>
                <CountingUI currentDish={currentDish} basketDish={basketDish} onAdd={onAdd} onRemove={onRemove} />
            </div>
        </div>
    );
};
