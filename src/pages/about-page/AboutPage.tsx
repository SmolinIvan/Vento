import styles from './AboutPage.module.css';
import { HeaderMenu } from '@components';
import companyImage from '../../assets/images/company_img.png';

export const AboutPage = () => {
    return (
        <div className={styles.container}>
            <HeaderMenu />
            <div className={styles.about}>
                <img src={companyImage} className={styles.image}/>
                <div className={styles.about_us_description}>
                    <p className={styles.text}>Привет! Мы - команда <span className={styles.label}>Vento</span>. С 2025 года радуем вас авторской выпечкой, напитками и блюдами.
                    </p>
                    <p className={styles.text}>В приготовлении мы используем только качественные продукты и ингридиенты. Каждый сотрудник имеет профильное образование и знает свое дело на отлично.</p>
                    <p className={styles.text}>Если у вас имеются какие-либо вопросы или предложения - смело пишите нам на почту <span className={styles.label}>vento@mail.ru</span>. Мы постараемся дать обратную связь настолько быстро, насколько это возможно.</p>
                    <p className={styles.text}>С любовью,</p>
                    <span className={styles.label}>Vento</span>
                </div>
            </div>
        </div>
    );
};
