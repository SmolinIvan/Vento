import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { createContext, FC, PropsWithChildren, useState } from 'react';

export type BasketDish = Dish &{
    count: number;
}

type BasketContextState = {
  addedDishes: BasketDish[];
  setAddedDishes: (dishes: BasketDish[]) => void;
  addDish: (dish: Dish) => void;
  removeDish: (id: number) => void;
  payOrder: (dishesID: number[]) => void;
}

const defaultContextState:BasketContextState = {
    addedDishes: [],
    setAddedDishes: () => {},
    addDish: () => {},
    removeDish: () => {},
    payOrder: () => {},
};

export const BasketContext = createContext<BasketContextState>(defaultContextState);


export const BasketProvider: FC<PropsWithChildren<object>> = ({ children }) => {
    const [addedDishes, setAddedDishes] = useState<BasketDish[]>(defaultContextState.addedDishes);
    const addDish = (dish: Dish) => {
        const firstDishIndex = addedDishes.findIndex((addedDish) => addedDish.id === dish.id);
        const safeCopy = [...addedDishes];
        if (firstDishIndex > -1) {
            safeCopy[firstDishIndex].count++;
            setAddedDishes(safeCopy);
            return;
        }
        const addedDish:BasketDish = { ...dish, count: 1 };
        setAddedDishes([...safeCopy, addedDish]);
    };

    const removeDish = (id: number) => {
        const firstDishIndex = addedDishes.findIndex((addedDish) => addedDish.id === id);
        const safeCopy = [...addedDishes];
        console.log(firstDishIndex, safeCopy);
        if (firstDishIndex > -1 && safeCopy[firstDishIndex].count > 1) {
            safeCopy[firstDishIndex].count--;
            setAddedDishes(safeCopy);
            return;
        };
        safeCopy.splice(firstDishIndex, 1);
        setAddedDishes(safeCopy);
    };

    const payOrder = (dishesID: number[]) => {
        console.log(dishesID);
    };

    return (
        <BasketContext.Provider value={{ addedDishes, setAddedDishes, addDish, removeDish, payOrder }}>
            {children}
        </BasketContext.Provider>
    );
};
