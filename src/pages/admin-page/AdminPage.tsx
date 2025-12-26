import { EditorForm } from '@components';
import React, { useContext } from 'react';
import { DISHES } from '../../mockData/menuItems';
import { DishType } from '@shared-types';
import { MenuContext } from '@context/*';

export const AdminPage: React.FC = () => {
    // const navigate = useNavigate();

    const { dishes, setDishes, setFilteredDishes } = useContext(MenuContext);

    // useEffect(() => {
    //     setDishes(DISHES);
    //     setFilteredDishes(DISHES);
    // }, []);

    const handleFormSubmit = (data: DishType) => {
        setDishes([data]);
        setFilteredDishes([data]);
        console.log('Полученные данные:', dishes);
        // navigate('/main');
        // Здесь можно отправить данные на сервер
        // например: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    };

    return (
        <div>
            <EditorForm dish={DISHES[0]} onSubmit={handleFormSubmit}/>
        </div>
    );
};
