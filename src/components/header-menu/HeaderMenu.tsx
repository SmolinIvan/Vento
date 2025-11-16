import ButtonUI from '@/shared/ui/buttonUI/ButtonUI';
import styles from './HeaderMenu.module.css';
import { FC } from 'react';

type BasketProps = {
    onOpenBasket: () => void;
};
const HeaderMenu: FC<BasketProps> = ({onOpenBasket}: BasketProps) => {
    return (
        <div className={styles.container}>
            <ButtonUI type="link" to="/main" className={styles.button}>
                <span className={styles.text}>Меню</span>
            </ButtonUI>
            <ButtonUI type="button" className={styles.button} onClick={onOpenBasket}>
                <span className={styles.text}>Корзина</span>
            </ButtonUI>
        </div>
    );
};

export default HeaderMenu;
