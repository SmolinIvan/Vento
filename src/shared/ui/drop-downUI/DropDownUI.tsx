import styles from './DropDown.module.css';
import React, { FC } from 'react';

type Option = {
  value: string;
  label: string;
}

interface DropDownUIProps {
    currentValue: string;
    onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
    name: string;
};


export const DropDownUI: FC<DropDownUIProps>= ({onSelect, options, currentValue, name}) => {
    return (
        <div className={styles.dropdown_block}>
            <label className={styles.dropdown_label}>Тип блюда</label>
            <select name={name} value={currentValue} onChange={onSelect} className="dropdown">
                <option value="">Выберите вариант</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
