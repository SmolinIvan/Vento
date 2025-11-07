import { FC } from 'react';
import ButtonUI from '../ButtonUI/ButtonUI';
import styles from './ModalUI.module.css';

type ModalUIProps = {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const ModalUI:FC<ModalUIProps> = ({ isOpen, onClose , children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.main}>
            <ButtonUI onClick={() => onClose(false)} type={'button'}>Закрыть</ButtonUI>
            {children}
        </div>
    );
};

export default ModalUI;
