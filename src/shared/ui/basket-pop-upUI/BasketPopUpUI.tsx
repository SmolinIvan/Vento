import styles from './BasketPopUpUI.module.css';
import basketImage from '../../../assets/images/basket.png';
import { getDishCategotyImagePath } from '@helpers';
import { ButtonUI } from '@ui';
import React from 'react';
import { DishCategory } from '../../types/types';

type BasketPopUpUIProps = {
  children: React.ReactNode;
  dishTypes: DishCategory[];
  position?: 'left' | 'right';
  togglePopup: () => void;
  isOpen:boolean;
};

export const BasketPopUpUI = React.forwardRef<HTMLDivElement, BasketPopUpUIProps>(({
    children,
    position = 'left',
    dishTypes,
    togglePopup,
    isOpen,
}, ref) => {

    // Fixed positions for dish images
    const fixedPositions = [
        { top: 25, left: 40 },
        { top: 30, left: 75 },
        { top: 60, left: 20 },
        { top: 70, left: 55 },
        { top: 50, left: 90 },
        // Add more positions as needed
    ];

    return (
        <div className={styles.popup_container}>
            <ButtonUI
                className={styles.button}
                type="popup"
                onClick={togglePopup}
                isOpen={isOpen}
            >
                <img className={styles.basket_image} src={basketImage}></img>
                {dishTypes.map((dishFilterType, index) => {
                    const position = fixedPositions[index] || { top: 10, left: 10 }; // Default position if index exceeds array
                    return (
                        <img
                            key={index}
                            className={styles.dish}
                            src={getDishCategotyImagePath(dishFilterType)}
                            style={{ top: `${position.top}px`, left: `${position.left}px` }}
                        />
                    );
                })}
            </ButtonUI>

            {isOpen && (
                <div
                    ref={ref}
                    className={`${styles.popup_content} ${styles[position]}`}
                >
                    <ButtonUI
                        className={styles.popup_button_close}
                        type="button"
                        onClick={togglePopup}
                    >
                        X
                    </ButtonUI>
                    {children}
                </div>
            )}
        </div>
    );
});
