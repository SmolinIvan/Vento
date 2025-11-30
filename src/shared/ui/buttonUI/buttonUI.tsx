import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonUI.module.css';

type ButtonUIProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    type: 'button' | 'link' | 'popup';
    to?: string;
    className?: string;
    isOpen?: boolean;
};
export const ButtonUI: FC<ButtonUIProps> = ({ children, onClick, type, to, className=styles.button_defaulf, isOpen }) => {
    return type === 'button' ? (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    ) : type === 'popup' ? (
        <button
            onClick={onClick}
            className={`${className} ${isOpen ? styles.button_popup_open : ''}`}
            aria-expanded={isOpen}
            aria-haspopup="true"
        >
            {children}
        </button>
    ) : (
        <Link to={to || '#'} className={className}>
            {children}
        </Link>
    );
};
