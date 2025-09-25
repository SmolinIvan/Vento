import ButtonUI from '@/shared/ui/buttonUI/buttonUI';
import styles from './header-menu.module.css';
const HeaderMenu: React.FC = () => {
    return (
        <div className={styles.container}>
            <ButtonUI type="link" to="/" className={styles.button}>
                <span className={styles.text}>Меню</span>
            </ButtonUI>
            <ButtonUI type="link" to="/" className={styles.button}>
                <span className={styles.text}>Корзина</span>
            </ButtonUI>
        </div>
    );
};

export default HeaderMenu;
