import { DishWithCategory } from '@/mockData/menuItems';
import { Dish } from '@/ui/menu-itemUI/MenuItemUI';
import { createContext, FC, PropsWithChildren, useState } from 'react';

type BasketContextState = {
  addedDishes: DishWithCategory[];
  setAddedDishes: (dishes: Dish[]) => void;
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
    const [addedDishes, setAddedDishes] = useState<Dish[]>(defaultContextState.addedDishes);
    const addDish = (dish: Dish) => {
        setAddedDishes([...addedDishes, dish]);
    };

    const removeDish = (id: number) => {
        setAddedDishes(addedDishes.filter((dish) => dish.id !== id));
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
