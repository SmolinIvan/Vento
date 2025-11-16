import { BasketContext } from '@/context/BasketContext';
import { useContext } from 'react';
import BasketUI from '@/shared/ui/basketUI/BasketUI';

const Basket = () => {

    const {addedDishes, removeDish} = useContext(BasketContext);
    return (
        <BasketUI dishes={addedDishes} onRemove={removeDish} />
    );
};

export default Basket;
