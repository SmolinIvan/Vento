
import { DishType } from '@shared-types';
import { createContext, FC, PropsWithChildren, useState } from 'react';

type MenuContextState = {
  dishes: DishType[]
  activeFilter: string;
  filteredDishes: DishType[];
  setDishes: (dishes: DishType[]) => void;
  setActiveFilter: (filterType: string) => void;
  setFilteredDishes: (dishes: DishType[]) => void;
  filterDishes: (filterType: string, allDishes: DishType[]) => void;
}

const defaultContextState: MenuContextState = {
    dishes: [],
    activeFilter: 'all',
    filteredDishes: [],
    setActiveFilter: () => {},
    setDishes: () => {},
    setFilteredDishes: () => {},
    filterDishes: () => {},
};

export const MenuContext = createContext<MenuContextState>(defaultContextState);

export const MenuProvider: FC<PropsWithChildren<object>> = ({ children }) => {
    const [dishes, setDishes] = useState<DishType[]>(defaultContextState.dishes);
    const [activeFilter, setActiveFilter] = useState<string>(defaultContextState.activeFilter);
    const [filteredDishes, setFilteredDishes] = useState<DishType[]>(defaultContextState.filteredDishes);

    const filterDishes = (filterType: string) => {
        if (filterType === 'all') {
            setFilteredDishes(dishes);
            return;
        }
        const filteredDishes = dishes.filter((dish) => dish.type === filterType);
        setFilteredDishes(filteredDishes);
    };

    return (
        <MenuContext.Provider
            value={{
                dishes,
                activeFilter,
                filteredDishes,
                setActiveFilter,
                setFilteredDishes,
                setDishes,
                filterDishes,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};
