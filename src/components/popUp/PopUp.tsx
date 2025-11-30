
import { PopUpUI } from '@/shared/ui';
import { useState, useEffect, useRef } from 'react';

type PopUpProps = {
    buttonClassName:string;
    buttonText:string;
    children: React.ReactNode;
    position?: 'left' | 'right';
}

export const PopUp = ({buttonClassName, buttonText, children, position='left'} :PopUpProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const popUpRef = useRef<HTMLDivElement>(null);

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
    };
    return (
        <PopUpUI
            ref={popUpRef}
            className={buttonClassName}
            text={buttonText}
            togglePopup={togglePopup}
            isOpen={isOpen}
            position={position}
        >
            {children}
        </PopUpUI>
    );
};
