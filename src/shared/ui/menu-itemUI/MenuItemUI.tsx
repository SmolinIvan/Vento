import styles from './MenuItemUI.module.css';
import logoCatCloud from '../../../assets/logo/logoCatCloud.png';

type DishType = 'breakfast' | 'dinner' | 'deserts' | 'soups' | 'pasta';

type DishEnergy = {
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}
export type Dish = {
  id: number;
  name: string;
  imageRef: string;
  energy: DishEnergy;
  type: DishType;
  price: number;
  description: string;
}

type MenuItemUIProps = {
  dish: Dish;
  onClick: (dish:Dish) => void;
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
