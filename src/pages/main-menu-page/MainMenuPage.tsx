import ButtonUI from '@/shared/ui/buttonUI/buttonUI';
// import MenuItemUI, { Dish } from '@/ui/menuItemUI/menu-itemUI';
// import arabiatoImage from '../../assets/images/dishes/arabiato.png';
import MenuList from '@/components/menu-list/menu-list';
import { DISHES } from '@/mockData/menuItems';

export const MainMenuPage: React.FC = () => {
    return (
        <div>
            <ButtonUI type="link" to="/" >
                <span>Меню</span>
            </ButtonUI>
            <h1>Main Menu Page</h1>
            <MenuList dishes={DISHES} onClick={() => {}} />
        </div>
    );
};
