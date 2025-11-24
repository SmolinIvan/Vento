import styles from './MainMenuPage.module.css';
// import ButtonUI from '@/shared/ui/buttonUI/ButtonUI';
import MenuList from '@/components/menu-list/MenuList';
import { DISHES } from '@/mockData/menuItems';
import { Dish } from '@/shared/ui/menu-itemUI/MenuItemUI';
import { MenuContext } from '@/context/MenuContext';
import { useContext, useEffect, useState } from 'react';
import ModalUI from '@/shared/ui/modalUI/ModalUI';
import DishInfo from '@/components/dish-info/DishInfo';
import HeaderMenu from '@/components/header-menu/HeaderMenu';
import { DishFilter } from '@/components';


export const MainMenuPage: React.FC = () => {
    const { dishes, activeFilter,filterDishes, setDishes , setFilteredDishes,setActiveFilter } = useContext(MenuContext);
    const [isOpen, setIsOpen] = useState(false);
    // const [isOpenBasketModal, setIsOpenBasketModal] = useState(false);
    const [currentDish, setCurrentDish] = useState<Dish | null>(null);

    useEffect(() => {
        setDishes(DISHES);
        setFilteredDishes(DISHES);
    }, []);

    const handleFilterDishes = (dishType:string) => {
        filterDishes(dishType, dishes);
        setActiveFilter(dishType);
    };

    const handleOpenDishModal = (currentDish:Dish) => {
        setCurrentDish(currentDish);
        setIsOpen(true);
    };

    const handleCloseDishModal = () => {
        setIsOpen(false);
    };

    // const handleOpenBaskethModal = () => {
    //     setIsOpenBasketModal(true);
    //     setIsOpen(false);
    // };

    // const handleCloseBasketModal = () => {
    //     setIsOpenBasketModal(false);
    // };

    return (
        <div className={styles.main_menu_block}>
            <HeaderMenu />
            <h1 className={styles.title}>Main Menu Page</h1>
            <div className={styles.menu_block}>
                <DishFilter onClick={handleFilterDishes} activeFilter={activeFilter}/>
                <MenuList onClick={handleOpenDishModal} />
            </div>
            <ModalUI isOpen={isOpen} onClose={handleCloseDishModal}>
                {currentDish && <DishInfo currentDish={currentDish}/>}
            </ModalUI>

            {/* <ModalUI isOpen={isOpenBasketModal} onClose={handleCloseBasketModal}>
                <Basket />
            </ModalUI> */}

        </div>
    );
};
