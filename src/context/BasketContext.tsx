
import { DishType } from '@shared-types';
import { DISHES } from '../mockData/menuItems';
import { createContext, FC, PropsWithChildren, useState } from 'react';

export type BasketDish = DishType & {
    count: number;
}

type BasketContextState = {
  addedDishes: BasketDish[];
  finalPrice: number;
  setAddedDishes: (dishes: BasketDish[]) => void;
  addDish: (dish: DishType) => void;
  removeDish: (id: number) => void;
  payOrder: (dishesID: number[]) => void;
}

const defaultContextState:BasketContextState = {
    addedDishes: [{...DISHES[0],
        count: 1,
    }, {...DISHES[1], count: 1 }, {...DISHES[3], count: 1}, {...DISHES[7], count: 1}],
    finalPrice: 0,
    setAddedDishes: () => {},
    addDish: () => {},
    removeDish: () => {},
    payOrder: () => {},
};

export const BasketContext = createContext<BasketContextState>(defaultContextState);


export const BasketProvider: FC<PropsWithChildren<object>> = ({ children }) => {
    const [addedDishes, setAddedDishes] = useState<BasketDish[]>(defaultContextState.addedDishes);
    const addDish = (dish: DishType) => {
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

    const finalPrice = addedDishes.reduce((acc:number, dish:BasketDish) => {
        return acc + (dish.count * dish.price);
    }, 0);

    return (
        <BasketContext.Provider value={{ addedDishes, finalPrice, setAddedDishes, addDish, removeDish, payOrder }}>
            {children}
        </BasketContext.Provider>
    );
};
