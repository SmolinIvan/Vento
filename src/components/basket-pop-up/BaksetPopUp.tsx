import { BasketContext } from '@context/*';
import { BasketDishType } from '@shared-types';
import { BasketPopUpUI } from '@ui';
import { useState, useEffect, useRef, useContext } from 'react';
import { DishCategory } from 'src/shared/types/types';
import styles from './BasketPopUp.module.css';


type BasketPopUpProps = {
    children: React.ReactNode;
    className?: string;
    position?: 'left' | 'right';
}

export const BasketPopUp = ({ children, className=`${styles.main}`, position='left'} :BasketPopUpProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const popUpRef = useRef<HTMLDivElement>(null);

    const {addedDishes} = useContext(BasketContext);

    const dishFilterTypes:DishCategory[] = addedDishes.reduce((acc:DishCategory[], dish:BasketDishType) => {
        if (!acc.includes(dish.type)) {
            acc.push(dish.type);
        }
        return acc;
    }, []);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popUpRef.current &&
                !popUpRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);

        };
    }, []);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const togglePopup = () => {
        setIsOpen(!isOpen);
        console.log('togglePopup');
    };
    return (
        <BasketPopUpUI
            className={className}
            ref={popUpRef}
            togglePopup={togglePopup}
            isOpen={isOpen}
            position={position}
            dishTypes={dishFilterTypes}
        >
            {children}
        </BasketPopUpUI>
    );
};
