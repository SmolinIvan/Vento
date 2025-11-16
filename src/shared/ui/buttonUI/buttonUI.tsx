import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonUI.module.css';

type ButtonUIProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    type: 'button' | 'link';
    to?: string;
    className?: string;
};
const ButtonUI: FC<ButtonUIProps> = ({ children, onClick, type, to, className=styles.button_defaulf }) => {
    return type === 'button' ? (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    ) : (
        <Link to={to || '#'} className={className}>
            {children}
        </Link>
    );
};
export default ButtonUI;
