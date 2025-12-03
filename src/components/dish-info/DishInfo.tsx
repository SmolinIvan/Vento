import { BasketContext } from '@context/BasketContext';
import { DishType } from '@shared-types';
import { DishInfoUI } from '@ui/*';
import { useContext } from 'react';

type DishInfoProps = {
  currentDish: DishType;
};

export const DishInfo = ({ currentDish }: DishInfoProps) => {
    const {addDish, removeDish} = useContext(BasketContext);
    const {addedDishes} = useContext(BasketContext);
    const addedDish = addedDishes.find((dish) => dish.id === currentDish.id);

    return (
        <DishInfoUI currentDish={currentDish} basketDish={addedDish} onAdd={addDish} onRemove={removeDish}/>
    );
};

