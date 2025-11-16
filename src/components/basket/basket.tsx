import { BasketContext } from '@/context/BasketContext';
import { useContext } from 'react';
import BasketUI from '@/shared/ui/basketUI/BasketUI';

const Basket = () => {

    const {addedDishes, addDish,removeDish} = useContext(BasketContext);
    return (
        <BasketUI dishes={addedDishes} onAdd={addDish} onRemove={removeDish} />
    );
};

export default Basket;
