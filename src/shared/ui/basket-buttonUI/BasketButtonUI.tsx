import styles from './BasketButtonUI.module.css';
import basketImage from '../../../assets/images/basket.png';

type BasketButtonUIProps = {
    imageRefs: string[];
    onClick: () => void;
};

export const BasketButtonUI = ({ imageRefs, onClick }: BasketButtonUIProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <img className={styles.basket_image} src={basketImage}></img>
            {imageRefs.map((imageRef) => (
                <img className={styles.dish} src={imageRef}/>
            ))}
        </button>
    );
};
