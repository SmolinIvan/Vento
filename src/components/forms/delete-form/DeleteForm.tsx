import { FC } from 'react';
import styles from './DeleteForm.module.css';


interface DeleteFormProps {
    onSubmit: (id: number) => void;
};

export const DeleteForm: FC<DeleteFormProps> = ({ onSubmit }: DeleteFormProps) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const idValue = formData.get('id');
        const id = Number(idValue);
        onSubmit(id);
        e.currentTarget.reset();
    };

    return (
        <form className={styles.delete_form_main_block} onSubmit={handleSubmit}>
            <div className={styles.delete_form_input_block}>
                <label htmlFor="id">ID блюда:</label>
                <input type="number" name="id" />
            </div>
            <button type="submit">Удалить</button>
        </form>
    );
};
