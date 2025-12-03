import styles from './MenuItemUI.module.css';
import logoCatCloud from '../../../assets/logo/logoCatCloud.png';
import { DishType } from '@shared-types';

type MenuItemUIProps = {
  dish: DishType;
  onClick: (dish:DishType) => void;
}

export const MenuItemUI = ({ dish, onClick }: MenuItemUIProps) => {
    return (
        <div className={styles.menu_item} onClick={() => onClick(dish)}>
            <span className={styles.menu_item_title}>{dish.name}</span>
            <div className={styles.menu_image_block}>
                <img className={styles.menu_cloud} src={logoCatCloud} alt='logo' />
                <img className={styles.menu_item_img} src={dish.imageRef} alt={dish.name} />
                <span className={styles.menu_item_price}>{dish.price} рублей</span>
            </div>
        </div>
    );
};
