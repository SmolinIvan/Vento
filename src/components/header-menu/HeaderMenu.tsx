
import styles from './HeaderMenu.module.css';
import { ButtonUI} from '@ui';
import { useLocation } from 'react-router-dom';
import { Basket, BasketPopUp } from '@components';

export const HeaderMenu = () => {

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
            <BasketPopUp>
                <Basket />
            </BasketPopUp>
        </div>
    );
};
