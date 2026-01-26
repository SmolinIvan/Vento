
import styles from './HeaderMenu.module.css';
import { useLocation } from 'react-router-dom';
import { Basket, BasketPopUp } from '@components';
import logoVento from '../../assets/logo/logo.png';

export const HeaderMenu = () => {

    const location = useLocation();

    const getMenuButtonProps = () => {
        if (location.pathname === '/main') {
            return { text: 'Menu' };
        } else if (location.pathname === '/about') {
            return { text: 'About us' };
        } else if (location.pathname === '/contacts') {
            return { text: 'Contacts' };
        } else {
            return { text: '' };
        }
    };

    const { text } = getMenuButtonProps();

    return (
        <div className={styles.container}>
            <img src={logoVento} alt="Vento" className={styles.logo_text} />
            <h1 className={styles.title}>{text}</h1>
            <div className={styles.basket}>
                {location.pathname === '/main' && (
                    <BasketPopUp className={styles.basket_popup}>
                        <Basket />
                    </BasketPopUp>
                )}
            </div>

        </div>
    );
};
