import HeaderMenu from '@/components/header-menu/HeaderMenu';
import { BasketContext } from '@/context/BasketContext';
import { BasketUI } from '@/shared/ui';
import React, { useContext } from 'react';

export const BasketPage =()=>{

    const {addedDishes, finalPrice, addDish,removeDish} = useContext(BasketContext);

    return(
        <div>
            <HeaderMenu/>
            <BasketUI dishes={addedDishes} onAdd={addDish} onRemove={removeDish} finalPrice={finalPrice} />
        </div>

    );
};
