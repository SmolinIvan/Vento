import { DishType, DishCategory } from '@shared-types';
import { FC, useState } from 'react';
import styles from './EditorForm.module.css';
import { ButtonUI, DropDownUI } from '@ui';

interface EditorFormProps {
    dish: DishType;
    onSubmit: (value: DishType) => void;
}

export const EditorForm:FC<EditorFormProps> = ({ dish, onSubmit }) => {
    const [formData, setFormData] = useState<DishType>(dish);
    const dishTypes: DishCategory[] = ['soups', 'deserts', 'pasta', 'breakfast', 'dinner'];
    const options = dishTypes.map(type => ({ value: type, label: type }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // Handle nested energy properties
        if (name === 'kcal' || name === 'protein' || name === 'fat' || name === 'carbs') {
            setFormData(prev => ({
                ...prev,
                energy: {
                    ...prev.energy,
                    [name]: Number(value) || 0, // Convert to number for energy values
                },
            }));
        } else if (name === 'price') {
            // Keep price as number
            setFormData(prev => ({
                ...prev,
                [name]: Number(value) || 0,
            }));
        } else {
            // Handle top-level properties including 'type'
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
            <DropDownUI name="type" options={options} currentValue={formData.type} onSelect={handleChange}/>
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
            <button className={styles.submit_button} type="submit">Сохранить</button>
            <ButtonUI className={styles.submit_button} type="link" to="/main">Сохранить</ButtonUI>
        </form>
    );
};
