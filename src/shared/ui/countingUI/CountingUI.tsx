import { BasketDish } from '@/context/BasketContext';
import styles from './CountingUI.module.css';
import ButtonUI from '../buttonUI/ButtonUI';
import { Dish } from '../menu-itemUI/MenuItemUI';

type CountingUIProps = {
    currentDish: Dish;
    basketDish: BasketDish | undefined;
    onAdd: (currentDish: Dish) => void;
    onRemove: (id: number) => void;
    className?: string;
}

export const CountingUI = ({ currentDish, basketDish, onAdd, onRemove, className=styles.counting }: CountingUIProps) => {
    return (
        <div className={className}>
            {basketDish === undefined ? (
                // Показываем только кнопку "Добавить", если блюда нет в корзине
                <ButtonUI className={styles.button} type="button" onClick={() => onAdd(currentDish)}>
                    Добавить в корзину
                </ButtonUI>
            ) : (
                // Показываем кнопки управления количеством, если блюдо в корзине
                <>
                    <ButtonUI className={styles.button} type="button" onClick={() => onRemove(currentDish.id)}>-</ButtonUI>
                    <span>{basketDish.count}</span>
                    <ButtonUI className={styles.button} type="button" onClick={() => onAdd(currentDish)}>+</ButtonUI>
                </>
            )}
        </div>
    );
};