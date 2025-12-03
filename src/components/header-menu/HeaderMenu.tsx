
import styles from './HeaderMenu.module.css';
import svgBurger from '../../assets/svg/burger.svg';
import { ButtonUI, BasketButtonUI } from '@ui/*';
import { useLocation } from 'react-router-dom';
import { Basket } from '../basket';
import { PopUp } from '../popUp';


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
            <PopUp buttonClassName={styles.button} buttonText='Корзина' >
                <Basket />
            </PopUp>
            <BasketButtonUI imageRefs={[svgBurger]} onClick={function (): void {
                throw new Error('Function not implemented.');
            } }/>
        </div>
    );
};
