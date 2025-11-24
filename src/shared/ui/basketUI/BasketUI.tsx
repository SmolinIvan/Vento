import { FC } from 'react';
import ButtonUI from '../buttonUI/ButtonUI';
import BasketItemUI from '../basket-itemUI/BasketItemUI';
import styles from './BasketUI.module.css';
import { BasketDish } from '@/context/BasketContext';
import { Dish } from '../menu-itemUI/MenuItemUI';

type BasketUIProps = {
    dishes: BasketDish[];
    onAdd: (dish: Dish) => void;
    onRemove: (id: number) => void
};
const BasketUI:FC<BasketUIProps> =({dishes, onAdd, onRemove}: BasketUIProps) => {

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
            < div className="basket-total">
                {dishes.length > 0 &&
                <div>
                    <p>Сумма: {dishes.reduce((total, dish) => total + dish.price, 0)} рублей</p>
                    <ButtonUI type='button' className={styles.button}>Оформить заказ</ButtonUI>
                </div>
                }
            </div>

        </div>
    );
};


export default BasketUI;
