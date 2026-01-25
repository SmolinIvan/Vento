import styles from './ContactsPage.module.css';
import logoVento from '../../assets/logo/logo.png';

export const ContactsPage = () => {
    return (
        <div className={styles.main}>
            <img src={logoVento} alt="Vento" className={styles.logo_text} />
            <h1>Contacts</h1>
            <div className={styles.address}>
                <div className={styles.map}>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A470d91ad70e469df2c241e8522ab75f7b82a7db4611f733249c4aff088c204a2&amp;source=constructor" width="600" height="600"></iframe>
                </div>
                <div className={styles.main_description}>
                    <p className={styles.contacts}>Адрес: ул. Ясная 16</p>
                    <div className={styles.schedule}>
                        <p>Режим работы:</p>
                        <div className={styles.work_hours}>
                            <p className={styles.days}>Пн-пт:</p>
                            <p className={styles.hours}>9:00 - 22:00</p>
                        </div>
                        <div className={styles.work_hours}>
                            <p className={styles.days}>Сб-вс:</p>
                            <p className={styles.hours}>9:00 - 00:00</p>
                        </div>
                    </div>
                    <div className={styles.mail_descriprion}>
                        <p className={styles.description}><span className={styles.mail}>vento@mail.ru</span> - отзывы, предложения, организация вашего мероприятия у нас</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
