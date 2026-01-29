import { DishFilter, MenuList, HeaderMenu } from '@components';
import { MenuContext } from '@context/MenuContext';
import { DishType } from '@shared-types';

import { useContext, useEffect } from 'react';
import styles from './MainMenuPage.module.css';
import { fetchAllDishes } from '@API';


export const MainMenuPage: React.FC = () => {
    const { dishes, activeFilter, filterDishes, setDishes , setFilteredDishes,setActiveFilter } = useContext(MenuContext);

    useEffect(() => {
        const initializeMenu = async () => {
            try {
                // Пытаемся загрузить данные с сервера
                const data = await fetchAllDishes();
                setDishes(data);
                filterDishes(activeFilter,data);
            } catch (error) {
                console.error('Не удалось загрузить данные', error);
            }
        };

        initializeMenu().catch(error => console.error(error));
    }, [setDishes, setFilteredDishes, filterDishes]);

    const handleFilterDishes = (dishType:string) => {
        filterDishes(dishType, dishes);
        setActiveFilter(dishType);
    };

    const handleOpenDishModal = (currentDish:DishType) => {
        console.log(currentDish);
    };

    return (
        <div className={styles.main_menu_block}>
            <HeaderMenu/>
            <div className={styles.menu_block}>
                <DishFilter onClick={handleFilterDishes} activeFilter={activeFilter}/>
                <MenuList onClick={handleOpenDishModal} />
            </div>
        </div>
    );
};
