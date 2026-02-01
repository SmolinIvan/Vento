import { CreateForm, DeleteForm } from '@components';
import React, { useContext } from 'react';
import styles from './AdminPage.module.css';
import  { newDish } from '@shared-types';
import { postDish , deleteDish } from '@API';
import { MenuContext } from '@context/*';
import { DishesTableUI } from '@ui';

export const AdminPage: React.FC = () => {

    const {dishes} = useContext(MenuContext);

    const handleCreateSubmit = (data: newDish) => {
        postDish(data).catch(error => {
            console.error('Ошибка при отправке данных:', error);
        });
    };

    const handleDeleteSubmit = (id: number) => {
        deleteDish(id).catch(error => {
            console.error('Ошибка при удалении данных:', error);
        });
    };

    return (
        <div>
            <h1 className={styles.title}>Админка</h1>
            <div className={styles.forms_block}>
                <CreateForm onSubmit={handleCreateSubmit}/>
                <DeleteForm onSubmit={handleDeleteSubmit} />
            </div>
            <div className={styles.table_block}>
                <DishesTableUI dishes={dishes} />
            </div>
        </div>
    );
};
