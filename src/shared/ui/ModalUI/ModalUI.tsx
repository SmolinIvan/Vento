import { FC } from 'react';
import styles from './ModalUI.module.css';
import { ButtonUI } from '..';

type ModalUIProps = {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  children: React.ReactNode;
};

export const ModalUI:FC<ModalUIProps> = ({ isOpen, onClose , children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.main}>
            <ButtonUI onClick={() => onClose(false)} type={'button'} className={styles.close}>X</ButtonUI>
            {children}
        </div>
    );
};

