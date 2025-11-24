import React from 'react';
import styles from './PopUpUI.module.css';
import ButtonUI from '../buttonUI/ButtonUI';

interface PopupProps {
  text:string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
  togglePopup: () => void;
  isOpen:boolean;
}

const PopUpUI = React.forwardRef<HTMLDivElement, PopupProps>(({
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
                    {children}
                </div>
            )}
        </div>
    );
});

export default PopUpUI;
