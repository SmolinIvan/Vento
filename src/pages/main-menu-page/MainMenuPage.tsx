import { DishFilter, MenuList, HeaderMenu } from '@components';
import { MenuContext } from '@context/MenuContext';
import { DishType } from '@shared-types';

import { useContext } from 'react';
import styles from './MainMenuPage.module.css';


export const MainMenuPage: React.FC = () => {
    const { dishes, activeFilter, filterDishes ,setActiveFilter } = useContext(MenuContext);

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
