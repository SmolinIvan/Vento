import styles from './MenuItemUI.module.css';

type DishType = 'breakfast' | 'dinner' | 'deserts' | 'soups' | 'pasta';

type DishEnergy = {
  kcal: number;
  protein: number;
  fat: number;
  carbs: number;
}
export type Dish = {
  name: string;
  imageRef: string;
  energy: DishEnergy;
  type: DishType;
}



type MenuItemUIProps = {
  dish: Dish;
  onClick: (dish:Dish) => void;
}


const MenuItemUI = ({ dish, onClick }: MenuItemUIProps) => {
    return (
        <div className={styles.menu_item} onClick={() => onClick(dish)}>
            <h3>{dish.name}</h3>
            <img className={styles.menu_item_img} src={dish.imageRef} alt={dish.name} />
            <div className={styles.menu_item_info}>
                <p>{dish.energy.kcal} калорий</p>
                <p>{dish.energy.protein} белков</p>
                <p>{dish.energy.fat} жиров</p>
                <p>{dish.energy.carbs} углеводов</p>
            </div>
        </div>
    );
};

export default MenuItemUI;
