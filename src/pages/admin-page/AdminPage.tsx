import { CreateForm, DeleteForm } from '@components';
import React, { useContext, useEffect } from 'react';
import styles from './AdminPage.module.css';
import  { newDish } from '@shared-types';
import { postDish , deleteDish, loginUserAPI, registerUserAPI, getCurrentUserAPI } from '@API';
import { MenuContext, UserContext } from '@context/*';
import { ButtonUI, DishesTableUI } from '@ui';
import { saveAuthToken } from '@helpers';

export const AdminPage: React.FC = () => {

    const { setUser , authToken, setAuthToken, isAuthenticated, setAuthenticated } = useContext(UserContext);
    const {dishes} = useContext(MenuContext);

    useEffect(() => {

        if (authToken) {
            getCurrentUserAPI(authToken)
                .then(data => {
                    setUser(data);
                    setAuthenticated(true);
                })
                .catch(error => {
                    console.error('Ошибка при получении данных:', error);
                    setAuthToken(null);
                    setAuthenticated(false);
                });
        }
    }, [authToken, isAuthenticated]);

    const handleCreateSubmit = (data: newDish) => {
        if (authToken) {
            postDish(data, authToken).catch(error => {
                console.error('Ошибка при отправке данных:', error);
            });
        } else { console.log('Нет токена');};

    };

    const handleDeleteSubmit = (id: number) => {
        if ( authToken ) {
            deleteDish(id, authToken).catch(error => {
                console.error('Ошибка при удалении данных:', error);
            });
        } else { console.log('Нет токена');};
    };

    const handleAuthSubmit = () => {
        console.log('Авторизация');
        loginUserAPI({email: 'admin@coffee', password: 'admin123'})
            .then(data => {
                saveAuthToken(data.token);
                setAuthToken(data.token);
                setAuthenticated(true);
            })
            .catch(error => {console.error('Ошибка при авторизации:', error);
            });
    };

    // const handleRegiesterSubmit = () => {
    //     console.log('Авторизация');
    //     registerUserAPI({username: 'mainAdmin', email: 'admin@coffee', password: 'admin123'}).catch(error => {
    //         console.error('Ошибка при авторизации:', error);
    //     });
    // };

    if (!isAuthenticated) return (
        <div className={styles.forms_block}>
            <ButtonUI onClick={handleAuthSubmit} type='button'>Авторизоваться</ButtonUI>
            {/* <ButtonUI onClick={handleRegiesterSubmit} type='button'>Зарегистрироваться</ButtonUI> */}
        </div>
    );

    return (
        <div>

            <div className={styles.forms_block}>
                <CreateForm onSubmit={handleCreateSubmit}/>
                <DeleteForm onSubmit={handleDeleteSubmit} />
                <ButtonUI onClick={handleAuthSubmit} type='button'>Авторизоваться</ButtonUI>
                {/* <ButtonUI onClick={handleRegiesterSubmit} type='button'>Зарегистрироваться</ButtonUI> */}
            </div>
            <div className={styles.table_block}>
                <DishesTableUI dishes={dishes} />
            </div>
        </div>
    );
};
