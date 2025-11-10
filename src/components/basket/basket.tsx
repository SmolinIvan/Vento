import { BasketContext } from '@/context/BasketContext';
import BasketItemUI from '@/shared/ui/basket-itemUI.tsx/BasketItemUI';
import { useContext } from 'react';


const Basket = () => {

    const {addedDishes, removeDish} = useContext(BasketContext);

    return (
        <div>
            <h2>Basket</h2>
            <ul>
                {addedDishes.map((addedDish) => (
                    <li key={addedDish.id}>
                        <BasketItemUI dish={addedDish} onRemove={removeDish} />
                    </li>
                ))}
            </ul>

        </div>
    );
};


export default Basket;
