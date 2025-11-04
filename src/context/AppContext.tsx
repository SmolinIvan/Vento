import { Dish } from '@/ui/menu-itemUI/MenuItemUI';
import { createContext, FC, PropsWithChildren, useState } from 'react';

type AppContextState = {
  dishes: Dish[]
  activeFilter: string;
  filteredDishes: Dish[];
  setDishes: (dishes: Dish[]) => void;
  setActiveFilter: (filterType: string) => void;
  setFilteredDishes: (dishes: Dish[]) => void;
  filterDishes: (filterType: string, allDishes: Dish[]) => void;
}

const defaultContextState: AppContextState = {
  dishes: [],
  activeFilter: 'all',
  filteredDishes: [],
  setActiveFilter: () => {},
  setDishes: () => {},
  setFilteredDishes: () => {},
  filterDishes: () => {},
};

export const AppContext = createContext<AppContextState>(defaultContextState);

export const AppProvider: FC<PropsWithChildren<object>> = ({ children }) => {
  const [dishes, setDishes] = useState<Dish[]>(defaultContextState.dishes);
  const [activeFilter, setActiveFilter] = useState<string>(defaultContextState.activeFilter);
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(defaultContextState.filteredDishes);

  const filterDishes = (filterType: string) => {
    if (filterType === 'all') {
      setFilteredDishes(dishes);
      return;
    }
    const filteredDishes = dishes.filter((dish) => dish.type === filterType);
    setFilteredDishes(filteredDishes);
  };

  return (
    <AppContext.Provider
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
    </AppContext.Provider>
  );
};
