import { HeaderMenu, DishFilter, DishInfo, MenuList } from '@components';
import { MenuContext } from '@context/MenuContext';
import { DishType } from '@shared-types';
import { ModalUI } from '@ui';
import { useContext, useState, useEffect } from 'react';
import { DISHES } from '../../mockData/menuItems';
import styles from './MainMenuPage.module.css';

export const MainMenuPage: React.FC = () => {
    const { dishes, activeFilter, filterDishes, setDishes , setFilteredDishes,setActiveFilter } = useContext(MenuContext);
    const [isOpen, setIsOpen] = useState(false);
    // const [isOpenBasketModal, setIsOpenBasketModal] = useState(false);
    const [currentDish, setCurrentDish] = useState<DishType | null>(null);

    useEffect(() => {
        setDishes(DISHES);
        setFilteredDishes(DISHES);
    }, []);

    const handleFilterDishes = (dishType:string) => {
        filterDishes(dishType, dishes);
        setActiveFilter(dishType);
    };

    const handleOpenDishModal = (currentDish:DishType) => {
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
            {/* <BasketButtonUI imageRefs={[svgBurger]} onClick={function (): void {
                throw new Error('Function not implemented.');
            } } /> */}
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
