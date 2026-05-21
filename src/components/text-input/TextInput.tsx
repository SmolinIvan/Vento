import React, { ChangeEvent, FC, useState } from 'react';

interface TextInputProps {
    placeholder: string;
    onTextChange: (value: string) => void;
}

export const TextInput:FC<TextInputProps> = ({ placeholder, onTextChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        onTextChange(newValue); // Передаём вовне
    };


    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};
