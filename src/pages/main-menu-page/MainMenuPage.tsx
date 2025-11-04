import styles from './MainMenuPage.module.css';
import ButtonUI from '@/shared/ui/ButtonUI/ButtonUI';
import MenuList from '@/components/menu-list/MenuList';
import { DISHES } from '@/mockData/menuItems';
import { Dish } from '@/ui/menu-itemUI/MenuItemUI';
import { AppContext } from '@/context/AppContext';
import { useContext, useEffect } from 'react';
import DishFilter from '@/components/dish-filter/DishFilter';

export const MainMenuPage: React.FC = () => {
    const { dishes, activeFilter,filteredDishes,filterDishes, setDishes , setFilteredDishes,setActiveFilter } = useContext(AppContext);

    useEffect(() => {
        setDishes(DISHES);
        setFilteredDishes(DISHES);
    }, []);

    const dishFilterNames:string[] = dishes.reduce((acc:string[], dish:Dish) => {
        if (!acc.includes(dish.type)) {
            acc.push(dish.type);
        }
        return acc;
    }, ['all']);

    const handleFilterDishes = (dishType:string) => {
        filterDishes(dishType, dishes);
        setActiveFilter(dishType);
    };

    return (
        <div className={styles.main_menu_block}>
            <ButtonUI type="link" to="/" >
                <span>Меню</span>
            </ButtonUI>
            <h1 className={styles.title}>Main Menu Page</h1>
            <div className={styles.menu_block}>
                <DishFilter dishTypes={dishFilterNames} onClick={handleFilterDishes} activeFilter={activeFilter}/>
                <MenuList dishes={filteredDishes} onClick={()=> {}} />
            </div>
        </div>
    );
};
