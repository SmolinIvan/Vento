// components/DishTable.tsx
import React, { FC } from 'react';
import styles from './DishesTableUI.module.css';
import { DishType } from '@shared-types';

interface DishesTablePropsUI {
    dishes: DishType[];
}

export const DishesTableUI: FC<DishesTablePropsUI> = ({dishes}) => {

    if (dishes.length === 0) {
        return (
            <div className={styles.emptystate}>
                <p>Нет блюд для отображения</p>
            </div>
        );
    }

    return (
        <div className={styles.dish_table_container}>
            <table className={styles.dish_table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Категория</th>
                        <th>Описание</th>
                        <th>Калории</th>
                        <th>Б/Ж/У</th>
                        <th>Цена</th>
                        <th>Статус</th>
                        <th>Изображение</th>
                    </tr>
                </thead>
                <tbody>
                    {dishes.map((dish) => (
                        <DishesTableRow key={dish.id} dish={dish} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

interface DishesTableRowProps {
  dish: DishType;
}

const DishesTableRow: React.FC<DishesTableRowProps> = ({ dish }) => {
    return (
        <tr className={!dish.available ? 'unavailable' : ''}>
            <td className={styles.name_cell}>
                <strong>{dish.id}</strong>
            </td>
            <td className={styles.name_cell}>
                <strong>{dish.name}</strong>
            </td>
            <td>{dish.type}</td>
            <td className={styles.description_cell}>
                <span title={dish.description}>
                    {dish.description.length > 50
                        ? `${dish.description.substring(0, 50)}...`
                        : dish.description}
                </span>
            </td>
            <td className={styles.energy_cell}>
                {dish.energy.kcal} ккал
            </td>
            <td className={styles.macros_cell}>
                {dish.energy.protein}г / {dish.energy.fat}г / {dish.energy.carbs}г
            </td>
            <td className={styles.price_cell}>
                {dish.price} ₽
            </td>
            <td className={styles.status_cell}>
                <span className={`status-badge ${dish.available ? 'available' : 'unavailable'}`}>
                    {dish.available ? 'Доступно' : 'Недоступно'}
                </span>
            </td>
            <td className={styles.image_cell}>
                {/* <img
                    src={dish.imageRef}
                    alt={dish.name}
                    className="dish-image"
                    onError={(e) => {
                        e.currentTarget.src = '/placeholder-dish.png';
                    }}
                /> */}
                <span title={dish.imageRef}>
                    {dish.imageRef.length > 50
                        ? `${dish.imageRef.substring(0, 25)}...`
                        : dish.imageRef}
                </span>
            </td>
        </tr>
    );
};
