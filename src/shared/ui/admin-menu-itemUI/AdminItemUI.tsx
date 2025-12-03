import React, { FC } from 'react';
import { ButtonUI } from '@ui';
import styles from './AdminItemUI.module.css';
import { DishType } from '@shared-types';

type AdminItemUIProps = {
    dish:DishType;
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
