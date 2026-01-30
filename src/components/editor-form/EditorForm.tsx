import { DishCategory, newDish } from '@shared-types';
import { FC, useEffect, useState } from 'react';
import styles from './EditorForm.module.css';
import { DropDownUI } from '@ui';

interface EditorFormProps {
    onSubmit: (value: newDish) => void;
}

export const EditorForm: FC<EditorFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<newDish>({
        name: '',
        type: 'salads',
        energy: {
            kcal: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
        },
        price: 0,
        description: '',
        imageRef: '',
        available: true,
    });

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const dishTypes: DishCategory[] = ['salads', 'hot', 'bakery', 'drinks', 'appetizers', 'bar'];
    const options = dishTypes.map(type => ({ value: type, label: type }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
            // Type guard: здесь e.target — это HTMLInputElement с type="checkbox", так что checked доступно
            setFormData(prev => ({
                ...prev,
                available: (e.target as HTMLInputElement).checked,
            }));
        } else if (name === 'kcal' || name === 'protein' || name === 'fat' || name === 'carbs') {
            // Обработка вложенных свойств energy
            setFormData(prev => ({
                ...prev,
                energy: {
                    ...prev.energy,
                    [name]: Number(value) || 0,
                },
            }));
        } else if (name === 'price') {
            // Обработка цены как числа
            setFormData(prev => ({
                ...prev,
                [name]: Number(value) || 0,
            }));
        } else {
            // Обработка остальных полей (включая type из DropDownUI)
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData); // Передаём данные вовне
    };

    return (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
            <div className={styles.input_block}>
                <label htmlFor="name">Название блюда:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <DropDownUI name="type" options={options} currentValue={formData.type} onSelect={handleChange} />
            <div className={styles.energy_block}>
                <div className={styles.input_block}>
                    <label htmlFor="kcal">Калории</label>
                    <input
                        className={styles.input_energy}
                        type="number"
                        id="kcal"
                        name="kcal"
                        value={formData.energy.kcal}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.input_block}>
                    <label htmlFor="protein">Белки</label>
                    <input
                        className={styles.input_energy}
                        type="number"
                        id="protein"
                        name="protein"
                        value={formData.energy.protein}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.input_block}>
                    <label htmlFor="fat">Жиры</label>
                    <input
                        className={styles.input_energy}
                        type="number"
                        id="fat"
                        name="fat"
                        value={formData.energy.fat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.input_block}>
                    <label htmlFor="carbs">Углеводы</label>
                    <input
                        className={styles.input_energy}
                        type="number"
                        id="carbs"
                        name="carbs"
                        value={formData.energy.carbs}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className={styles.input_block}>
                <label htmlFor="description">Описание</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.input_block}>
                <label htmlFor="imageRef">Ссылка на картинку</label>
                <input
                    type="text"
                    id="imageRef"
                    name="imageRef"
                    value={formData.imageRef}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.input_block}>
                <label htmlFor="available">Доступно к заказу</label>
                <input
                    type="checkbox"
                    id="available"
                    name="available"
                    checked={formData.available}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.input_block}>
                <label htmlFor="price">Цена</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className={styles.submit_button} type="submit">Добавить</button>
            {/* <ButtonUI className={styles.submit_button} type="link" to="/main">Сохранить</ButtonUI> */}
        </form>
    );
};
