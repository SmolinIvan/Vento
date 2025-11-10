import { BasketContext } from '@/context/BasketContext';

import DishInfoUI from '@/shared/ui/dish-infoUI/DishInfoUI';
import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { useContext } from 'react';

type DissInfoProps = {
  dish: Dish;
};

const DishInfo = ({ dish }: DissInfoProps) => {
    const {addDish, removeDish} = useContext(BasketContext);

    return (
        <DishInfoUI dish={dish} onAdd={addDish} onRemove={removeDish}/>
    );
};

export default DishInfo;
