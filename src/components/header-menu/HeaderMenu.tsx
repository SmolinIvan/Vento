
import styles from './HeaderMenu.module.css';
import { Basket } from '../basket';
import { useLocation } from 'react-router-dom';
import { ButtonUI } from '@/shared/ui';
import { PopUp } from '..';

const HeaderMenu = () => {

    const location = useLocation();

    const getMenuButtonProps = () => {
        if (location.pathname === '/main') {
            return { text: 'Лендинг', to: '/' };
        } else {
            return { text: 'Меню', to: '/main' };
        }
    };

    const { text, to } = getMenuButtonProps();

    return (
        <div className={styles.container}>
            <ButtonUI type="link" to={to} className={styles.button}>
                <span className={styles.text}>{text}</span>
            </ButtonUI>
            <PopUp buttonClassName={styles.button} buttonText='Корзина' >
                <Basket />
            </PopUp>
        </div>
    );
};

export default HeaderMenu;
