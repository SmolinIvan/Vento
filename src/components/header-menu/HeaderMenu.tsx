import ButtonUI from '@/shared/ui/buttonUI/ButtonUI';
import styles from './HeaderMenu.module.css';
import { Basket } from '../basket';
import { PopUp } from '../popUp/PopUp';


// type BasketProps = {
//     onOpenBasket: () => void;
// };
const HeaderMenu = () => {

    return (
        <div className={styles.container}>
            <ButtonUI type="link" to="/main" className={styles.button}>
                <span className={styles.text}>Меню</span>
            </ButtonUI>
            <PopUp buttonClassName={styles.button} buttonText='Корзина' >
                <Basket />
            </PopUp>
        </div>
    );
};

export default HeaderMenu;
