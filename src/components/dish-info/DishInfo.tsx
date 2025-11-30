import { BasketContext } from '@/context/BasketContext';
import { DishInfoUI } from '@/shared/ui';
import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { useContext } from 'react';

type DissInfoProps = {
  currentDish: Dish;
};

const DishInfo = ({ currentDish }: DissInfoProps) => {
    const {addDish, removeDish} = useContext(BasketContext);
    const {addedDishes} = useContext(BasketContext);
    const addedDish = addedDishes.find((dish) => dish.id === currentDish.id);

    return (
        <DishInfoUI currentDish={currentDish} basketDish={addedDish} onAdd={addDish} onRemove={removeDish}/>
    );
};

export default DishInfo;
