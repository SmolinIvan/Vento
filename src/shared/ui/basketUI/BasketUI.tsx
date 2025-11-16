import { FC } from 'react';
import ButtonUI from '../buttonUI/ButtonUI';
import BasketItemUI from '../basket-itemUI.tsx/BasketItemUI';
import styles from './BasketUI.module.css';
import { BasketDish } from '@/context/BasketContext';

type BasketUIProps = {
    dishes: BasketDish[];
    onRemove: (id: number) => void
};
const BasketUI:FC<BasketUIProps> =({dishes, onRemove}: BasketUIProps) => {

    return (
        <div className={styles.basket}>
            <h2>Корзина</h2>
            {dishes.length === 0 && <p>Ваша корзина пуста</p>}
            <ul>
                {dishes.map((addedDish) => (
                    <li key={addedDish.id}>
                        <BasketItemUI dish={addedDish} onRemove={onRemove} />
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
