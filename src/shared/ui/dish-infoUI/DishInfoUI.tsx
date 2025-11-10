import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { FC } from 'react';
import ButtonUI from '../buttonUI/ButtonUI';
import styles from './DishInfoUI.module.css';

type DishInfoUIProps = {
  dish: Dish;
  onAdd: (dish: Dish) => void;
  onRemove: (id: number) => void;
};

const DishInfoUI:FC<DishInfoUIProps> = ({ dish, onAdd, onRemove }) => {
    return (
        <div className={styles.dish_info}>
            {/* <img src={dish?.imageRef} alt={dish?.name} /> */}
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <p>{dish.price} рублей</p>
            <div className={styles.shop_buttons}>
                <ButtonUI className={styles.shop_button} onClick={() => onAdd(dish)} type='button'>Добавить в корзину</ButtonUI>
                <ButtonUI className={styles.shop_button} onClick={() => onRemove(dish.id)} type='button'>Убрать из корзины</ButtonUI>
            </div>
        </div>
    );
};

export default DishInfoUI;
