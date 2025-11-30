import { FC } from 'react';
import styles from './BasketUI.module.css';
import { BasketDish } from '@/context/BasketContext';
import { Dish } from '../menu-itemUI/MenuItemUI';
import { BasketItemUI, ButtonUI } from '..';

type BasketUIProps = {
    dishes: BasketDish[];
    finalPrice: number;
    onAdd: (dish: Dish) => void;
    onRemove: (id: number) => void
};
export const BasketUI:FC<BasketUIProps> =({dishes, finalPrice, onAdd, onRemove}: BasketUIProps) => {

    return (
        <div className={styles.basket}>
            <h2>Корзина</h2>
            {dishes.length === 0 && <p>Ваша корзина пуста</p>}
            <ul className={styles.basket_list}>
                {dishes.map((addedDish) => (
                    <li className={styles.basket_item} key={addedDish.id}>
                        <BasketItemUI dish={addedDish} onAdd={onAdd} onRemove={onRemove} />
                    </li>
                ))}
            </ul>
            < div>
                {dishes.length > 0 &&
                <div className={styles.basket_total}>
                    <p>Сумма: {finalPrice} рублей</p>
                    <ButtonUI type='button' className={styles.button_buy}>Оформить заказ</ButtonUI>
                </div>
                }
            </div>

        </div>
    );
};
