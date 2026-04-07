import { ButtonUI } from '@ui';
import styles from './CountingUI.module.css';
import { BasketDishType, DishType } from '@shared-types';

type CountingUIProps = {
    currentDish: DishType;
    basketDish: BasketDishType | undefined;
    onAdd: (currentDish: DishType) => void;
    onRemove: (id: number) => void;
    className?: string;
}

export const CountingUI = ({ currentDish, basketDish, onAdd, onRemove, className=styles.counting }: CountingUIProps) => {
    return (
        <div className={className}>
            {basketDish === undefined ? (
                // Показываем только кнопку "Добавить", если блюда нет в корзине
                <ButtonUI className={styles.button} type="button" onClick={() => onAdd(currentDish)}>
                    Добавить
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
