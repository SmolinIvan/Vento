import { DishType } from '@shared-types';
import { createContext, FC, PropsWithChildren, useCallback, useState } from 'react';

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
    activeFilter: 'drinks',
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

    const filterDishes = useCallback((filterType: string, dishesToFilter?: DishType[]) => {
        const targetDishes = dishesToFilter ?? dishes;

        if (filterType === 'all') {
            setFilteredDishes(targetDishes);
        } else {
            const filtered = targetDishes.filter((dish) => dish.type === filterType);
            setFilteredDishes(filtered);
        }
    }, [dishes]);

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
                // loadDishes,
            }}
        >
            {children}
        </MenuContext.Provider>
    );
};
