import React from 'react';
import styles from './LandingPage.module.css';
import crossainsImage from '../../assets/images/cruossains.png';
import logoCatCloud from '../../assets/logo/logoCatCloud.png';
import logoVento from '../../assets/logo/logo.png';
import HeaderMenu from '@/components/header-menu/HeaderMenu';

export const LandingPage: React.FC = () => {
    return (
        <div>
            <HeaderMenu onOpenBasket={() => {}}/>
            <img src={logoCatCloud} alt="Венюша" className={styles.logo} />
            <img src={logoVento} alt="Vento" className={styles.logo_text} />
            <div className={styles.container}>
                <h1 className={styles.title}>мы открылись !</h1>
                <img className={styles.image} src={crossainsImage} alt="Croissants" />
            </div>
        </div>
    );
};
