import React from 'react';
import styles from './PopUpUI.module.css';
import { ButtonUI } from '..';

interface PopupProps {
  text:string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
  togglePopup: () => void;
  isOpen:boolean;
}

export const PopUpUI = React.forwardRef<HTMLDivElement, PopupProps>(({
    text,
    children,
    position = 'left',
    className,
    togglePopup,
    isOpen,
}, ref) => {

    return (
        <div className={styles.popup_container}>
            <ButtonUI
                className={className}
                type="popup"
                onClick={togglePopup}
                isOpen={isOpen}
            >
                {text}
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
