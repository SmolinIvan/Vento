import { EditorForm } from '@components';
import React from 'react';
// import { DISHES } from '../../mockData/menuItems';
import  { newDish } from '@shared-types';
import { postDish } from '@API';

export const AdminPage: React.FC = () => {
    // const navigate = useNavigate();

    // const { dishes, setDishes, setFilteredDishes } = useContext(MenuContext);

    // useEffect(() => {
    //     setDishes(DISHES);
    //     setFilteredDishes(DISHES);
    // }, []);

    const handleFormSubmit = (data: newDish) => {
        // setDishes([data]);
        // setFilteredDishes([data]);
        postDish(data).then(response => {
            console.log('Ответ сервера:', response);
        }).catch(error => {
            console.error('Ошибка при отправке данных:', error);
        });
        console.log('Полученные данные:', data);
        // navigate('/main');
        // Здесь можно отправить данные на сервер
        // например: fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    };

    return (
        <div>
            <EditorForm onSubmit={handleFormSubmit}/>
        </div>
    );
};
