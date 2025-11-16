import { BasketDish } from '@/context/BasketContext';
import styles from './CountingUI.module.css';
import ButtonUI from '../buttonUI/ButtonUI';
import { Dish } from '../menu-itemUI/MenuItemUI';

type CountingUIProps = {
    currentDish: Dish;
    basketDish: BasketDish | undefined;
    onAdd: (currentDish: Dish) => void;
    onRemove: (id: number) => void;
}

export const CountingUI = ({ currentDish, basketDish, onAdd, onRemove }: CountingUIProps) => {
    return (
        <div className={styles.counting}>
            {basketDish === undefined ? (
                // Показываем только кнопку "Добавить", если блюда нет в корзине
                <ButtonUI type="button" onClick={() => onAdd(currentDish)}>
                    Добавить в корзину
                </ButtonUI>
            ) : (
                // Показываем кнопки управления количеством, если блюдо в корзине
                <>
                    <button onClick={() => onRemove(currentDish.id)}>-</button>
                    <span>{basketDish.count}</span>
                    <button onClick={() => onAdd(currentDish)}>+</button>
                </>
            )}
        </div>
    );
};