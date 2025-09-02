import React from 'react';
import styles from './LandingPage.module.css';
import crossainsImage from '../../assets/images/cruossains.png';

const LandingPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>мы открылись !</h1>
            <img className={styles.image} src={crossainsImage} alt="Croissants" />
        </div>
    );
};

export default LandingPage;
