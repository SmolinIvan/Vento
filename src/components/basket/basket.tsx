import { BasketContext } from '@context/BasketContext';
import { BasketUI } from '@ui/*';
import { useContext } from 'react';

export const Basket = () => {

    const {addedDishes, finalPrice, addDish,removeDish} = useContext(BasketContext);
    return (
        <BasketUI dishes={addedDishes} onAdd={addDish} onRemove={removeDish} finalPrice={finalPrice} />
    );
};
