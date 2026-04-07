import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import { ButtonUI } from '@ui';

export const Footer = () => {

    const location = useLocation();

    if (location.pathname === '/admin' || location.pathname === '/') {
        return null;
    }
    return (
        <footer className={styles.footer_main}>
            <ButtonUI type="link" to='/contacts' className={styles.footer_link}>
                Контакты
            </ButtonUI>
            <ButtonUI type="link" to='/main' className={styles.footer_link}>
                Меню
            </ButtonUI>
            <ButtonUI type="link" to='/about' className={styles.footer_link}>
                О нас
            </ButtonUI>
        </footer>
    );
};
