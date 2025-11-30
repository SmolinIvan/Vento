import React, { FC } from 'react';
import { Dish } from '../menu-itemUI/MenuItemUI';
import { ButtonUI } from '../buttonUI';
import styles from './AdminItemUI.module.css';

type AdminItemUIProps = {
    dish:Dish;
    onClick: () => void;

}

export const AdminItemUI:FC<AdminItemUIProps> = ({dish, onClick}:AdminItemUIProps) => {
    return (
        <div className={styles.admin_item}>
            <span>{dish.id}</span>
            <span>{dish.name}</span>
            <span>{dish.price}</span>
            <ButtonUI type="button" onClick={onClick}/>
        </div>
    );
};
